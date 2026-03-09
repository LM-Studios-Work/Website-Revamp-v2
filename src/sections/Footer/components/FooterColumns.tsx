import { FooterColumn } from "@/sections/Footer/components/FooterColumn";
import AreasWeServe from "./AreasWeServe";

export const FooterColumns = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-[1fr_1fr_1fr_1.5fr_1fr] gap-10 md:gap-8">
      <FooterColumn
        title="Navigation"
        links={[
          { href: "/", text: "Home" },
          { href: "/about-us", text: "About us" },
          { href: "/projects", text: "Projects" },
          { href: "/contact", text: "Contact us", title: "" },
        ]}
      />
      <FooterColumn
        title="Services"
        links={[
          { href: "/services/web-design", text: "Web design" },
          { href: "/services/e-commerce", text: "E-Commerce" },
          { href: "/services/app-development", text: "App development" },
          { href: "/services/seo", text: "SEO" },
        ]}
      />
      <FooterColumn
        title="Industries We Serve"
        links={[
          { href: "/services/barbershop", text: "Barbershop Web Design" },
          { href: "/services/custom-wedding-websites", text: "Wedding Websites" },
          { href: "/services/private-event-websites", text: "Private Event Websites" },
        ]}
      />
      <AreasWeServe />
      <FooterColumn
        title="Follow us"
        links={[
          {
            href: "https://www.instagram.com/lmwebdesign/",
            text: "Instagram",
            title: "Instagram",
          },
        ]}
      />
    </div>
  );
};
