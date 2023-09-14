import "./Image.css";
import React, { useState } from "react";

const Image = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  return (
    <>
      <div className="image">
        <img
          src="https://picsum.photos/id/1/240/200"
          alt="Sample Pic"
          className={isHovered ? "hovered" : ""}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        />
      </div>
    </>
  );
};

export default Image;
