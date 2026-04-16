"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { RxEnvelopeClosed } from "react-icons/rx";
import { slideInFromLeft, slideInFromTop } from "@/lib/motion";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-12 sm:py-20 px-4 sm:px-10"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideInFromTop}
        className="text-3xl sm:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 pb-6 sm:pb-10"
      >
        Get In Touch
      </motion.div>

      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideInFromLeft(0.3)}
        className="text-gray-400 text-center max-w-[600px] mb-6 sm:mb-8 text-base sm:text-lg px-2"
      >
        I&apos;m always open to discussing new projects, collaboration
        opportunities, or just a friendly chat about tech.
      </motion.p>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideInFromLeft(0.5)}
        className="flex flex-col sm:flex-row gap-4 items-center w-full sm:w-auto px-4 sm:px-0"
      >
        <Link
          href="mailto:90dthakur@gmail.com"
          className="flex items-center justify-center gap-2 py-3 px-6 button-primary text-white rounded-lg hover:shadow-[0_0_20px_rgba(112,66,248,0.3)] transition-shadow w-full sm:w-auto text-sm sm:text-base"
        >
          <RxEnvelopeClosed className="h-5 w-5 flex-shrink-0" />
          90dthakur@gmail.com
        </Link>
        <Link
          href="https://www.linkedin.com/in/dev-thakur90"
          target="_blank"
          rel="noreferrer noopener"
          className="py-3 px-6 text-gray-300 rounded-lg border border-[#7042f88b] hover:border-[#7042f8] transition-colors text-center w-full sm:w-auto text-sm sm:text-base"
        >
          Connect on LinkedIn
        </Link>
      </motion.div>
    </section>
  );
};
