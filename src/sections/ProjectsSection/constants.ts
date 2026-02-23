import type { ProjectCardProps } from "@/sections/ProjectsSection/components/ProjectCard";

export const tagStyle = {
  lime: "text-xs font-semibold inline-block text-center uppercase text-nowrap border-[#e7fe56] px-3 py-1.5 rounded-full border border-solid text-[#e7fe56]",
  purple:
    "text-xs font-semibold inline-block text-center uppercase text-nowrap border-purple-300 px-3 py-1.5 rounded-full border border-solid text-purple-300",
  teal: "text-xs font-semibold inline-block text-center uppercase text-nowrap border-teal-300 px-3 py-1.5 rounded-full border border-solid text-teal-300",
};

export const projects: ProjectCardProps[] = [
  {
    imageUrl: "/preview/www.ndilayavhupo.co.za_(laptop) (2).webp",
    imageAlt: "Ndila Ya Vhupo Travels",
    title: "Ndila Ya Vhupo Travels",
    tags: [
      { text: "Travel & Tourism", className: tagStyle.lime },
      { text: "Business Solutions", className: tagStyle.purple },
      { text: "Booking & Logistics", className: tagStyle.teal },
    ],
    description:
      "A Thohoyandou-based travel agency specializing in shared adventures and authentic Limpopo journeys, handling logistics for group tours to South Africa's hidden gems.",
    discoverMoreUrl: "https://ndilayavhupo.co.za", // Replace with actual URL if different
  },

  {
    imageUrl: "/preview/mrfloatlogistics.com_(laptop) (6).webp",
    imageAlt: "MR FLOAT - Transport Service",
    title: "MR FLOAT - Transport Service",
    tags: [
      { text: "Logistics & Services", className: tagStyle.lime },
      { text: "Business Solutions", className: tagStyle.purple },
      { text: "Booking & Logistics", className: tagStyle.teal },
    ],
    description:
      "A transport company in Zimbabwe that offers a wide array of services, including taxi rides, long-distance travel, car hire, airport shuttles, and package deliveries.",
    discoverMoreUrl: "https://mrfloatlogistics.com",
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
