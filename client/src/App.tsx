import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { AppState } from "./redux/models/types/state";

const App = () => {
  const dispatch = useDispatch();
  const message = useSelector((state:AppState)=> state.counts.call)

  useEffect(() => {
    dispatch.counts.call()
  }, []);

  return (
    <div>
      <div>welcome.</div>
      <div>{message}</div>
    </div>
  );
};

export default App;
