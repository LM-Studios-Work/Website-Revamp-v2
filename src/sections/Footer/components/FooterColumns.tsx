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
          { href: "/services/seo", text: "SEO" },
          { href: "/services/app-development", text: "App Development" },
        ]}
      />
      <FooterColumn
        title="Offices"
        links={[
          {
            href: "https://www.google.com/maps/dir//Rue du Laid Burniat 5",
            text: "Belgium",
          },
          {
            href: "https://maps.app.goo.gl/rz4znQDZNZfxDLQt8",
            text: "Buffalo",
          },
          {
            href: "https://www.google.com/maps/dir//Dubai south A5 building, 3rd Floor Building A5 - Dubai Logistics City - Dubai - United Arab Emirates",
            text: "Dubaï",
          },
          {
            href: "https://www.google.com/maps/dir//401 & 402, Floor 4, IT Tower 3 InfoCity Gate, 1, Gandhinagar, Gujarat 382007, India",
            text: "Gujarat",
          },
          {
            href: "https://www.google.com/maps/dir//32 Connaught Rd W, Sai Wan, Hong Kong",
            text: "Hong-Kong",
          },
          {
            href: "https://www.google.com/maps/dir//Blvd. Miguel de Cervantes Saavedra 23, Granada, Miguel Hidalgo, 11520 Ciudad de México, CDMX, Mexico",
            text: "Mexico",
          },
        ]}
      />
      <FooterColumn
        title="Follow us"
        links={[
          {
            href: "https://www.behance.net/odoo-designer",
            text: "Behance",
            title: "Behance",
          },
          {
            href: "https://dribbble.com/OdooBe",
            text: "Dribbble",
            title: "Dribbble",
          },
          {
            href: "https://www.instagram.com/odoo.official/",
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
