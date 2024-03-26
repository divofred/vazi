"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const ButtonOne = ({ href, buttontext }) => {
  const linkVariants = {
    hover: {
      backgroundImage: [
        "linear-gradient(to right, #014E5B, #014E5B, #014E5B)",
        "linear-gradient(to right, #00DAFF, #014E5B)",
      ],
    },
    transition: { duration: 1.5 },
  };

  return (
    <Link href={"/contact-us"}>
      <motion.span
        variants={linkVariants}
        whileHover="hover"
        className=" bg-[#014E5B] bg-gradient-to-r from-[#00DAFF] to-[#014E5B] px-[6.5rem] lg:px-[13rem] py-5 rounded-full text-sm text-white font-semibold"
      >
        {buttontext}
      </motion.span>
    </Link>
  );
};

export default ButtonOne;
