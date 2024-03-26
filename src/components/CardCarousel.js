import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card"; // Assuming Card component is in the same directory

const CardCarousel = ({ cards, slidesToShow }) => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow || 5, // Adjust the number of cards shown at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },

      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
        },
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
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
          {cards.map((card, index) => (
            <div key={index}>
              <Card {...card} />
            </div>
          ))}
        </Slider>
      </div>
      <div className="hidden lg:flex w-full absolute top-1/2 left-[52%] transform -translate-x-1/2 -translate-y-1/2  justify-end">
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

export default CardCarousel;
