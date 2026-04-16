import { FaCode } from "react-icons/fa";
import {
  RxGithubLogo,
  RxLinkedinLogo,
  RxEnvelopeClosed,
} from "react-icons/rx";

// ─── SKILLS — NO DUPLICATES ────────────────────────────────────────────
// Row 1: Languages
export const SKILL_DATA = [
  { skill_name: "Python", image: "python.png", width: 80, height: 80 },
  { skill_name: "Java", image: "java.png", width: 70, height: 70 },
  { skill_name: "JavaScript", image: "js.png", width: 65, height: 65 },
  { skill_name: "TypeScript", image: "ts.png", width: 80, height: 80 },
  { skill_name: "SQL", image: "mysql.png", width: 70, height: 70 },
  { skill_name: "C / C++", image: "cpp.png", width: 70, height: 70 },
] as const;

// Row 2: Frameworks & Libraries
export const FRONTEND_SKILL = [
  { skill_name: "React", image: "react.png", width: 80, height: 80 },
  { skill_name: "Next.js", image: "next.png", width: 80, height: 80 },
  { skill_name: "Tailwind CSS", image: "tailwind.png", width: 80, height: 80 },
  { skill_name: "Node.js", image: "node.png", width: 80, height: 80 },
  { skill_name: "Scikit-learn", image: "scikitlearn.png", width: 80, height: 80 },
] as const;

// Row 3: Databases & Data
export const BACKEND_SKILL = [
  { skill_name: "MySQL", image: "mysql.png", width: 70, height: 70 },
  { skill_name: "PostgreSQL", image: "postgresql.png", width: 70, height: 70 },
  { skill_name: "MongoDB", image: "mongodb.png", width: 40, height: 40 },
  { skill_name: "Power BI", image: "powerbi.png", width: 70, height: 70 },
] as const;

// Row 4: Tools & Security
export const FULLSTACK_SKILL = [
  { skill_name: "Git", image: "git.png", width: 70, height: 70 },
  { skill_name: "Docker", image: "docker.png", width: 70, height: 70 },
  { skill_name: "Linux", image: "linux.png", width: 70, height: 70 },
  { skill_name: "Wireshark", image: "wireshark.png", width: 70, height: 70 },
  { skill_name: "VS Code", image: "vscode.png", width: 70, height: 70 },
] as const;

export const OTHER_SKILL = [] as const;

// ─── SOCIALS ────────────────────────────────────────────────────────────
export const SOCIALS = [
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/DEVTHAKUR-90",
  },
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://www.linkedin.com/in/dev-thakur90",
  },
  {
    name: "LeetCode",
    icon: FaCode,
    link: "https://leetcode.com/u/Anonymous_9045/",
  },
] as const;

// ─── PROJECTS (descriptions from actual GitHub READMEs) ─────────────────
export const PROJECTS = [
  {
    title: "MedAI – Disease Prediction System",
    description:
      "A modern web app that predicts diseases from user-selected symptoms. Built with React + TypeScript and deployed on Vercel, it maps symptoms against a structured dataset to rank probable conditions with a clean, responsive interface.",
    image: "/projects/project-1.png",
    link: "https://github.com/DEVTHAKUR-90/MedAI-AI-Disease-Prediction-System",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
  },
  {
    title: "ClipGuard",
    description:
      "Cross-device clipboard sync over local Wi-Fi. Copy on your Windows PC, paste on your iPhone — instantly. Built with FastAPI and WebSockets, no cloud, no sign-ups. Includes file transfer, QR auth, and PWA support.",
    image: "/projects/project-2.png",
    link: "https://github.com/DEVTHAKUR-90/ClipGuard",
    tags: ["Python", "FastAPI", "WebSocket", "PWA"],
  },
  {
    title: "Secure File Transfer System",
    description:
      "AES-256-GCM encrypted file transfer with RSA-2048 key exchange, Argon2 password hashing, and role-based access control. Features chain-hashed audit logs for GRC compliance and complete zero-plaintext exposure.",
    image: "/projects/project-3.png",
    link: "https://github.com/DEVTHAKUR-90/Secure-File-Transfer-System",
    tags: ["Python", "Flask", "AES-256", "Cryptography"],
  },
] as const;

// ─── FOOTER ─────────────────────────────────────────────────────────────
export const FOOTER_DATA = [
  {
    title: "Profiles",
    data: [
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/DEVTHAKUR-90",
      },
      {
        name: "LeetCode",
        icon: FaCode,
        link: "https://leetcode.com/u/Anonymous_9045/",
      },
    ],
  },
  {
    title: "Connect",
    data: [
      {
        name: "LinkedIn",
        icon: RxLinkedinLogo,
        link: "https://www.linkedin.com/in/dev-thakur90",
      },
      {
        name: "90dthakur@gmail.com",
        icon: RxEnvelopeClosed,
        link: "mailto:90dthakur@gmail.com",
      },
    ],
  },
  {
    title: "About",
    data: [
      {
        name: "Projects",
        icon: null,
        link: "#projects",
      },
      {
        name: "Contact Me",
        icon: null,
        link: "mailto:90dthakur@gmail.com",
      },
    ],
  },
] as const;

// ─── NAV ────────────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { title: "About me", link: "#about-me" },
  { title: "Skills", link: "#skills" },
  { title: "Projects", link: "#projects" },
  { title: "Contact", link: "#contact" },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/DEVTHAKUR-90",
};
