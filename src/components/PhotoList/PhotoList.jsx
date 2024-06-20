import React, { useEffect, useState } from "react";
import "./PhotoList.css";
import axios from "axios";
import Photo from "../Photo/Photo";

const PhotoList = () => {
  let [photoList, setPhotoList] = useState([]);
  let [isLoading, setIsLoading] = useState(true);

  async function downloadPhotos() {
    const resp = await axios.get(
      "https://api.slingacademy.com/v1/sample-data/photos?limit=20"
    );
    let data = resp.data.photos;
    const photos = await axios.all(data);

    console.log(photos);
    setPhotoList(photos);
    // console.log(photoList);
    setIsLoading(false);
  }
  useEffect(() => {
    downloadPhotos();
  }, []);
  return (
    <div className="photoList-wrapper">
      {isLoading
        ? "Loading"
        : photoList.map((p) => (
            <Photo title={p.title} id={p.id} image={p.url} key={p.id} />
          ))}
    </div>
  );
};

export default PhotoList;
