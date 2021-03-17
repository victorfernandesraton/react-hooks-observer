import React, { useState } from "react";
import "./App.css";
import FavoriteCity from "./components/FavoriteCity";
import TemperatureTeaser from "./components/TemperarureTeaser";

function App() {
  const [show, setShow] = useState(true);
  return (
    <div className="App">
      <FavoriteCity />
      <button onClick={(e) => setShow(!show)}>Esconder</button>
      {show && <TemperatureTeaser />}
    </div>
  );
}

export default App;
