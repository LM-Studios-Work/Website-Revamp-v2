import type { ProjectCardProps } from "@/sections/ProjectsSection/components/ProjectCard";

export const tagStyle = {
  lime: "text-xs font-semibold inline-block text-center uppercase text-nowrap border-[#e7fe56] px-3 py-1.5 rounded-full border border-solid text-[#e7fe56]",
  purple:
    "text-xs font-semibold inline-block text-center uppercase text-nowrap border-purple-300 px-3 py-1.5 rounded-full border border-solid text-purple-300",
  teal: "text-xs font-semibold inline-block text-center uppercase text-nowrap border-teal-300 px-3 py-1.5 rounded-full border border-solid text-teal-300",
};

export const projects: ProjectCardProps[] = [
  {
    imageUrl: "/preview/v0-barbershop-durban.vercel.app_(laptop).webp",
    imageAlt: "Custom web design Durban — Xclusive Barber salon online booking system by small business website developers LM Studios",
    title: "Xclusive Barber - Davenport",
    tags: [
      { text: "Barber & Grooming", className: tagStyle.lime },
      { text: "Booking System", className: tagStyle.purple },
      { text: "Website Design", className: tagStyle.teal },
    ],
    description:
      "Custom web design Durban — we replaced mid-haircut phone calls with a 100% automated Next.js booking platform, delivering sub-second load times and top 3 local map pack rankings.",
    discoverMoreUrl: "/projects/xclusive-barber",
  },
  {
    imageUrl: "/preview/www.ndilayavhupo.co.za_(laptop) (2).webp",
    imageAlt: "Travel agency web design — Ndilayavhupo Travels custom tourism booking platform by LM Studios tour operator website developers",
    title: "Ndilayavhupo Travels",
    tags: [
      { text: "Travel & Tourism", className: tagStyle.lime },
      { text: "Booking Platform", className: tagStyle.purple },
      { text: "Local SEO", className: tagStyle.teal },
    ],
    description:
      "Travel agency web design for a Thohoyandou-based tour operator — we built a custom tourism booking platform with WhatsApp funnels, boosting group trip fill rates by 60% and local search traffic by 5x.",
    discoverMoreUrl: "/projects/ndilayavhupo-travels",
  },

  {
    imageUrl: "/preview/mrfloatlogistics.com_(laptop) (6).webp",
    imageAlt: "Transport company web design — Mr. Float Logistics custom WhatsApp booking integration by LM Studios logistics website developers",
    title: "Mr. Float Logistics",
    tags: [
      { text: "Logistics & Transport", className: tagStyle.lime },
      { text: "WhatsApp Integration", className: tagStyle.purple },
      { text: "Lead Generation", className: tagStyle.teal },
    ],
    description:
      "Transport company web design with custom WhatsApp booking integration — we unified six services (taxi, car hire, airport shuttles, deliveries) into one high-converting platform, tripling daily enquiries.",
    discoverMoreUrl: "/projects/mr-float-logistics",
  },
  {
    imageUrl: "/preview/aluminiumweb.vercel.app_(laptop) (1).webp",
    imageAlt: "Vuza Trading",
    title: "Vuza Trading",
    tags: [
      { text: "Logistics & Services", className: tagStyle.lime },
      { text: "Business Solutions", className: tagStyle.purple },
      { text: "Informational", className: tagStyle.teal },
    ],
    description:
      "A professional trading platform with real-time analytics and user-friendly interface.",
    discoverMoreUrl: "https://aluminiumweb.vercel.app/",
  },
  {
    imageUrl: "/preview/mothupi-and-lesego (1).webp",
    imageAlt: "Mothupi & Lesego - Wedding",
    title: "Mothupi & Lesego - Wedding",
    tags: [
      { text: "Personal & Events", className: tagStyle.lime },
      { text: "Interactive / Special", className: tagStyle.purple },
      { text: "Informational", className: tagStyle.teal },
    ],
    description:
      "A wedding invitation with an interactive map and a gift registry.",
    discoverMoreUrl: "https://mothupi-and-lesego.co.za",
  },

  {
    imageUrl: "/preview/monareselahle.co.za_(laptop) (1).webp",
    imageAlt: "Monare Selahle",
    title: "Monare Selahle",
    tags: [
      { text: "Technology", className: tagStyle.lime },
      { text: "Professional Portfolios", className: tagStyle.purple },
      { text: "Showcase", className: tagStyle.teal },
    ],
    description: "Modern portfolio for a Computer Science student.",
    discoverMoreUrl: "https://monareselahle.co.za",
  },
  {
    imageUrl: "/preview/www.rokundamboyi.com_(laptop) (1).webp",
    imageAlt: "Rokunda Mboyi",
    title: "Rokunda Mboyi",
    tags: [
      { text: "Creative & Design", className: tagStyle.lime },
      { text: "Professional Portfolios", className: tagStyle.purple },
      { text: "Showcase", className: tagStyle.teal },
    ],
    description:
      "A graduate in Architecture, focused on creating spaces that inspire and elevate the human experience.",
    discoverMoreUrl: "https://rokundamboyi.com/",
  },
  {
    imageUrl: "/preview/shotsbyozee.co.za_(laptop) (2).webp",
    imageAlt: "Shots By Ozee",
    title: "Shots By Ozee",
    tags: [
      { text: "Creative & Design", className: tagStyle.lime },
      { text: "Professional Portfolios", className: tagStyle.purple },
      { text: "Showcase", className: tagStyle.teal },
    ],
    description:
      "A photographer and visionary creative currently studying Chemical Engineering.",
    discoverMoreUrl: "https://shotsbyozee.co.za",
  },
  {
    imageUrl: "/preview/uvhu-portfolio-9rw1.vercel.app_(laptop).webp",
    imageAlt: "Gordian Malaka",
    title: "Gordian Malaka",
    tags: [
      { text: "Creative & Design", className: tagStyle.lime },
      { text: "Professional Portfolios", className: tagStyle.purple },
      { text: "Showcase", className: tagStyle.teal },
    ],
    description: "A film student who has a passion for photography.",
    discoverMoreUrl: "https://uvhu-portfolio-9rw1.vercel.app/",
  },
];

export const featuredProjects = projects.slice(0, 3);
