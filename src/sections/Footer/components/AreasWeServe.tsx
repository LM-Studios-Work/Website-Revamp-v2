
import Link from 'next/link';

const AreasWeServe = () => (
  <div className="flex flex-col">
    <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8">
      Areas We Serve
    </h3>
    <ul className="flex flex-col gap-3 md:gap-4">
      {[
        { href: "/web-design-johannesburg", text: "Web Design Johannesburg" },
        { href: "/web-design-midrand", text: "Web Design Midrand" },
        { href: "/services/web-design", text: "Web Designers in Pretoria" },
        { href: "/services/web-design", text: "Professional Website Design South Africa" },
        { href: "/web-design-johannesburg", text: "Corporate Web Design Gauteng" },
        { href: "/services/web-design", text: "Event Website Builders" },
        { href: "/services/seo", text: "SEO Services South Africa" },
        { href: "/services/app-development", text: "Custom App Development" },
        { href: "/", text: "LM Studios Web Agency" },
      ].map((link, i) => (
        <li key={i}>
          <Link
            href={link.href}
            className="text-white/70 hover:text-white text-base md:text-lg transition-colors"
          >
            {link.text}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default AreasWeServe;
