import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAlbumsFetch } from "../store/albums";

const Albums = () => {
  const [offSet, setOffset] = useState(0);

  const token = useSelector((state) => state.auth.accessToken?.access_token);

  const albums = useSelector((state) => state.albums);

  console.log("ALBUMS", albums);
  console.log(token);

  const dispatch = useDispatch();
  useEffect(() => {
    token && dispatch(getAlbumsFetch({ token, offSet }));
  }, [token]);

  return <div>Albums</div>;
};

export default Albums;
