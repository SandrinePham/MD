import React from "react";
import "./imageBody.scss";

const ImageBody = ({ imageSrc, title }) => {
  return (
    <div className="imageBodyContainer">
      <img src={imageSrc} alt={title} className="imageBodyImage" />
      <h1 className="imageBodyTitle">{title}</h1>
    </div>
  );
};


export default ImageBody;
