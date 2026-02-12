export const PHOTOGRAPHY_FEATURES = [
  "Travels included (in Belgium)",
  "On-site shooting for 1-2 hours",
  "Editing of all pictures",
  "Delivery of high definition pictures",
] as const;

export const PHOTOGRAPHY_IMAGES = [
  {
    // Ensure the filename matches exactly what is in public/photography/
    src: "/photography/gq.webp",
    alt: "Portrait photography",
  },
  {
    src: "/photography/Oz.webp",
    alt: "Hands on wheel detail shot",
  },
  {
    src: "/photography/ssk.webp",
    alt: "Detail photography",
  },
] as const;