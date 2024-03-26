"use client";
import React from "react";
import Header from "../components/Header";
import Fade from "react-reveal/Fade";
import Reveal from "react-reveal/Reveal";
import TextTransition, { presets } from "react-text-transition";

const TEXTS = ["legal expertise", "global reach", "trust"];

const HeroSection = ({
  title,
  title2,
  cspan,
  titlesize = "text-5xl lg:text-[6.2rem]",
  isSpecialPage = false,
}) => {
  const [index, setIndex] = React.useState(0);
  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div className="bg-[#001D20] w-full h-[24rem] lg:h-[48rem]  relative overflow-clip">
      <Header />

      <div className="hidden lg:block ">
        <div className="-top-[3rem] absolute  inset-x-0">
          <Reveal top duration={800} delay={800}>
            <img
              src="/lines-hero.svg"
              alt=""
              className="w-full opacity-70 mx-auto"
            />
          </Reveal>
        </div>
      </div>

      <div className="hidden lg:block ">
        <div className="bottom-5 absolute  inset-x-0 ">
          <Reveal bottom duration={800} delay={800}>
            <img
              src="/lines-hero1.svg"
              alt=""
              className="w-full opacity-70 mx-auto "
            />
          </Reveal>
        </div>
      </div>

      <section className=" w-[100%] h-full  flex items-center justify-center  ">
        <div className="container">
          <div className="text-center max-w-xs mt-24  xl:mt-10 lg:max-w-4xl  mx-auto">
            <Fade left duration={1100} delay={400}>
              <h1
                className={` ${titlesize} text-hero font-hero gradient-hero  text-white font-medium`}
              >
                {title}{" "}
                <span className="text-[#FFD26A] inline-flex font-semibold text-outline">
                  {isSpecialPage ? (
                    <TextTransition springConfig={presets.gentle}>
                      {TEXTS[index % TEXTS.length]}
                    </TextTransition>
                  ) : (
                    cspan
                  )}
                </span>{" "}
                {title2}
              </h1>
            </Fade>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
