"use client";
import Link from "next/link";
import Image from "next/image";
import ButtonOne from "./ButtonOne";

export default function Footer() {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <>
      <footer className="py-24 bg-[#001D20] bg-footer1  overflow-hidden relative">
        <div className="container ">
          <div className="text-center  max-w-[600px]  mx-auto mb-10">
            <h1 className="text-[1.3rem] lg:text-[2.7rem] text-white font-bold mb-8">
              Start leading with Vazi
            </h1>

            <ButtonOne href="/contact-us" buttontext="Contact Us" />
          </div>
        </div>
      </footer>
      <section className="mt-10">
        <div className="container">
          <div className=" w-[70%]  mx-auto">
            <hr className="border-t border-neutral-400" />
            <div className="flex flex-col lg:flex-row gap-y-2 justify-between mt-1 lg:mt-6">
              <div className="grid grid-flow-col gap-2 items-center ">
                <img src="/logo.png" className="w-8 hidden lg:block" />
                <p className=" text-sub text-[8px] lg:text-sm">
                  Copyright {year} Vazi Legal Business Attorneys. All Rights
                  Reserved. |{" "}
                  <a
                    href="/privacy-policy"
                    className="text-[#00A9C6] hover:font-semibold"
                  >
                    {" "}
                    Privacy Policy{" "}
                  </a>
                </p>
              </div>
              <div className=" inline-flex gap-4 items-center">
                <a href="https://www.linkedin.com/company/vazi-legal-business-attorneys/">
                  <img src="/linkedin.svg" className="w-3 lg:w-5" />
                </a>
                <a href="https://x.com/vazilegal?s=21&t=hSUSUGAhV1-FRZdZ_vCQiQ">
                  <img src="/x.svg" className="w-3 lg:w-5" />
                </a>
                <a href="https://www.instagram.com/vazilegal_?igsh=MXB3d3o5Yjc4NTBk">
                  <img src="/instagram.svg" className="w-3 lg:w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className=" mt-10 ">
          <div className="">
            <img
              src="/lines-footer.svg"
              alt=""
              className="max-w-[80%] opacity-50 hover:opacity-80 duration-700  mx-auto"
            />
          </div>
        </div>
      </section>
    </>
  );
}
