import React from "react";
import Banner from "./components/Banner";
import Projects from "./layout/Projects";
import Skills from "./layout/Skills";
import Contact from "./layout/Contact";

function App() {
  return (
    <React.Fragment>
      <Banner />
      <Projects onClick='test'/>
      <Skills />
      <Contact />
    </React.Fragment>
  );
}

export default App;
