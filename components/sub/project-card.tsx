import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  link: string;
  tags?: readonly string[];
};

export const ProjectCard = ({
  src,
  title,
  description,
  link,
  tags,
}: ProjectCardProps) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] group hover:border-[#7042f8] transition-all duration-300 hover:shadow-[0_0_30px_rgba(112,66,248,0.15)]"
    >
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain group-hover:scale-105 transition-transform duration-500"
      />

      <div className="relative p-3 sm:p-4">
        <h1 className="text-lg sm:text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300 text-xs sm:text-sm leading-relaxed">{description}</p>

        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-3">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] sm:text-[11px] px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full border border-[#7042f88b] text-[#b49bff] bg-[#7042f80d] font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
};
