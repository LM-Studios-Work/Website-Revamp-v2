"use client";
import Link from "next/link";

export type FooterColumnProps = {
  title: string;
  links: Array<{
    href: string;
    text: string;
    title?: string;
  }>;
};

const isInternal = (href: string) =>
  href.startsWith("/") && !href.startsWith("//");

export const FooterColumn = (props: FooterColumnProps) => {
  return (
    <div className="flex flex-col">
      <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8">
        {props.title}
      </h3>
      <ul className="flex flex-col gap-3 md:gap-4">
        {props.links.map((link, index) => (
          <li key={index}>
            {isInternal(link.href) ? (
              <Link href={link.href}
                title={link.title}
                className="text-white/70 hover:text-white text-base md:text-lg transition-colors"
              >
                {link.text}
              </Link>
            ) : (
              <a
                href={link.href}
                title={link.title}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white text-base md:text-lg transition-colors"
              >
                {link.text}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
