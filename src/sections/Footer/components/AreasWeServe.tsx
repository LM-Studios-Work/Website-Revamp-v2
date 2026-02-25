
import Link from 'next/link';

const AreasWeServe = () => (
  <div className="flex flex-col">
    <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8">
      Areas We Serve
    </h3>
    <ul className="flex flex-col gap-3 md:gap-4">
      {[
        // The "Web Design Midrand" link is already present here.
        { href: "/web-design-johannesburg", text: "Web Design Johannesburg" },
        { href: "/web-design-midrand", text: "Web Design Midrand" },
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
