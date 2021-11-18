import React, { useState, useEffect } from "react";

import InfiniteScroll from "react-infinite-scroll-component";

import { useParams } from "react-router";

import { useDispatch, useSelector } from "react-redux";

import { getTracksFetch } from "../store/tracks";
import { cleanTracks } from "../store/tracks";
import { getEpisodesFetch } from "../store/episodes";

import DetailCard from "./DetailCard";
import Spinner from "./Spinner";

const Details = ({ token }) => {
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [totalSong, setTotalSong] = useState(0);
  const { id, type } = useParams();
  const dispatch = useDispatch();

  //Songs per page
  const limit = 3;

  const detailsHeader = type === "podcast" ? "All Episodes" : "All Songs";
  const songItems = useSelector((state) => {
    return state.tracks.tracks;
  });
  const songState = useSelector((state) => {
    return state.tracks.currentTracks;
  });
  const podcastItems = useSelector((state) => {
    return state.shows.show?.episodes?.items;
  });
  const currentPodcast = useSelector((state) => {
    return state.shows.show;
  });

  useEffect(() => {
    if (type === "album") {
      dispatch(getTracksFetch({ offSet: 0, token, id, limit }));
    }
    return () => {
      dispatch(cleanTracks());
    };
  }, [dispatch]);
  useEffect(() => {
    setTotalSong(songState.total);
  }, [songState]);

  const tracks = useSelector((state) => state.tracks);
  let renderedCards;
  const aboutDiv = (
    <div className="p-0 m-0 col-12 col-sm-4 order-1 order-sm-2 text-center text-sm-start">
      <div className="card-body">
        <h3 className="card-title">About</h3>
        <hr />

        <p>{currentPodcast && currentPodcast.description}</p>
      </div>
    </div>
  );

  const fetchData = () => {
    dispatch(getTracksFetch({ offSet: limit * page, token, id, limit }));
    setPage((prev) => prev + 1);
    songItems.length === totalSong && setHasMore(false);
  };

  if (type === "album") {
    renderedCards = (
      <InfiniteScroll
        dataLength={songItems.length}
        next={fetchData}
        hasMore={hasMore}
        loader={<Spinner />}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {songItems.map((item) => {
          return (
            <DetailCard
              key={item.id}
              owner={item.artists}
              duration={item.duration_ms}
              name={item.name}
              type={type}
            />
          );
        })}
      </InfiniteScroll>
    );
  } else {
    renderedCards = podcastItems.map((item, index) => {
      return (
        <div>
          <DetailCard
            name={item.name}
            img={item.images[1].url}
            key={item.id}
            type={type}
            description={item.description}
            duration={item.duration_ms}
          />
        </div>
      );
    });
  }

  return (
    <>
      <h1 className="mt-5 text-center text-sm-start">{detailsHeader}</h1>
      <hr />
      <div className="row">
        {type === "podcast" ? (
          <>
            <div className="col-12 col-sm-8 order-2 order-sm-1">
              {renderedCards}
            </div>
            {aboutDiv}
          </>
        ) : (
          renderedCards
        )}
      </div>
    </>
  );
};

export default Details;
