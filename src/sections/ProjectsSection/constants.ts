import type { ProjectCardProps } from "@/sections/ProjectsSection/components/ProjectCard";

export const tagStyle = {
  lime: "text-xs font-semibold inline-block text-center uppercase text-nowrap border-[#e7fe56] px-3 py-1.5 rounded-full border border-solid text-[#e7fe56]",
  purple:
    "text-xs font-semibold inline-block text-center uppercase text-nowrap border-purple-300 px-3 py-1.5 rounded-full border border-solid text-purple-300",
  teal: "text-xs font-semibold inline-block text-center uppercase text-nowrap border-teal-300 px-3 py-1.5 rounded-full border border-solid text-teal-300",
};

export const projects: ProjectCardProps[] = [
  // ... (Your existing 4 projects: Penguin, Plugin Company, Laboratoires PRED, Torvisco)
  {
    imageUrl: "/preview/FloatTest.png",
    imageAlt: "MR FLOAT - Transport Service",
    timeText: "50:00",
    title: "MR FLOAT - Transport Service",
    tags: [
      { text: "Logistics", className: tagStyle.lime },
      { text: "Essential Business", className: tagStyle.purple },
      { text: "Transportation", className: tagStyle.teal },
      { text: "Booking", className: tagStyle.teal },
    ],
    description:
      "A transport company in Zimbabwe that offers a wide array of services, including taxi rides, long-distance travel, car hire, airport shuttles, and package deliveries.",
    discoverMoreUrl: "https://mrfloatlogistics.com",
  },
  {
    imageUrl: "/preview/vuza-trading.png",
    imageAlt: "Vuza Trading",
    timeText: "50:00",
    title: "Vuza Trading",
    tags: [
      { text: "Security", className: tagStyle.lime },
      { text: "Essential Business", className: tagStyle.purple },
      { text: "Automated Security", className: tagStyle.teal },
      { text: "Aluminum Solutions", className: tagStyle.teal },
    ],
    description:
      "A professional trading platform with real-time analytics and user-friendly interface.",
    discoverMoreUrl: "https://aluminiumweb.vercel.app/",
  },
  {
    imageUrl: "/preview/mothupi-and-lesego.png",
    imageAlt: "Mothupi & Lesego - Wedding",
    timeText: "50:00",
    title: "Mothupi & Lesego - Wedding",
    tags: [
      { text: "Personal", className: tagStyle.lime },
      { text: "Event Management", className: tagStyle.purple },
      { text: "Wedding", className: tagStyle.teal },
      { text: "Event", className: tagStyle.teal },
    ],
    description:
      "A wedding invitation with an interactive map and a gift registry.",
    discoverMoreUrl: "https://mothupi-and-lesego.co.za",
  },
  {
    imageUrl: "/preview/rokunda-mboyi.png",
    imageAlt: "Rokunda Mboyi",
    timeText: "50:00",
    title: "Rokunda Mboyi",
    tags: [
      { text: "Architecture", className: tagStyle.lime },
      { text: "Portfolio", className: tagStyle.purple },
      { text: "Design", className: tagStyle.teal },
      { text: "Sustainable", className: tagStyle.teal },
    ],
    description:
      "A passionate architect shaping the future of design with innovative and sustainable solutions.",
    discoverMoreUrl: "https://rokundamboyi.com",
  },
  {
    imageUrl: "/preview/monare-selahle.png",
    imageAlt: "Monare Selahle",
    timeText: "50:00",
    title: "Monare Selahle",
    tags: [
      { text: "Tech", className: tagStyle.lime },
      { text: "Portfolio", className: tagStyle.purple },
      { text: "Software Engineer", className: tagStyle.teal },
    ],
    description: "Modern portfolio for a Computer Science student.",
    discoverMoreUrl: "https://monareselahle.co.za",
  },
  {
    imageUrl: "/preview/shots-by-ozee.png",
    imageAlt: "Shots By Ozee",
    timeText: "50:00",
    title: "Shots By Ozee",
    tags: [
      { text: "Creative", className: tagStyle.lime },
      { text: "Portfolio", className: tagStyle.purple },
      { text: "Photography", className: tagStyle.teal },
    ],
    description:
      "A photographer and visionary creative currently studying Chemical Engineering.",
    discoverMoreUrl: "https://shotsbyozee.co.za",
  },
  {
    imageUrl: "/preview/gordian-malaka.png",
    imageAlt: "Gordian Malaka",
    timeText: "50:00",
    title: "Gordian Malaka",
    tags: [
      { text: "Film", className: tagStyle.lime },
      { text: "Portfolio", className: tagStyle.purple },
      { text: "Photography", className: tagStyle.teal },
      { text: "Videography", className: tagStyle.teal },
    ],
    description: "A film student who has a passion for photography.",
    discoverMoreUrl: "https://uvhu-portfolio-9rw1.vercel.app/",
  },
];

export const featuredProjects = projects.slice(0, 3);