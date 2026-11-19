import React from "react";
import { About, Banner, Contact, Experience, Footer } from "./components/index";

const App = () => {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Banner />
      <main id="main" tabIndex={-1}>
        <About />
        <Experience />
      </main>
      <Contact />
      <Footer />
    </>
  );
};

export default App;
