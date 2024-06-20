import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./PhotoDetails.css";

const PhotoDetails = () => {
  let { id } = useParams();
  let [photo, setPhoto] = useState({});
  let [isLoading, setIsLoading] = useState(true);

  async function photoDataDownload() {
    const resp = await axios.get(
      `https://api.slingacademy.com/v1/sample-data/photos/${id}`
    );
    let photoData = resp.data.photo;
    setPhoto(photoData);
    setIsLoading(false);
  }
  useEffect(() => {
    photoDataDownload();
  }, []);
  return (
    <div className="wrapper">
      {isLoading ? (
        "Loading Data"
      ) : (
        <>
          <img src={photo.url} />
          <div id="content">
            <h4>{photo.title}</h4>
            <p>{photo.description}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default PhotoDetails;
