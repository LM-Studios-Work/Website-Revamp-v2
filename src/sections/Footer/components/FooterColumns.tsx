import { FooterColumn } from "@/sections/Footer/components/FooterColumn";

export const FooterColumns = () => {
  return (
    <div className="box-border caret-transparent flex flex-wrap ml-[-15px] mr-[-15px] border-t-[color(srgb_1_1_1_/_0.15)] border-t-2 border-b-white border-x-white">
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
        title="Offices"
        links={[
          {
            href: "https://www.google.com/maps/dir//Johannesburg, South Africa",
            text: "Johannesburg",
          },
          {
            href: "https://www.google.com/maps/dir//Cape Town, South Africa",
            text: "Cape Town",
          },
          {
            href: "https://www.google.com/maps/dir//Durban, South Africa",
            text: "Durban",
          },
          {
            href: "https://www.google.com/maps/dir//Pretoria, South Africa",
            text: "Pretoria",
          },
        ]}
      />
      <FooterColumn
        title="Follow us"
        links={[
          {
            href: "https://www.behance.net/lm-studios",
            text: "Behance",
            title: "Behance",
          },
          {
            href: "https://dribbble.com/LMStudios",
            text: "Dribbble",
            title: "Dribbble",
          },
          {
            href: "https://www.instagram.com/lmstudios.official/",
            text: "Instagram",
            title: "Instagram",
          },
          {
            href: "https://www.youtube.com/playlist?list=PL1-aSABtP6ADgnXqXDdpxU7-8ixNGUsrz",
            text: "Youtube",
            title: "Youtube",
          },
        ]}
      />
    </div>
  );
};
