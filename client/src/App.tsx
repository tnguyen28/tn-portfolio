import React, { useEffect } from "react";
import "./App.scss";
import { About, Banner } from "./components/index";

const App = () => {
  return (
    <div className="App">
      <Banner />
      <About />
    </div>
  );
};

export default App;
