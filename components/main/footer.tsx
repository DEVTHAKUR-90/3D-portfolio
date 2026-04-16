import Link from "next/link";

import { FOOTER_DATA } from "@/constants";

export const Footer = () => {
  return (
    <footer className="w-full bg-transparent text-gray-200 shadow-lg px-4 sm:px-6 py-8 sm:py-10">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <div className="w-full flex flex-col sm:flex-row items-center sm:items-start justify-around gap-8 sm:gap-4 mb-8">
          {FOOTER_DATA.map((column) => (
            <div
              key={column.title}
              className="flex flex-col items-center gap-3"
            >
              <h3 className="font-bold text-[15px] sm:text-[16px] mb-1">
                {column.title}
              </h3>
              {column.data.map(({ icon: Icon, name, link }) => (
                <Link
                  key={`${column.title}-${name}`}
                  href={link}
                  target={link.startsWith("#") || link.startsWith("mailto:") ? undefined : "_blank"}
                  rel={link.startsWith("#") || link.startsWith("mailto:") ? undefined : "noreferrer noopener"}
                  className="flex items-center gap-2 text-[13px] sm:text-[14px] text-gray-400 hover:text-[#b49bff] transition-colors duration-200"
                >
                  {Icon && <Icon className="h-4 w-4 flex-shrink-0" />}
                  <span>{name}</span>
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="w-full border-t border-[#2A0E61]/30 pt-6">
          <p className="text-[12px] sm:text-[13px] text-gray-500 text-center">
            &copy; Dev Thakur {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
