import { FooterColumn } from "@/sections/Footer/components/FooterColumn";

export const FooterColumns = () => {
  return (
    <div className="box-border caret-transparent flex flex-col md:flex-row md:space-x-16 md:justify-center md:items-start max-w-[1200px] w-full mx-auto">
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
          { href: "/services/web-design", text: "Web Design" },
          { href: "/services/web-design#photography", text: "Photography" },
          { href: "/services/seo", text: "SEO" },
          { href: "/services/app-development", text: "App Development" },
        ]}
      />
      <FooterColumn
        title="Follow us"
        links={[
          {
            href: "https://www.instagram.com/lmstudiosweb/",
            text: "Instagram",
            title: "Instagram",
          },
        ]}
      />
    </div>
  );
};
