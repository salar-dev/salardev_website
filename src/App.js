import "./App.css";
import { React, useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { Navbar, Home, Skils , ParticleBackground} from "./components/index";

function App() {
  
  return (
    <div className="salardev">
      <ParticleBackground />
      <Navbar />
      <Home />
      <Skils />
    </div>
  );
}

export default App;
