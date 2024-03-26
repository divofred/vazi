"use client";
import HeroSection from "../../components/HeroSection";
import Content from "../../components/Content";
import AboutCard from "../../components/AboutCard";
import Fade from "react-reveal/Fade";
import { Reveal } from "react-reveal";
import Marquee from "react-fast-marquee";
import BrandImages from "@/components/BrandImages";
import featuredData from "@/components/data/featuredData";

export default function about() {
  return (
    <main className="bg-wave bg-repeat">
      <div>
        <HeroSection
          title="We are more than just a law firm"
          cspan="we get it!"
        />
      </div>

      <section className="pt-24 pb-8 px-5">
        <div className="container">
          <Reveal>
            {" "}
            <div className=" justify-center grid grid-cols-1  lg:grid-cols-3  gap-4 border w-fit mx-auto p-4 rounded-3xl bg-gradient-to-b from-[#063E43] to-[#011E21]">
              <AboutCard
                iconSrc="/icons/flag.svg"
                title="Truly Collaborative"
                content="A journey shared is a journey enriched, our team works closely with our clients, truly understanding their vision and crafting legal strategies that align with their business objectives, we break complex legal jargon into understandable, actionable legal actions, central to our mission is making legal processes less daunting for our clients."
              />

              <AboutCard
                iconSrc="/icons/fence.svg"
                title="Ever Evolving"
                content="The world changes, and so do we. Our team is committed to continuous learning thus ensuring our legal solutions are always a step ahead in the fast paced tech eco system.  ready to meet the demands of the business environment."
              />

              <AboutCard
                iconSrc="/icons/badge.svg"
                title="Dedicated Hands"
                content="Our relationships are built on trust and transparency. We uphold the highest standards of professionalism, ensuring that our clients always know they are in reliable hands. As a practice, we enable our clients to make informed decisions confidently by offering not just  legal advice but providing legal empowerment."
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mt-36 ">
        <div>
          <div className="flex items-center justify-center lg:gap-8 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
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
            <h2 className="text-[7px]  text-center w-full lg:w-auto text-xs text-primary leading-tight font-bold  uppercase tracking-[2.64px]">
              FEATURED ON
            </h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
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
          <Fade top>
            <div className="px-[10%] max-w-[100%] mx-auto flex mb-3 justify-center items-center gap-8 lg:gap-16 overflow-hidden">
              <Marquee speed={80} pauseOnHover={true} autoFill={true}>
                <div className="flex gap-x-10 mr-5">
                  <BrandImages logos={featuredData} />
                </div>
              </Marquee>
            </div>
          </Fade>
          <div className="  flex justify-center items-center">
            <svg
              className="w-[60%]"
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
                  <stop offset="0.375" stopColor="#36919E" stopOpacity="0.6" />
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
      </section>

      <section className=" pt-[9em] pb-[9rem] align-middle px-4">
        <Fade bottom>
          <div className="md:max-w-[40rem] xl:max-w-fit lg:h-fit place-content-center items-center mx-auto border rounded-3xl p-[10px] bg-gradient-to-b from-[#046D7E]  to-[rgba(255,179,0,0.2)]">
            <div className="p-6 sm:p-9 rounded-2xl bg-white">
              <div className="md:w-[35rem] xl:w-[51rem]">
                <h2 className="text-2xl md:text-3xl sm:text-5xl  font-extrabold sm:leading-[3.5rem] text-[#1B383B]">
                  We are the{" "}
                  <span className="text-[#4E7A81]">leading tech law firm </span>
                  representing investors, start-up and technology driven
                  companies <span className="text-[#FFB100]">globally</span>.
                </h2>
                <p className="text-base mt-9 mb-1 text-[#1B383B] font-medium ">
                  <span className="font-semibold">
                    Our team is qualified with a robust network of
                    multi-jurisdictional{" "}
                    <span className="text-[#56868E]">
                      qualified lawyers with over 30 years of combined
                      experience.
                    </span>
                  </span>
                  By fostering relationships with key stakeholders invaluable in
                  the tech eco system,
                  <span className="font-semibold">
                    Vazi remains top tier choice tech focused law practice
                    operating in the most vibrant markets.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    </main>
  );
}
