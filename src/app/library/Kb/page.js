"use client";
import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import { cards } from "@/components/CardData.js";
import CardCarousel from "@/components/CardCarousel";

export default function Inner() {
  return (
    <main className="bg-wave bg-opacity-5 font-inter">
      <div>
        <Header />
      </div>
      <section className="px-5 pt-32 pb-20">
        <div className="container">
          <div className="max-w-4xl mx-auto border border-[#D5E3E5]  flex gradient-card8 rounded-xl items-center gap-x-4 px-16 pb-8 pt-5 text-[#232B2D]  hover:text-[#ffffff] text-[rgba(142,142,142,0.4)] hover:text-[rgba(255,255,255,0.96)]">
            <svg
              className="w-5 fill-current "
              viewBox="0 0 30 24"
              fill="currentColor"
              fillRule="evenodd"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 0H3C1.35 0 0.015 1.35 0.015 3L0 21C0 22.65 1.35 24 3 24H27C28.65 24 30 22.65 30 21V6C30 4.35 28.65 3 27 3H15L12 0Z"
                fill="currentColor"
                fillOpacity="0.4"
              />
            </svg>
            <span className="py-[0.35rem] px-[0.7rem] rounded-full text-xs bg-[#00A9C6] text-white">
              1
            </span>
            <div className="pt-4">
              <h2 className="text-sm leading-tight font-semibold">
                Startup Formation and Incorporation
              </h2>
              <div className="flex space-x-3">
                <p className="text-xs mt-1 text-[#A0CBD2] "> Articles</p>
                <p className="text-xs mt-1 text-[#DDECEE]"> 13,956 Views</p>
              </div>
            </div>

            <div className="flex space-x-2 ml-auto">
              <div></div>

              <button className="py-2.5 px-3 rounded-full text-xs bg-[rgba(206,233,238,0.5)] text-white">
                <svg
                  width="10"
                  height="15"
                  viewBox="0 0 10 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.96875 13.5674L2.00054 7.59917L7.96875 1.63095"
                    stroke="#027889"
                    stroke-width="2.12203"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>

              <button className="py-2.5 px-3 rounded-full text-xs bg-[#DFEEF0] text-white">
                <svg
                  width="10"
                  height="15"
                  viewBox="0 0 10 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 1.63086L7.96822 7.59907L2 13.5673"
                    stroke="#0093AC"
                    stroke-width="2.12203"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-12 px-5">
        <div className="container">
          <div className="w-[48rem] mx-auto">
            <div className="flex items-start w-[40rem] space-x-5 mb-12">
              <img src="/library/file.svg" className="" />

              <div className=" max-w-[29rem] mx-auto justify-between">
                <h2 className=" font-bold leading-5 text-[#027889]">
                  How To Decide How Many Shares To Give Your Co-Founder
                </h2>
                <div className="flex space-x-3 text-[#646464]">
                  <p className="text-xs mt-1"> 23 Aug, 2022</p>
                  <p className="text-xs mt-1"> 345 views</p>
                </div>

                <p className="text-xs mt-3">
                  When founding your start-up, you need to consider whether or
                  not there will be co-founders. If so, how many shares will be
                  given to each...
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
