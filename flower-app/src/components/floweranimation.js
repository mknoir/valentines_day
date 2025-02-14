import React, { useState, useEffect } from "react";
import "../styles/Flower.scss";
import TypewriterText from "./TypewriterText"; // Make sure this component exists

// ──────────────────────────────────────────────────────────────────────────────
// 1) Flower Component
//    Displays one flower with a randomized hue-rotate and rotation effect
// ──────────────────────────────────────────────────────────────────────────────
const Flower = ({ color, variation }) => {
  return (
    <div
      className="flower"
      style={{
        transform: `rotate(${variation}deg)`,
        animation: "growFlower 2s ease-out forwards",
      }}
    >
      <div className="flower__leafs" style={{ filter: `hue-rotate(${color}deg)` }}>
        <div className="flower__leaf flower__leaf--1"></div>
        <div className="flower__leaf flower__leaf--2"></div>
        <div className="flower__leaf flower__leaf--3"></div>
        <div className="flower__leaf flower__leaf--4"></div>
        <div className="flower__white-circle"></div>

        <div className="flower__light flower__light--1"></div>
        <div className="flower__light flower__light--2"></div>
        <div className="flower__light flower__light--3"></div>
        <div className="flower__light flower__light--4"></div>
        <div className="flower__light flower__light--5"></div>
        <div className="flower__light flower__light--6"></div>
        <div className="flower__light flower__light--7"></div>
        <div className="flower__light flower__light--8"></div>
      </div>

      <div className="flower__line">
        <div className="flower__line__leaf flower__line__leaf--1"></div>
        <div className="flower__line__leaf flower__line__leaf--2"></div>
        <div className="flower__line__leaf flower__line__leaf--3"></div>
        <div className="flower__line__leaf flower__line__leaf--4"></div>
        <div className="flower__line__leaf flower__line__leaf--5"></div>
        <div className="flower__line__leaf flower__line__leaf--6"></div>
      </div>
    </div>
  );
};

// ──────────────────────────────────────────────────────────────────────────────
// 2) Generate an array of flowers with random hue and rotation
// ──────────────────────────────────────────────────────────────────────────────
const generateFlowers = (count) => {
  const flowersArray = [];
  for (let i = 0; i < count; i++) {
    const color = Math.floor(Math.random() * 360); // hue from 0 to 359
    const variation = Math.floor(Math.random() * 40 - 20); // rotation between -20° and 20°
    flowersArray.push({ color, variation });
  }
  return flowersArray;
};

// ──────────────────────────────────────────────────────────────────────────────
// 3) Main FlowerAnimation Component
//    Renders the typewriter text, bouquet, and buttons
// ──────────────────────────────────────────────────────────────────────────────
const FlowerAnimation = () => {
  const [showFlowers, setShowFlowers] = useState(false);
  const [flowers, setFlowers] = useState([]);
  const [noClicked, setNoClicked] = useState(false);

  // Initially, generate a small bouquet of 5 flowers
  useEffect(() => {
    setFlowers(generateFlowers(5));
  }, []);

  // When "Yes" is clicked, regenerate with a larger bouquet (approx. 20 flowers)
  const handleYes = () => {
    setFlowers(generateFlowers(20));
  };

  // When "No" is clicked, update button text (flip effect handled in CSS)
  const handleNo = () => {
    setNoClicked(true);
  };

  return (
    <div className="bouquet-container">
      {/* Typewriter text appears first */}
      <TypewriterText
        text="Jishing, will you be my valentine?"
        speed={100}
        onComplete={() => setShowFlowers(true)}
      />

      {/* Bouquet: Night background and flowers */}
      <div className="bouquet">
        <div className="night"></div>
        <div className="flowers" style={{ opacity: showFlowers ? 1 : 0 }}>
          {showFlowers &&
            flowers.map((flw, index) => (
              <div
                key={index}
                style={{
                  animation: `growFlower 1s ${index * 0.2}s ease-out forwards`,
                }}
              >
                <Flower color={flw.color} variation={flw.variation} />
              </div>
            ))}
        </div>
      </div>

      {/* Buttons appear once the flowers are shown */}
      {showFlowers && (
        <div className="button-container">
          <button className="yes-button" onClick={handleYes}>
            Yes ❤️
          </button>
          <button
            className={`no-button ${noClicked ? "flipped" : ""}`}
            onClick={handleNo}
          >
            {noClicked
              ? "Error 404: You need to be my valentine!"
              : "No 💔"}
          </button>
        </div>
      )}
    </div>
  );
};

export default FlowerAnimation;
