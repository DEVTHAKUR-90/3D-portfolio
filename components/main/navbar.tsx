"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";

import { NAV_LINKS, SOCIALS } from "@/constants";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClickOutside = useCallback(
    (e: MouseEvent | TouchEvent) => {
      if (
        isMobileMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    },
    [isMobileMenuOpen]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [handleClickOutside]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav
      className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001427] backdrop-blur-md z-50 px-4 sm:px-6 md:px-10"
      role="navigation"
    >
      <div className="w-full h-full flex items-center justify-between m-auto">
        {/* Logo — click scrolls to top */}
        <button
          onClick={scrollToTop}
          className="flex items-center flex-shrink-0 gap-2 cursor-pointer bg-transparent border-none"
          aria-label="Scroll to top"
        >
          <span className="text-2xl md:text-3xl">⚡</span>
          <span className="font-bold text-gray-300 text-sm md:text-base">
            Dev Thakur
          </span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex w-[500px] h-full flex-row items-center justify-between mr-20">
          <div className="flex items-center justify-between w-full h-auto border-[rgba(112,66,248,0.38)] bg-[rgba(3,0,20,0.37)] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className="cursor-pointer hover:text-[rgb(112,66,248)] transition text-sm"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>

        {/* Desktop Social Icons */}
        <div className="hidden md:flex flex-row gap-5">
          {SOCIALS.map(({ link, name, icon: Icon }) => (
            <Link
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              key={name}
              title={name}
              aria-label={name}
            >
              <Icon className="h-6 w-6 text-white hover:text-[#b49bff] transition-colors" />
            </Link>
          ))}
        </div>

        {/* Hamburger */}
        <button
          ref={buttonRef}
          className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-[#7042f8] rounded-md text-2xl p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`absolute top-[65px] left-0 w-full md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen
            ? "max-h-[400px] opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
        }`}
        style={{
          background: "rgba(3, 0, 20, 0.85)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
        }}
      >
        <div className="p-6 flex flex-col items-center text-gray-300 border-t border-[#2A0E61]/50">
          <div className="flex flex-col items-center gap-5 w-full">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className="cursor-pointer hover:text-[rgb(112,66,248)] transition text-lg"
                onClick={closeMenu}
              >
                {link.title}
              </Link>
            ))}
          </div>
          <div className="flex justify-center gap-8 mt-6 pt-6 border-t border-[#2A0E61]/30 w-full">
            {SOCIALS.map(({ link, name, icon: Icon }) => (
              <Link
                href={link}
                target="_blank"
                rel="noreferrer noopener"
                key={name}
                onClick={closeMenu}
              >
                <Icon className="h-7 w-7 text-white hover:text-[#b49bff] transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
