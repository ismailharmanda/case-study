import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

import { useDispatch, useSelector } from "react-redux";

import { getTracksFetch } from "../store/tracks";
import { getEpisodesFetch } from "../store/episodes";
import DetailCard from "./DetailCard";

const Details = ({ token }) => {
  const [offSet, setOffset] = useState(0);
  const { id, type } = useParams();
  const dispatch = useDispatch();

  const detailsHeader = type === "podcast" ? "All Episodes" : "All Songs";
  const songItems = useSelector((state) => {
    return state.tracks.tracks;
  });
  const podcastItems = useSelector((state) => {
    return state.shows.show?.episodes?.items;
  });
  const currentPodcast = useSelector((state) => {
    return state.shows.show;
  });
  console.log("SONGS", songItems);

  useEffect(() => {
    if (type === "album") {
      dispatch(getTracksFetch({ offSet, token, id }));
    }
  }, [dispatch]);

  const tracks = useSelector((state) => state.tracks);
  console.log("AAAAAAAAAAAA", podcastItems);
  let renderedCards;
  const aboutDiv = (
    <div className="p-0 m-0 col-4">
      <div className="card-body">
        <h3 className="card-title">About</h3>
        <hr />

        <p>{currentPodcast && currentPodcast.description}</p>
      </div>
    </div>
  );
  if (type === "album") {
    renderedCards = songItems.map((item) => {
      return (
        <DetailCard
          key={item.id}
          owner={item.artists}
          duration={item.duration_ms}
          name={item.name}
          type={type}
        />
      );
    });
  } else {
    renderedCards = podcastItems.map((item, index) => {
      return (
        <div>
          <DetailCard img={item.images[1].url} key={item.id} type={type} />
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
            <div className="col-8">{renderedCards}</div>
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
