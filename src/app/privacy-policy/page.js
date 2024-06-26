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

      <div className=" w-full  mt-10  ">
        <section className="pt-[2em] mb-28 align-middle">
          <div className="container px-6">
            <div className="gap-x-10 w-fit mx-auto">
              <div className="max-w-2xl pt-10 text-[14px]">
                <h1 className="font-bold">Privacy Policy</h1>
                <p className="mt-2">Last Updated April 2024</p>

                <h2 className="mt-5 font-semibold">About Us</h2>
                <p className="mt-2">
                  Vazi Legal Business Attorneys is a reputable law firm
                  dedicated to providing exceptional legal services in
                  accordance with the laws of Nigeria. References to “we”, “us”,
                  “Vazi” or “Vazi Legal” in this policy refer to Vazi Legal
                  Business Attorneys.
                </p>

                <h2 className="mt-5 font-semibold">
                  Data Protection Compliance
                </h2>
                <p className="mt-2">
                  At Vazi Legal, we are committed to safeguarding the privacy
                  and confidentiality of personal information entrusted to us.
                  This Privacy Policy outlines how we collect, use, and process
                  personal information in the course of our business as well as
                  the personal information we receive from visitors to our
                  website in compliance with the Nigerian Data Protection Act
                  2023 (NDPA) and other relevant regulations.
                </p>

                <h2 className="mt-5 font-semibold">
                  How We Collect Personal Data
                </h2>
                <p className="mt-2">
                  We collect personal information through various channels,
                  including but not limited to:
                </p>
                <ul className="my-5 list-disc ml-5">
                  <li>
                    Direct interactions with clients during legal consultations
                    or service engagements.
                  </li>
                  <li>
                    Recruitment processes for potential employment
                    opportunities.
                  </li>
                  <li>
                    Website visits and interactions, including IP addresses and
                    browsing data.
                  </li>
                </ul>

                <h2 className="mt-5 font-semibold">Personal Data We Collect</h2>
                <p className="mt-2">
                  The personal data we collect may include:
                </p>
                <ul className="my-5 list-disc ml-5">
                  <li>
                    Basic information such as name, address, nationality, and
                    employment history.
                  </li>
                  <li>
                    Contact details such as email addresses, phone numbers, and
                    physical addresses.
                  </li>
                  <li>
                    Technical information such as IP addresses and website usage
                    data.
                  </li>
                  <li>
                    Background information provided during recruitment process.
                  </li>
                  <li>
                    Confidential information provided by clients or generated
                    during legal engagements.
                  </li>
                </ul>

                <h2 className="mt-5 font-semibold">
                  How We Use Your Personal Data
                </h2>
                <p className="mt-2">
                  We use personal data for the following purposes:
                </p>
                <ul className="my-5 list-disc ml-5">
                  <li>Providing legal advice and services to clients.</li>
                  <li>
                    Managing business relationships with clients, vendors, and
                    employees.
                  </li>
                  <li>
                    Compliance with legal obligations and regulatory
                    requirements.
                  </li>
                  <li>
                    Newsletter communications, events, and client updates (with
                    consent).
                  </li>
                </ul>

                <h2 className="mt-5 font-semibold">Third-Party Interactions</h2>
                <p className="mt-2">
                  Personal data may be shared within Vazi offices and associated
                  partnerships. We also engage third-party service providers for
                  certain business functions, ensuring data protection standards
                  are maintained.
                </p>

                <h2 className="mt-5 font-semibold">Data Security Measures</h2>
                <p className="mt-2">
                  Vazi implements technical and organizational measures to
                  prevent unauthorized access or loss of personal data. This
                  includes secure storage, access controls, and regular security
                  audits.
                </p>

                <h2 className="mt-5 font-semibold">
                  Data Retention and Disposal
                </h2>
                <p className="mt-2">
                  We retain personal data only for as long as necessary for
                  authorized uses or legal requirements. Data disposal
                  procedures are in place to securely delete or destroy data no
                  longer needed.
                </p>

                <h2 className="mt-5 font-semibold">Your Rights</h2>
                <p className="mt-2">
                  You have certain rights that you can exercise under certain
                  circumstances in relation to the personal information that
                  Vazi holds. These rights are to:
                </p>
                <ul className="my-5 list-disc ml-5">
                  <li>
                    request access to your personal information (known as a
                    subject access request) and request certain information in
                    relation to its processing;
                  </li>
                  <li>request rectification of your personal information;</li>
                  <li>request the erasure of your personal information;</li>
                  <li>
                    request that we restrict the processing of your personal
                    information; and
                  </li>
                  <li>
                    object to the processing of your personal information.
                  </li>
                </ul>
                <p className="mt-2">
                  In the limited circumstances where you may have provided your
                  consent to the collection, processing, and transfer of your
                  personal information for a specific purpose, you have the
                  right to withdraw your consent for that specific processing at
                  any time. Once the firm has received notification that you
                  have withdrawn your consent, we will no longer process your
                  information for the purpose or purposes you originally agreed
                  to, unless we have another legitimate basis for doing so under
                  the law.
                </p>

                <h2 className="mt-5 font-semibold">Policy Updates</h2>
                <p className="mt-2">
                  We reserve the right to update the policy as needed to reflect
                  changes in legal requirements or business practices. Updated
                  versions will be available on our website.
                </p>

                <h2 className="mt-5 font-semibold">Contact Us</h2>
                <p className="mt-2">
                  For inquiries or concerns about our Privacy Policy or data
                  protection practices, please contact:
                </p>
                <p className="mt-2">
                  Email:{" "}
                  <a href="mailto:hello@vazilegal.co" className="text-blue-600">
                    hello@vazilegal.co
                  </a>
                </p>

                <p className="mt-5">
                  Vazi Legal Business Attorneys is committed to upholding the
                  highest standards of data protection and privacy, ensuring
                  transparency and accountability in all our operations.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
