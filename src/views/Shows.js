import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getShowsFetch } from "../store/shows";

import Card from "../components/Card";

import Spinner from "../components/Spinner";

const Shows = () => {
  const [offSet, setOffset] = useState(0);

  const token = useSelector((state) => state.auth.accessToken?.access_token);

  const showState = useSelector((state) => state.shows);
  const show = showState.show;

  const dispatch = useDispatch();
  useEffect(() => {
    token && dispatch(getShowsFetch({ token, offSet }));
  }, [token]);

  return showState.isLoading || !show ? (
    <Spinner />
  ) : (
    <Card token={token} item={show} />
  );
};

export default Shows;
