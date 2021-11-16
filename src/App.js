import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAuthFetch } from "./store/auth";

import Routes from "./routes/Routes";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAuthFetch());
  }, [dispatch]);

  return <Routes />;
};

export default App;
