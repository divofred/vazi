// BrandImagesTicker.js

import React from "react";
import styles from "./styles/BrandImagesTicker.module.css"; // Import the CSS module

const BrandImagesTicker = ({ images }) => (
  <div className={styles.tickerContainer}>
    {images.map((image, index) => (
      <img
        key={index}
        src={image.src}
        className={styles.image}
        alt={image.alt}
      />
    ))}
  </div>
);

export default BrandImagesTicker;
