"use client";
import Link from "next/link";
import Header from "@/components/Header";
import PersonCard from "@/components/PersonCard";
import peopleData from "@/components/data/peopleData";
import Carousel from "@/components/PeopleCarousel";

export default function LegalChild() {
  return (
    <main className="bg-wave font-inter">
      <div>
        <Header />
      </div>
      <section className="pt-32 pb-20 lg:py-24 px-5">
        <div className="container">
          <div className="">
            <div className="max-w-[54.8rem] h-[] border mx-auto rounded-xl px-5 lg:px-12 gradient-card3 pt-8">
              <Link
                href={"/legal-team"}
                className="text-xs inline-flex gap-1 text-[#6F898C] items-center "
              >
                <svg
                  width="10"
                  height="8"
                  viewBox="0 0 10 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 3.5C9.27614 3.5 9.5 3.72386 9.5 4C9.5 4.27614 9.27614 4.5 9 4.5L9 3.5ZM0.646446 4.35355C0.451184 4.15829 0.451184 3.84171 0.646446 3.64645L3.82843 0.464466C4.02369 0.269203 4.34027 0.269203 4.53553 0.464466C4.7308 0.659728 4.7308 0.97631 4.53553 1.17157L1.70711 4L4.53553 6.82843C4.7308 7.02369 4.7308 7.34027 4.53553 7.53553C4.34027 7.7308 4.02369 7.7308 3.82843 7.53553L0.646446 4.35355ZM9 4.5L1 4.5L1 3.5L9 3.5L9 4.5Z"
                    fill="#6B959C"
                  />
                </svg>
                People
              </Link>
              <div className="flex mt-6 justify-between  ">
                <div className=" lg:mt-8 max-w-md">
                  <h2 className=" text-3xl lg:text-4xl text-[#00A9C6] font-bold ">
                    Modupe Odele
                  </h2>
                  <p className="mt-1 text-sm lg:text-base text-[#8CA8AD]">
                    Manager Partner
                  </p>

                  <div className="mt-6">
                    <Link
                      href={"/"}
                      className=" px-5 lg:px-6 py-2 lg:py-2.5 bg-gradient-to-r from-[#FFDE98] to-[#FFB100] hover:from-[#0037402d] hover:to-[#5bcedf5b] text-xs lg:text-sm font-medium text-[#A87807] rounded-sm"
                    >
                      Contact
                    </Link>
                  </div>
                </div>
                <div className=" self-center">
                  <img
                    src="/people/modupe.png"
                    className="w-[10rem] lg:w-[13.5rem] mb-0.5 "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-12 px-7">
        <div className="container">
          <div className="">
            <div className="flex flex-col lg:flex-row max-w-[53.8rem] mx-auto  justify-between">
              <h2 className=" text-xl lg:text-base w-72 font-bold leading-5 gradient-text">
                Biography
              </h2>
              <div className=" text-sm lg:text-base max-w-[31rem] text-cgray">
                <p>
                  A Founding Partner at Vazi, Moe&apos;s current practice
                  centers around Fundraising Advisory, Governance and
                  Compliance, and Technology Transactions and Licensing. She
                  also has a keen interest in Decentralized Finance (DeFi),
                  Blockchain and Cryptocurrency, Smart Contracts, and DAOs,
                  advising companies in the Web3 space.
                </p>

                <p className="mt-6">
                  Moe Odele is a Tech Attorney with a strong track record of
                  providing strategic counsel to startups, emerging companies,
                  investors, and family offices. With over eight years of
                  experience, she brings valuable knowledge and industry
                  insights to her clients.
                </p>

                <p className="mt-6">
                  Moe Odele also has experience working in academia, where she
                  has contributed her expertise as a legal practitioner and
                  guest lecturer to US educational institutions. She is
                  dedicated to access to justice and women empowerment and has
                  an unwavering support for non-profit organisations and impact
                  investing industries.
                </p>

                <p className="mt-6">
                  Beyond her legal career, Moe is an avid traveler who loves
                  learning about diverse food and cultures. She is currently
                  embarking on a quest to visit every country in the World.
                </p>
              </div>
            </div>

            <div className="flex max-w-[53.8rem] mx-auto gap-x-5  justify-between  border-b border-t py-10 mt-10">
              <h2 className="w-72 font-bold leading-5 gradient-text">
                Education
              </h2>
              <div className="text-sm lg:text-base w-[31rem] text-cgray">
                <ul>
                  <li>Lagos State University – LLB</li>
                  <li>Columbia Law School- LLM</li>
                  <li>Nigerian Law school- BL</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 hidden lg:block">
        <div className="container">
          <div className="">
            <div className=" mx-auto  max-w-[53.8rem]">
              <Carousel people={peopleData} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
