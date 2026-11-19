import React from "react";
import { About, Banner, Contact, Experience, Footer } from "./components/index";

const App = () => {
  return (
    <div className="App">
      <Banner />
      <About />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
