import type { ProjectCardProps } from "@/sections/ProjectsSection/components/ProjectCard";

export const tagStyle = {
  lime: "text-xs font-semibold inline-block text-center uppercase text-nowrap border-[#e7fe56] px-3 py-1.5 rounded-full border border-solid text-[#e7fe56]",
  purple:
    "text-xs font-semibold inline-block text-center uppercase text-nowrap border-purple-300 px-3 py-1.5 rounded-full border border-solid text-purple-300",
  teal: "text-xs font-semibold inline-block text-center uppercase text-nowrap border-teal-300 px-3 py-1.5 rounded-full border border-solid text-teal-300",
};

export const projects: ProjectCardProps[] = [
  {
    imageUrl:
      "https://c.animaapp.com/mlaz3dsraozDAl/assets/image_1024.jpg",
    imageAlt: "Penguin",
    timeText: "50:00",
    title: "Penguin",
    tags: [
      { text: "Apparel", className: tagStyle.lime },
      { text: "Standard", className: tagStyle.purple },
      { text: "Website", className: tagStyle.teal },
      { text: "Ecommerce", className: tagStyle.teal },
      { text: "Events", className: tagStyle.teal },
      { text: "Blog", className: tagStyle.teal },
    ],
    description:
      "Founded over 20 years ago from a passion for freeriding, Penguin creates technically advanced, functional apparel designed for uncompromising performance in the powder.",
    discoverMoreUrl: "/projects/21",
  },
  {
    imageUrl:
      "https://c.animaapp.com/mlaz3dsraozDAl/assets/image_1024-1.jpg",
    imageAlt: "Plugin Company",
    timeText: "50:00",
    title: "Plugin Company",
    tags: [
      { text: "Energy", className: tagStyle.lime },
      { text: "Standard", className: tagStyle.purple },
      { text: "Website", className: tagStyle.teal },
    ],
    description:
      "Pioneers in car charging in Belgium, Plugin company has been offering since 2009 personalised and reliable solutions to support businesses striving for sustainability.",
    discoverMoreUrl: "/projects/18",
  },
  {
    imageUrl:
      "https://c.animaapp.com/mlaz3dsraozDAl/assets/image_1024-2.jpg",
    imageAlt: "Laboratoires PRED",
    timeText: "250:00",
    title: "Laboratoires PRED",
    tags: [
      { text: "Health & Medical", className: tagStyle.lime },
      { text: "Custom", className: tagStyle.purple },
      { text: "Website", className: tagStyle.teal },
      { text: "Ecommerce", className: tagStyle.teal },
      { text: "Events", className: tagStyle.teal },
      { text: "Blog", className: tagStyle.teal },
    ],
    description:
      "Laboratoires PRED mission is to improve oral health and help practitioners offer patients their best smile by promoting minimally invasive, evidence-based dentistry.",
    discoverMoreUrl: "/projects/17",
  },
  {
    imageUrl:
      "https://c.animaapp.com/mlaz3dsraozDAl/assets/image_1024-3.jpg",
    imageAlt: "Torvisco",
    timeText: "50:00",
    title: "Torvisco",
    tags: [
      { text: "Manufacturing", className: tagStyle.lime },
      { text: "Standard", className: tagStyle.purple },
      { text: "Website", className: tagStyle.teal },
      { text: "Ecommerce", className: tagStyle.teal },
      { text: "Blog", className: tagStyle.teal },
    ],
    description:
      "TORVISCO GROUP has been a leading name in the bathroom and sanitary sector since 1979. With over 40 years of expertise, the company employs more than 300 professionals.",
    discoverMoreUrl: "/projects/20",
  },
];

/** The first 3 projects — used on the HomePage and WebDesignPage previews. */
export const featuredProjects = projects.slice(0, 3);
