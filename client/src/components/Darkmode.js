import React from "react";
import { useDarkMode } from "../hooks/useDarkMode.js";

const Darkmode = () => {
  const [darkMode, setDarkMode] = useDarkMode("darkmode", false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="darkmode">
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? "toggle toggled" : "toggle"}
        />
      </div>
    </nav>
  );
};

export default Darkmode;
