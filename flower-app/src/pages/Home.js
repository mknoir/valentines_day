import React from "react";
import Flower from "../components/flower";
import ValentineMessage from "../components/message";

const Home = () => {
  return (
    <div className="home">
      <ValentineMessage />
      <div className="flower-container">
        <Flower />
        <Flower />
        <Flower />
      </div>
    </div>
  );
};

export default Home;
