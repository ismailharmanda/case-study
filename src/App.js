import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAuthFetch } from "./store/auth";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAuthFetch());
  }, [dispatch]);
  return <div>App</div>;
};

export default App;
