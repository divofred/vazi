"use client";

import HeroSection from "../components/HeroSection";

import gcards from "@/components/GradientData";

import GradientCarousel from "@/components/GradientCarousel";

import brandData from "@/components/data/brandData";

import BrandImages from "@/components/BrandImages";
import NewsletterPopup from "./NewsLetterPopup";

import Marquee from "react-fast-marquee";
import Fade from "react-reveal/Fade";
import { Helmet } from "mys-react-helmet";
import parse from "html-react-parser";

export default function HomePage({ head }) {
  return (
    <>
      <Helmet>
        {parse(head)}
        <meta
          name="google-site-verification"
          content="iq72UFVtOXjk4hcm3i938IVVqLMDOdrE_kZ2OM1EPmU"
        />
      </Helmet>
      <main className="">
        <div>
          <HeroSection
            title="Powering Innovation with"
            cspan="legal expertise"
            isSpecialPage
          />
        </div>

        <section className=" w-full mt-[5%]">
          <div className="container">
            <div>
              <Fade left cascade>
                <div className="flex items-center justify-center gap-2 lg:gap-8 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-16 lg:w-auto"
                    width="370"
                    height="2"
                    viewBox="0 0 370 2"
                    fill="none"
                  >
                    <path
                      d="M0 1L370 1.00003"
                      stroke="url(#paint0_linear_375_1845)"
                      strokeOpacity="0.6"
                      strokeWidth="1.5"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_375_1845"
                        x1="0"
                        y1="1"
                        x2="370"
                        y2="1"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#D5D5D5" stopOpacity="0" />
                        <stop offset="1" stopColor="#3DABBE" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <h2 className="text-[7px]  w-auto lg:w-auto lg:text-xs text-primary leading-tight font-bold  uppercase tracking-[0.1rem] lg:tracking-[2.64px]">
                    Empowering industry leaders worldwide
                  </h2>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className=" w-16 lg:w-auto"
                    width="370"
                    height="2"
                    viewBox="0 0 370 2"
                    fill="none"
                  >
                    <path
                      d="M0 1L370 1.00003"
                      stroke="url(#paint0_linear_375_1844)"
                      strokeOpacity="0.6"
                      strokeWidth="1.5"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_375_1844"
                        x1="0"
                        y1="1"
                        x2="375"
                        y2="1"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#37A9BD" />
                        <stop offset="1" stopColor="#D5D5D5" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </Fade>
              <Fade right>
                <div className="px-[5%] py-4 max-w-[100%] mx-auto lg:my-1.5 flex gap-4 lg:gap-0 items-center justify-between  overflow-hidden">
                  <Marquee speed={80} pauseOnHover={true} autoFill={true}>
                    <div className="pl-10 flex gap-x-12 xl:gap-x-16">
                      <BrandImages logos={brandData} />
                    </div>
                  </Marquee>
                </div>
              </Fade>
              <div className="  flex justify-center items-center">
                <svg
                  width="1440"
                  height="2"
                  viewBox="0 0 1440 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 1L1440 0.999874"
                    stroke="url(#paint0_linear_375_1857)"
                    strokeOpacity="0.5"
                    strokeWidth="2"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_375_1857"
                      x1="1440"
                      y1="1"
                      x2="0"
                      y2="1"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#E4E4E4" stopOpacity="0" />
                      <stop
                        offset="0.375"
                        stopColor="#36919E"
                        stopOpacity="0.6"
                      />
                      <stop
                        offset="0.630208"
                        stopColor="#027889"
                        stopOpacity="0.6"
                      />
                      <stop offset="1" stopColor="#E4E4E4" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-[5%] bg-gradient-to-r from-[#e3f8fa9f] via-white to-[#edf9fca1] py-2 ">
          <div className="container ">
            <div>
              <div className=" items-center justify-center ">
                <h2 className="w-48 lg:w-[22rem] text-2xl lg:text-[2.6rem] text-center  mx-auto text-basic leading-none  font-extrabold mb-6 lg:my-4">
                  Industry leaders
                  <span className="text-[#FFA800]"> trust us </span>
                </h2>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-[3%] ">
          <div className="container">
            <div className="mt-10 px-5 w-full md:w-[48rem] lg:w-[58rem] xl:w-[64rem] overflow-hidden lg:overflow-visible  mx-auto  items-center ">
              <GradientCarousel gcards={gcards} />
            </div>
          </div>
        </section>
        <section className="sm:mt-[4%] bg-lines pt-[5%] pb-[15%] sm:pb-[10%] px-[5%] sm:px-0 ">
          <div className="container">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 right-0 mx-auto top-[15%] md:w-[55%] h-[70%] bg-gradient-to-b from-[#F0F2F2] to-[#FDFDFD] rounded-xl"></div>
              <div className="py-5 mx-auto relative top-0 w-full md:w-[49%] bg-gradient-to-b from-[#063E43] to-[#011E21] z-10 rounded-[1rem] sm:rounded-[2rem]">
                <div className="flex flex-col md:flex-row gap-y-6 md:gap-x-12 md:py-[4.5rem] items-center justify-center py-3 px-9">
                  <div className="hidden sm:block  px-10 py-14 md:py-18 rounded-3xl bg-[rgba(255,255,255,0.1)]">
                    <img
                      src="logo-b.svg"
                      className="w-[10rem] mx-auto"
                      alt="Logo"
                    />
                  </div>
                  <div className="w-full md:w-[47%] text-center md:text-left">
                    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white">
                      &apos;The foremost tech law firm&apos;
                    </h2>
                    <p className="text-sm mt-4 text-white px-4">
                      Vazi stands as a leading tech firm based in Nigeria and
                      the United States. We provide tailored advisory services
                      to startups, tech companies and people who invest in them.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <NewsletterPopup />
      </main>
    </>
  );
}
