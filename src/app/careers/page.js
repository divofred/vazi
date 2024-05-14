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

      <div className=" w-full  mt-24  ">
        <section className=" pt-[6em] mb-28 align-middle">
          <div className="container px-6">
            <div className="flex flex-col lg:flex-row gap-x-10 w-fit mx-auto">
              <img className="lg:max-w-xl" src="internship-2024.jpg" alt="" />
              <div className="max-w-2xl pt-10 text-[14px]  ">
                <p className="">🚀 2024 Summer Internship Program</p>

                <p className="mt-5">
                  Applications are now open for our 2024 Summer Internship
                  Program!
                </p>

                <p className="mt-5">
                  This fully remote program, designed by our experienced team,
                  equips law students and recent graduates with the skills to
                  thrive in the dynamic tech law space.
                </p>

                <p className="mt-5">Here's what you get:</p>

                <ul className="my-5">
                  <li>
                    <strong> In-depth learning:</strong> Explore cutting-edge
                    legal issues in tech startups.
                  </li>
                  <li>
                    <strong>Skill development:</strong> Gain practical
                    experience through real-world projects and workshops.
                  </li>
                  <li>
                    <strong>Flexible schedule: </strong>Work remotely and launch
                    your career on your terms.
                  </li>
                </ul>

                <h2 className="font-semibold">Who can Apply?</h2>
                <ul className="my-5 list-disc ml-5">
                  <li>Final year law students</li>
                  <li>Law school students</li>
                  <li>Recent graduates of law</li>
                </ul>

                <h2 className="font-semibold mt-5">
                  Ready to take the next step?
                </h2>
                <p className="mt-5">
                  Applications close on May 20th, 2024. Click below to apply!
                </p>

                <p className="mt-5">
                  Shortlisted candidates will be contacted within two weeks.
                </p>

                <div className="mt-4 py-2.5 px-5 hover:bg-[#357e89] transition duration-300  bg-[#3bb4c7]  rounded  justify-center items-center gap-1 inline-flex">
                  {" "}
                  <a
                    href={"https://shorturl.at/bzIJ8"}
                    className="text-center text-white text-xs font-semibold  capitalize"
                  >
                    Apply Here
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
