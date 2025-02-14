import React, { useState } from "react";
import "../styles/flower.module.scss";

const Flower = () => {
  const [color, setColor] = useState("#ff4d79");

  const changeColor = () => {
    const colors = ["#ff4d79", "#ffcc00", "#ff66b2", "#66ff99", "#66ccff"];
    const newColor = colors[Math.floor(Math.random() * colors.length)];
    setColor(newColor);
  };

  return (
    <div className="flower" style={{ backgroundColor: color }} onClick={changeColor}>
      🌸
    </div>
  );
};

export default Flower;
