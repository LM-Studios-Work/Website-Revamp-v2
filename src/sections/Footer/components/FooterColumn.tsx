import { Link } from "react-router-dom";

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
    <div className="box-border caret-transparent flex flex-col shrink-0 max-w-full min-h-6 w-full px-[15px] py-8 md:w-auto md:px-0 md:py-24 md:text-left">
      <h3 className="text-[23.05px] font-semibold box-border caret-transparent leading-[27.66px] mb-2 md:text-[28px] md:leading-[33.6px]">
        {props.title}
      </h3>
      <ul className="box-border caret-transparent flex flex-col list-none pl-0 pt-3 md:pt-6">
        {props.links.map((link, index) => (
          <li key={index} className="box-border caret-transparent">
            {isInternal(link.href) ? (
              <Link
                to={link.href}
                title={link.title}
                className="box-border caret-transparent block py-2 hover:text-[#e7fe56] hover:border-[#e7fe56]"
              >
                {link.text}
              </Link>
            ) : (
              <a
                href={link.href}
                title={link.title}
                className="box-border caret-transparent block py-2 hover:text-[#e7fe56] hover:border-[#e7fe56]"
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
