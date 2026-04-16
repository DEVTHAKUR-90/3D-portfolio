import type { Metadata } from "next";

export const siteConfig: Metadata = {
  title: "Dev Thakur | Portfolio",
  description:
    "CS undergraduate specializing in Machine Learning, Cybersecurity, and Computer Networks. Building real-world ML systems and security-focused applications.",
  keywords: [
    "dev thakur",
    "portfolio",
    "machine learning",
    "cybersecurity",
    "python",
    "react",
    "nextjs",
    "computer science",
    "sql",
    "data science",
    "web development",
    "network security",
  ] as Array<string>,
  authors: {
    name: "Dev Thakur",
    url: "https://github.com/DEVTHAKUR-90",
  },
} as const;
