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
            <div className="flex flex-col lg:flex-row gap-x-16 w-fit mx-auto">
              <img
                className="lg:max-w-xl"
                src="internship-2023-3-768x768.jpg"
              />
              <div className="max-w-md pt-10 text-[15px] ">
                <p className="">
                  We are excited to announce that the 2024 Cohort of our annual
                  internship is now open.
                </p>

                <p className="mt-5">
                  The Internship Program is fully remote, and is designed by our
                  Partners and Associates to help candidates launch their
                  careers as lawyers focused on technology startups.
                </p>

                <p className="mt-5">
                  Please find details of the Internship Program below
                </p>

                <ul className="my-5">
                  <li>
                    <strong> Application Start Date:</strong> May 15, 2024{" "}
                  </li>
                  <li>
                    <strong>Application End Date:</strong> May 19, 2024{" "}
                  </li>
                  <li>
                    <strong>Duration of Internship: </strong>8 weeks (June 5,
                    2024 to July 28, 2024)
                  </li>
                </ul>

                <h2 className="font-semibold">Who can Apply?</h2>
                <ul className="my-5 list-disc ml-5">
                  <li>Final year law students</li>
                  <li>Law school students</li>
                  <li>Recent graduates of law</li>
                </ul>

                <h2 className="font-semibold mt-5">Who can Apply?</h2>
                <p className="mt-5">
                  Click below to apply <br />
                  Shortlisted candidates will be contacted in 2 weeks
                </p>

                <div className="mt-4 py-2.5 px-5 hover:bg-[#357e89] transition duration-300  bg-[#3bb4c7]  rounded  justify-center items-center gap-1 inline-flex">
                  {" "}
                  <a
                    href={"https://airtable.com/shrg5sERPyh2ptEBb"}
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
