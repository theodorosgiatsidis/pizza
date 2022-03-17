import React, { useState } from "react";
import "./featured.css";

function Featured() {
  const [index, setIndex] = useState(0);

  const images = [
    "/img/featured.png",
    "/img/featured2.png",
    "/img/featured3.jpeg",
  ];

  const handleArrow = (direction) => {
    if (direction === "l") {
      setIndex(index !== 0 ? index - 1 : 2);
    }
    if (direction === "r") {
      setIndex(index !== 2 ? index + 1 : 0);
    }
  };

  return (
    <div className="featured-container">
      <div
        className="arrowContainer"
        style={{ left: -40 }}
        onClick={() => handleArrow("l")}
      >
        <img className="arrow" src="/img/arrowl.png" alt="" />
      </div>
      <div
        className="wrapper"
        style={{ transform: `translateX(${-100 * index}vw)` }}
      >
        {images.map((img, i) => (
          <div className="imgContainer" key={i}>
            <img src={img} alt="" />
          </div>
        ))}
      </div>
      <div
        className="arrowContainer"
        style={{ right: 0 }}
        onClick={() => handleArrow("r")}
      >
        <img className="arrow" src="/img/arrowr.png" alt="" />
      </div>
    </div>
  );
}

export default Featured;
