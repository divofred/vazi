"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const [isMobileMenuVisible, setMobileMenuVisibility] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuVisibility(!isMobileMenuVisible);
  };

  return (
    <header className="py-6 w-full  backdrop-blur-sm bg-[#001D20] z-30 fixed">
      <div className="container">
        <nav className="relative borderS max-w-4xl mx-auto flex flex-row px-4 items-center justify-between">
          <div className="flex items-center justify-between">
            <a className="navbar-brand flex-none" href="/">
              <img src="/logo.png" className="h-6" alt="Logo" />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex mx-auto space-x-5">
            <Link
              href={"/"}
              className={pathname === "/" ? "active" : "" + "alink"}
            >
              Home
            </Link>
            <img src="/ellipse.svg" className="w-[3px]  inline-flex" />
            <Link
              href={"/about"}
              className={pathname === "/about" ? "active" : "" + "alink"}
            >
              About
            </Link>
            <img src="/ellipse.svg" className="w-[3px]  inline-flex" />
            <Link
              href={"/services"}
              className={pathname === "/services" ? "active" : "" + "alink"}
            >
              Services
            </Link>
            <img src="/ellipse.svg" className="w-[3px]  inline-flex" />
            <Link
              href={"/people"}
              className={pathname.includes("/people") ? "active" : "" + "alink"}
            >
              People
            </Link>
            {/* <img src="/ellipse.svg" className="w-[3px] inline-flex" />
            <Link
              href={"/blog"}
              className={pathname === "/blog" ? "active" : "" + "alink"}
            >
              Blog
            </Link> */}
          </div>

          {/* Desktop Menu - Startup Library */}
          <div className="hidden lg:flex">
            <div className="py-2 px-3 hover:bg-opacity-0 transition duration-300  bg-white bg-opacity-10 rounded-[16.93px]  border-[#5ac8d98c] border-2  justify-center items-center gap-1 inline-flex">
              {" "}
              <Link
                href={"/library"}
                className="text-center text-cyan-100 text-xs font-semibold  capitalize"
              >
                Startup Library
              </Link>
            </div>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="lg:hidden mt-4  ml-auto pr-5">
            <button
              className="text-white focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
          <br />
          {/* Mobile Menu Items */}
        </nav>
        <div className=" ">
          <div
            className={`lg:hidden mt-7 space-y-4 flex text-center pr-4  flex-col ${
              isMobileMenuVisible ? "" : "hidden"
            }`}
          >
            <Link
              href={"/"}
              className="text-white text-[13px] hover:text-cyan-200 font-semibold"
            >
              Home
            </Link>
            <Link
              href={"/about"}
              className="text-white text-[13px] hover:text-cyan-200 font-semibold"
            >
              About
            </Link>
            <Link
              href={"/services"}
              className="text-white text-[13px] hover:text-cyan-200 font-semibold"
            >
              Services
            </Link>

            <Link
              href={"/people"}
              className="text-white text-[13px] hover:text-cyan-200 font-semibold"
            >
              People
            </Link>

            {/* <Link
              href={"/blog"}
              className="text-white text-[13px] hover:text-cyan-200 font-semibold"
            >
              Blog
            </Link> */}
            <Link
              href={"/"}
              className="text-white text-[13px] hover:text-cyan-200 font-semibold"
            >
              Startup Library
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
