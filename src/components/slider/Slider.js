import "./slider.css";
import React, { useState } from "react";

export default function SliderPart() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <div className={`slider-container ${darkMode ? "dark" : ""}`}>
      <Slider darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </div>
  );
}

function Slider(props) {
  return (
    <div className={`toggler ${props.darkMode ? "dark" : ""}`}>
      <p>Light</p>
      <div className="toggler--slider" onClick={props.toggleDarkMode}>
        <div className="toggler--slider--circle"></div>
      </div>
      <p>Dark</p>
    </div>
  );
}
