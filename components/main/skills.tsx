"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

import {
  BACKEND_SKILL,
  FRONTEND_SKILL,
  FULLSTACK_SKILL,
  SKILL_DATA,
} from "@/constants";

type Skill = {
  skill_name: string;
  image: string;
  width: number;
  height: number;
};

// ─── Header ──────────────────────────────────────────────────
const SkillText = () => (
  <div className="w-full flex flex-col items-center justify-center px-4 mb-10 sm:mb-14">
    <motion.div
      variants={slideInFromTop}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
    >
      <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5 flex-shrink-0" />
      <h1 className="Welcome-text text-[11px] sm:text-[13px]">
        Always learning, always shipping
      </h1>
    </motion.div>

    <motion.div
      variants={slideInFromLeft(0.5)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="text-xl sm:text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]"
    >
      Languages, Frameworks, Tools &amp; Security.
    </motion.div>

    <motion.div
      variants={slideInFromRight(0.5)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="cursive text-base sm:text-[20px] text-gray-200 mb-2 mt-[10px] text-center"
    >
      From ML models to encrypted pipelines &amp; beyond.
    </motion.div>
  </div>
);

// ─── Breathing Skill Card ────────────────────────────────────
// Each card knows its position in the grid. It animates:
// 1. scale 0→1.05→1, opacity 0→1 (emerge from center)
// 2. hold at scale 1 (visible for reading)
// 3. scale 1→0.95→0, opacity 1→0 (retract back to center)
// 4. pause, then repeat
const BreathingCard = ({
  skill,
  delay,
}: {
  skill: Skill;
  delay: number;
}) => {
  // Total cycle: ~8 seconds
  // 0.00 → 0.15: emerge (scale 0→1.05)
  // 0.15 → 0.20: settle (scale 1.05→1)
  // 0.20 → 0.70: hold visible
  // 0.70 → 0.75: start retract (scale 1→0.95)
  // 0.75 → 0.90: retract (scale 0.95→0)
  // 0.90 → 1.00: hidden pause

  return (
    <motion.div
      className="flex flex-col items-center gap-2 will-change-transform"
      style={{ transformOrigin: "center center" }}
      animate={{
        scale: [0, 1.06, 1, 1, 1, 0.96, 0, 0],
        opacity: [0, 0.9, 1, 1, 1, 0.8, 0, 0],
        filter: [
          "blur(8px)",
          "blur(1px)",
          "blur(0px)",
          "blur(0px)",
          "blur(0px)",
          "blur(1px)",
          "blur(8px)",
          "blur(8px)",
        ],
      }}
      transition={{
        duration: 8,
        delay: delay,
        repeat: Infinity,
        ease: "easeInOut",
        times: [0, 0.12, 0.18, 0.5, 0.65, 0.78, 0.88, 1],
      }}
    >
      <div className="w-[52px] h-[52px] sm:w-[58px] sm:h-[58px] md:w-[64px] md:h-[64px] flex items-center justify-center rounded-2xl bg-[#0c0425]/70 border border-[#ffffff08] p-2 backdrop-blur-sm">
        <Image
          src={`/skills/${skill.image}`}
          width={56}
          height={56}
          alt={skill.skill_name}
          className="w-full h-full object-contain"
        />
      </div>
      <span className="text-[9px] sm:text-[10px] text-gray-500 text-center">
        {skill.skill_name}
      </span>
    </motion.div>
  );
};

// ─── Category Section ────────────────────────────────────────
const BreathingCategory = ({
  label,
  skills,
  baseDelay,
  accent,
}: {
  label: string;
  skills: readonly Skill[];
  baseDelay: number;
  accent: string;
}) => {
  return (
    <div className="flex flex-col items-center gap-6">
      {/* Label */}
      <div className="flex items-center gap-3">
        <div className={`w-6 h-[1px] ${accent}`} />
        <span className="text-[10px] sm:text-[11px] uppercase tracking-[4px] text-gray-500 font-light">
          {label}
        </span>
        <div className={`w-6 h-[1px] ${accent}`} />
      </div>

      {/* Icons */}
      <div className="flex flex-wrap justify-center gap-5 sm:gap-7 md:gap-8 max-w-[520px]">
        {skills.map((skill, i) => (
          <BreathingCard
            key={skill.skill_name}
            skill={skill}
            delay={baseDelay + i * 0.12}
          />
        ))}
      </div>
    </div>
  );
};

// ─── Glowing Center Point ────────────────────────────────────
const GlowCenter = () => (
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0">
    {/* Outer ambient glow */}
    <motion.div
      className="absolute -inset-20 rounded-full"
      animate={{
        background: [
          "radial-gradient(circle, rgba(6,182,212,0.04) 0%, transparent 70%)",
          "radial-gradient(circle, rgba(112,66,248,0.06) 0%, transparent 70%)",
          "radial-gradient(circle, rgba(6,182,212,0.04) 0%, transparent 70%)",
        ],
      }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    />
    {/* Thin ring */}
    <svg width="120" height="120" viewBox="0 0 120 120" className="animate-spin-slow opacity-20">
      <defs>
        <linearGradient id="centerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(6,182,212,0.8)" />
          <stop offset="50%" stopColor="rgba(112,66,248,0.5)" />
          <stop offset="100%" stopColor="rgba(6,182,212,0.8)" />
        </linearGradient>
      </defs>
      <circle cx="60" cy="60" r="50" fill="none" stroke="url(#centerGrad)" strokeWidth="1" />
      <circle cx="60" cy="60" r="40" fill="none" stroke="rgba(112,66,248,0.3)" strokeWidth="0.5" />
      <circle cx="110" cy="60" r="2" fill="rgba(6,182,212,0.6)" />
    </svg>
    {/* Core dot */}
    <motion.div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-cyan-400/30"
      animate={{
        scale: [1, 1.8, 1],
        opacity: [0.3, 0.6, 0.3],
      }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    />
  </div>
);

// ─── Main Skills Section ─────────────────────────────────────
export const Skills = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="flex flex-col items-center justify-center relative overflow-hidden py-14 sm:py-24"
    >
      <SkillText />

      <div className="relative w-full max-w-4xl mx-auto px-4">
        <GlowCenter />

        <div className="relative z-10 flex flex-col gap-10 sm:gap-14">
          <BreathingCategory
            label="Languages"
            skills={[...SKILL_DATA]}
            baseDelay={0}
            accent="bg-cyan-500/30"
          />
          <BreathingCategory
            label="Frameworks & Libraries"
            skills={[...FRONTEND_SKILL]}
            baseDelay={0.8}
            accent="bg-purple-500/30"
          />
          <BreathingCategory
            label="Databases & Data"
            skills={[...BACKEND_SKILL]}
            baseDelay={1.6}
            accent="bg-blue-500/30"
          />
          <BreathingCategory
            label="Tools & Security"
            skills={[...FULLSTACK_SKILL]}
            baseDelay={2.4}
            accent="bg-emerald-500/30"
          />
        </div>
      </div>

      {/* Background video */}
      <div className="w-full h-full absolute pointer-events-none">
        <div className="w-full h-full z-[-10] opacity-20 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
          >
            <source src="/videos/skills-bg.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </section>
  );
};
