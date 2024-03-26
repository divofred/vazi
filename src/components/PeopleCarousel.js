// Carousel.jsx

import React, { useRef } from "react";
import Slider from "react-slick";
import PersonCard from "./PersonCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({ people }) => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const goToNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const goToPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  return (
    <div className="relative">
      <div className="">
        <Slider ref={sliderRef} {...settings}>
          {people.map((person, index) => (
            <PersonCard key={index} person={person} />
          ))}
        </Slider>
      </div>
      <div className=" w-[56.8rem] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-end">
        <button
          onClick={goToNext}
          className="gradient-button text-white py-2 px-2.5 rounded-full"
        >
          <svg
            className="m-2.5"
            width="13"
            height="18"
            viewBox="0 0 13 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.04175 15.7759L10.5602 9.08283L2.04175 2.38978"
              stroke="#1794A9"
              strokeOpacity="0.4"
              strokeWidth="3.65076"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
