import React, { useEffect } from "react";
import "./App.scss";
import { About, Banner, Experience } from "./components/index";

const App = () => {
  return (
    <div className="App">
      <Banner />
      <About />
      <Experience />
    </div>
  );
};

export default App;
