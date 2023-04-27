import React, {useRef} from "react";
import Banner from "./components/Banner";
import Projects from "./layout/Projects";
import Skills from "./layout/Skills";
import Contact from "./layout/Contact";

function App() {
  const projectRef = useRef(null);

  return (
    <React.Fragment>
      <Banner projectRef={projectRef}/>
      <Projects projectRef={projectRef}/>
      <Skills />
      <Contact />
    </React.Fragment>
  );
}

export default App;
