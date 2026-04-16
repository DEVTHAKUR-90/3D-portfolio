"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col md:flex-row items-center justify-center px-6 sm:px-10 md:px-20 mt-28 sm:mt-32 md:mt-40 w-full z-[20] gap-8"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-center md:text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] mx-auto md:mx-0"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5 flex-shrink-0" />
          <h1 className="Welcome-text text-[11px] sm:text-[13px]">
            Developer &middot; Data Analyst &middot; Security Enthusiast
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-4 sm:mt-6 text-4xl sm:text-5xl md:text-6xl font-bold text-white max-w-[600px] w-auto h-auto mx-auto md:mx-0"
        >
          <span>
            Building{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              intelligent
            </span>{" "}
            &amp; scalable solutions.
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-base sm:text-lg text-gray-400 my-3 sm:my-5 max-w-[600px] mx-auto md:mx-0"
        >
          I&apos;m Dev Thakur — a Computer Science undergrad with a strong
          foundation in software development and data analytics. I transform
          raw data into meaningful insights while crafting efficient,
          security-focused applications.
        </motion.p>

        <motion.div
          variants={slideInFromLeft(1)}
          className="flex flex-row gap-4 justify-center md:justify-start"
        >
          <a
            href="#projects"
            className="py-2 px-5 button-primary text-center text-white cursor-pointer rounded-lg text-sm sm:text-base"
          >
            View my work
          </a>
          <a
            href="mailto:90dthakur@gmail.com"
            className="py-2 px-5 text-center text-gray-300 cursor-pointer rounded-lg border border-[#7042f88b] hover:border-[#7042f8] transition-colors text-sm sm:text-base"
          >
            Get in touch
          </a>
        </motion.div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center hidden md:flex"
      >
        <Image
          src="/hero-bg.svg"
          alt="work icons"
          height={650}
          width={650}
          draggable={false}
          className="select-none"
          loading="eager"
          priority
        />
      </motion.div>
    </motion.div>
  );
};
