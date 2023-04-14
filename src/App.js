import React from "react";
import Banner from "./components/Banner";
import Projects from "./layout/Projects";
import Skills from "./layout/Skills";

function App() {
  return (
    <React.Fragment>
      <Banner />
      <Projects onClick='test'/>
      <Skills />
    </React.Fragment>
  );
}

export default App;
