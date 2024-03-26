// BrandImages.js

import React from "react";

const BrandImages = ({ logos }) => (
  <>
    {logos.map((logo, index) => (
      <img
        key={index}
        src={logo.src}
        className="w-[5rem] lg:mx-5 xl:mx-2 lg:w-[8rem]"
        alt={logo.alt}
      />
    ))}
  </>
);

export default BrandImages;
