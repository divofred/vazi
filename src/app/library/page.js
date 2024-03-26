"use client";
import Image from "next/image";
import Link from "next/link";

import HeroSection from "../../components/HeroSection";
import Content from "../../components/Content";
import Librarycard from "@/components/librarycard";

import CardCarousel from "../../components/CardCarousel";

import brandData from "../../components/data/brandData";

import { cards } from "../../components/CardData.js";
import BrandImages from "@/components/BrandImages";
import featuredData from "@/components/data/featuredData";
import Marquee from "react-fast-marquee";
import Fade from "react-reveal/Fade";

export default function Home() {
  return (
    <main className="">
      <div>
        <HeroSection
          title="Powering Innovation with"
          cspan="legal expertise"
          isSpecialPage
        />
      </div>

      <section className="mt-[5%]   py-2 ">
        <div className="container ">
          <div>
            <div className=" items-center justify-center ">
              <h2 className="capitalize  w-48 lg:w-[40rem] text-2xl lg:text-[3rem] text-center  mx-auto text-[#9CC6CD] leading-none  font-extrabold mb-6 lg:my-4">
                All the legal resources to run a
                <span className="text-[#00A0BC]"> successful startup </span>
              </h2>
              <div className="w-fit mx-auto mt-6">
                <p className="text-base text-center text-[rgba(107,123,125,0.86)]">
                  Search our startup library for answers to common startup
                  questions
                </p>

                <input
                  required=""
                  placeholder="Search"
                  className=" w-full text-sm px-4 rounded-full py-1.5 mb-3 text-[0.75rem] mt-3 bg-[#F5F5F5]"
                  type="text"
                  name=""
                ></input>
              </div>

              <div className=" border w-[17rem] lg:w-fit mx-auto mt-6  py-10 px-28   rounded-xl gradient-card5">
                <div className="mt-5">
                  <p className="w-52 lg:w-[40rem] text-center text-sm lg:text-base lg:leading-7 text-white">
                    We built the startup Library to provide all the information
                    you need to run a successful startup in one place. This
                    library will provide , resources on Startup formation and
                    incorporation, ownership structure, raising capital, IP and
                    trademark management, internal corporate governance and
                    material agreements.
                  </p>
                  <div className=" w-fit mx-auto flex gap-x-3 items-center text-sm pl-2 pr-3 rounded-full py-1.5 mb-7 text-[0.75rem] mt-10 bg-[rgba(255,255,255,0.2)] ">
                    <button className="px-3 py-1 rounded-3xl  bg-[#0898AF] text-white font-semibold">
                      {" "}
                      READ{" "}
                    </button>
                    <p className="font-medium text-[#CBF8FF]">
                      Guide on how to use the library
                    </p>
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 5.25C0.585786 5.25 0.25 5.58579 0.25 6C0.25 6.41421 0.585786 6.75 1 6.75L1 5.25ZM11.5303 6.53033C11.8232 6.23744 11.8232 5.76256 11.5303 5.46967L6.75736 0.696699C6.46447 0.403805 5.98959 0.403805 5.6967 0.696699C5.40381 0.989592 5.40381 1.46447 5.6967 1.75736L9.93934 6L5.6967 10.2426C5.40381 10.5355 5.40381 11.0104 5.6967 11.3033C5.98959 11.5962 6.46447 11.5962 6.75736 11.3033L11.5303 6.53033ZM1 6.75L11 6.75L11 5.25L1 5.25L1 6.75Z"
                        fill="#CBF8FF"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-[5%]  py-2 ">
        <div className="container ">
          <div>
            <div className="flex items-center justify-center gap-x-5">
              <svg
                width="370"
                height="2"
                viewBox="0 0 370 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 1L370 1.00003"
                  stroke="url(#paint0_linear_0_3706)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_0_3706"
                    x1="0"
                    y1="1"
                    x2="370"
                    y2="1"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#D5D5D5" stop-opacity="0" />
                    <stop offset="1" stop-color="#ADCACF" />
                  </linearGradient>
                </defs>
              </svg>

              <h2 className="capitalize  text-2xl lg:text-[2.4rem] text-center   text-basic leading-none  font-extrabold  ">
                Categories
              </h2>
              <svg
                width="370"
                height="2"
                viewBox="0 0 370 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 1L370 1.00003"
                  stroke="url(#paint0_linear_0_3704)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_0_3704"
                    x1="0"
                    y1="1"
                    x2="375"
                    y2="1"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#ADCACF" />
                    <stop offset="1" stop-color="#D5D5D5" stop-opacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="w-[17rem] lg:w-fit mx-auto mt-6 relative">
              <div className="mt-10 grid grid-cols-2 gap-x-[12rem] gap-y-4  ">
                <div className="absolute top-0 left-1/2  h-full w-0.5 bg-[#DAE7E9] "></div>
                <img
                  src="icons/vazilibrary.svg"
                  className="absolute left-[48.5%]"
                />

                <Librarycard
                  title="Startup 
      Formation and
      Incorporation"
                  stitle="21"
                  slink="about"
                />
                <div></div>
                <div></div>
                <Librarycard
                  title="Ownership <br />
      structure"
                  stitle="21"
                  slink="about"
                />
                <Librarycard
                  title="Raising <br />Capital"
                  stitle="21"
                  slink="about"
                />
                <div></div>
                <div></div>
                <Librarycard
                  title="Intellectual Property Protection"
                  stitle="21"
                  slink="about"
                />
                <Librarycard
                  title="Internal Corporate Governance"
                  stitle="21"
                  slink="about"
                />
                <div></div>
                <div></div>
                <Librarycard
                  title="Material
      Agreements"
                  stitle="21"
                  slink="about"
                />
                <Librarycard
                  title="Startup Exit and Restructuring"
                  stitle="21"
                  slink="about"
                />
                <div></div>
                <div></div>
                <Librarycard
                  title="Employee Stocks Options"
                  stitle="21"
                  slink="about"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-10 pb-20 bg-[#EEF7F9] mt-10">
        <div className="container">
          <div className="w-fit mx-auto">
            <div>
              <h2 className="text-4xl font-bold">Articles</h2>
              <div className="flex text-[0.75rem] gap-x-5">
                <p>72 Articles</p>
                <p className="font-medium">8 Categories</p>
              </div>
              <p className="w-[25rem] mt-2 text-sm">
                The Vazi startup library is designed in such a way that easily
                guides you from ideation right to success, article by article!
              </p>
            </div>

            <div className="mt-10">
              <div className="flex gap-x-2 items-center">
                <span className="py-1.5 px-[0.8rem] rounded-full text-sm bg-[#00A9C6] text-white">
                  1
                </span>
                <h2 className="font-bold text-[#393939]">
                  Startup Formation and Incorporation
                </h2>
              </div>
            </div>
            <div className="p-10 border w-fit rounded-xl gradient-card6 mt-5">
              <div className="grid grid-cols-4 gap-x-10 gap-y-14">
                <div className="w-40 ">
                  <p className="text-xs text-white font-medium">
                    How Do I Calculate My Vested Shares When I Am Leaving The
                    Company?
                  </p>
                  <p className="text-xs mt-2 text-[#CCCCCC]">2 Aug, 2023</p>
                  <p className="text-[0.55rem] mt-2 text-[#cccccce1]">
                    Leaving a company can be an exciting and often
                    nerve-wracking time. Whether moving on to a new job...
                  </p>
                </div>

                <div className="w-40 ">
                  <p className="text-xs text-white font-medium">
                    How Do I Calculate My Vested Shares When I Am Leaving The
                    Company?
                  </p>
                  <p className="text-xs mt-2 text-[#CCCCCC]">2 Aug, 2023</p>
                  <p className="text-[0.55rem] mt-2 text-[#cccccce1]">
                    Leaving a company can be an exciting and often
                    nerve-wracking time. Whether moving on to a new job...
                  </p>
                </div>

                <div className="w-40 ">
                  <p className="text-xs text-white font-medium">
                    How Do I Calculate My Vested Shares When I Am Leaving The
                    Company?
                  </p>
                  <p className="text-xs mt-2 text-[#CCCCCC]">2 Aug, 2023</p>
                  <p className="text-[0.55rem] mt-2 text-[#cccccce1]">
                    Leaving a company can be an exciting and often
                    nerve-wracking time. Whether moving on to a new job...
                  </p>
                </div>

                <div className="w-40 ">
                  <p className="text-xs text-white font-medium">
                    How Do I Calculate My Vested Shares When I Am Leaving The
                    Company?
                  </p>
                  <p className="text-xs mt-2 text-[#CCCCCC]">2 Aug, 2023</p>
                  <p className="text-[0.55rem] mt-2 text-[#cccccce1]">
                    Leaving a company can be an exciting and often
                    nerve-wracking time. Whether moving on to a new job...
                  </p>
                </div>

                <div className="w-40 ">
                  <p className="text-xs text-white font-medium">
                    How Do I Calculate My Vested Shares When I Am Leaving The
                    Company?
                  </p>
                  <p className="text-xs mt-2 text-[#CCCCCC]">2 Aug, 2023</p>
                  <p className="text-[0.55rem] mt-2 text-[#cccccce1]">
                    Leaving a company can be an exciting and often
                    nerve-wracking time. Whether moving on to a new job...
                  </p>
                </div>

                <div className="w-40 ">
                  <p className="text-xs text-white font-medium">
                    How Do I Calculate My Vested Shares When I Am Leaving The
                    Company?
                  </p>
                  <p className="text-xs mt-2 text-[#CCCCCC]">2 Aug, 2023</p>
                  <p className="text-[0.55rem] mt-2 text-[#cccccce1]">
                    Leaving a company can be an exciting and often
                    nerve-wracking time. Whether moving on to a new job...
                  </p>
                </div>

                <div className="w-40 ">
                  <p className="text-xs text-white font-medium">
                    How Do I Calculate My Vested Shares When I Am Leaving The
                    Company?
                  </p>
                  <p className="text-xs mt-2 text-[#CCCCCC]">2 Aug, 2023</p>
                  <p className="text-[0.55rem] mt-2 text-[#cccccce1]">
                    Leaving a company can be an exciting and often
                    nerve-wracking time. Whether moving on to a new job...
                  </p>
                </div>

                <div className="w-40 ">
                  <p className="text-xs text-white font-medium">
                    How Do I Calculate My Vested Shares When I Am Leaving The
                    Company?
                  </p>
                  <p className="text-xs mt-2 text-[#CCCCCC]">2 Aug, 2023</p>
                  <p className="text-[0.55rem] mt-2 text-[#cccccce1]">
                    Leaving a company can be an exciting and often
                    nerve-wracking time. Whether moving on to a new job...
                  </p>
                </div>
              </div>
              <div className="mt-8">
                <button className="text-white text-xs inline-flex items-center bg-[rgba(255,255,255,0.1)] gap-x-2 rounded-full py-2.5 pl-3.5 pr-6">
                  See all articles
                  <svg
                    className="w-2.5"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 5.25C0.585786 5.25 0.25 5.58579 0.25 6C0.25 6.41421 0.585787 6.75 1 6.75L1 5.25ZM11.5303 6.53033C11.8232 6.23744 11.8232 5.76256 11.5303 5.46967L6.75736 0.696699C6.46447 0.403805 5.98959 0.403805 5.6967 0.696699C5.40381 0.989592 5.40381 1.46447 5.6967 1.75736L9.93934 6L5.6967 10.2426C5.40381 10.5355 5.40381 11.0104 5.6967 11.3033C5.98959 11.5962 6.46447 11.5962 6.75736 11.3033L11.5303 6.53033ZM1 6.75L11 6.75L11 5.25L1 5.25L1 6.75Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className=" w-full  mt-24  ">
        <section className="text-center pt-[6em] mb-28 align-middle">
          <div className="container px-6">
            <div className=" items-center justify-center  ">
              <h2 className="text-3xl mx-auto text-basic leading-tight font-bold font-inter ">
                Frequently Asked Questions
              </h2>
              <p className="text-sm mt-1.5">
                Find quick answers to common questions
              </p>
            </div>

            <div className="w-fit mx-auto  mt-10">
              <div className="flex space-x-4 ">
                <button className="text-white text-xs inline-flex items-center bg-[#00A9C6] gap-x-2 rounded-full py-3.5 px-10">
                  Formation
                </button>

                <button className="text-white text-xs inline-flex items-center bg-[#00A9C6] gap-x-2 rounded-full py-3.5 px-10">
                  Structure
                </button>

                <button className="text-white text-xs inline-flex items-center bg-[#00A9C6] gap-x-2 rounded-full py-3.5 px-10">
                  Agreement
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className=" w-full  mt-24  ">
        <section className=" pt-[6em] mb-28 align-middle">
          <div className="container px-6">
            <div className="flex gap-x-16 w-fit mx-auto">
              <img src="library/vazi-legal-startup-Upshkill-CEO-1.jpg" />
              <div className="max-w-md pt-10 ">
                <p className="font-semibold  text-xl">
                  “I can say this is the best repository of information I have
                  seen so far for a startup founder”
                </p>

                <div className="flex space-x-3 items-center mt-10">
                  <svg
                    width="7"
                    height="34"
                    viewBox="0 0 7 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="7" height="34" rx="3.5" fill="#A3E8EF" />
                  </svg>

                  <div>
                    <h2 className="font-bold">Manji Cheto</h2>
                    <p className="text-[13px]">Founder – UpSkhill</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
