import React from "react";
import PhotoList from "../PhotoList/PhotoList";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-wrapper">
      <h1>Photo Gallery</h1>
      <PhotoList />
    </div>
  );
};

export default Home;
