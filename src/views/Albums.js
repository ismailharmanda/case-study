import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAlbumsFetch } from "../store/albums";

import Card from "../components/Card";

import Spinner from "../components/Spinner";

import { Route } from "react-router-dom";

const Albums = () => {
  const [offSet, setOffset] = useState(0);

  const token = useSelector((state) => state.auth.accessToken?.access_token);

  const albumState = useSelector((state) => state.albums);
  const album = albumState.album;

  const dispatch = useDispatch();
  useEffect(() => {
    token && dispatch(getAlbumsFetch({ token, offSet }));
  }, [token]);

  return albumState.isLoading || !album ? (
    <Spinner />
  ) : (
    <Card token={token} item={album} />
  );
};

export default Albums;
