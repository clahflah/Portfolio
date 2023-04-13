import React from "react";
import Banner from "./components/Banner";
import Projects from "./layout/Projects";

function App() {
  return (
    <React.Fragment>
      <Banner />
      <Projects onClick='test'/>
    </React.Fragment>
  );
}

export default App;
