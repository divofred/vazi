// components/GradientComponent.js

import React from "react";

const GradientImg = ({ gradientFrom, gradientTo, imageUrl }) => {
  const gradientStyle = {
    background: `linear-gradient(to bottom, ${gradientFrom}, ${gradientTo})`,
  };

  return (
    <div
      className="px-2 pt-2 pb-24 rounded-2xl h-[17rem] w-fit mx-auto mr-3"
      style={gradientStyle}
    >
      <div className="w-fit rounded-xl">
        <img src={imageUrl} className="rounded-lg" alt="Gradient" />
      </div>
    </div>
  );
};

export default GradientImg;
