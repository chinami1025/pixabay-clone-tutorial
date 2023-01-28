import React from "react";
import "./imageGrallery.css";

const ImageGrallery = ({ fetchDate }) => {
  return (
    <div>
      <div className="images-wrapper">
        {fetchDate.map((date) => (
          <div className="image" key={date.id}>
            <a href={date.pageURL} target="_blank">
              <img src={date.largeImageURL} alt="" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGrallery;
