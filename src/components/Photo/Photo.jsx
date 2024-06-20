import React from "react";
import "./Photo.css";
import { Link } from "react-router-dom";

const Photo = ({ id, image }) => {
  return (
    <div className="photo-wrapper">
      <Link to={`/photoDetails/${id}`}>
        <img src={image} alt="img" className="image" />
      </Link>
    </div>
  );
};

export default Photo;
