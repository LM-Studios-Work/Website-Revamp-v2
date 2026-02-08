export type FAQItem = { question: string; answer: string };

export const generalFAQ: FAQItem[] = [
  {
    question: "What are the prices?",
    answer:
      "Our pricing varies depending on the scope and complexity of your project. We offer tailored quotes after understanding your specific needs and requirements. Contact us for a detailed estimate.",
  },
  {
    question: "What if I need more hours?",
    answer:
      "We offer flexible hour packages that can be adjusted as your project evolves. Additional hours can be purchased at any time to ensure your project stays on track.",
  },
  {
    question: "Are there maintenance fees?",
    answer:
      "We offer optional maintenance packages to keep your website running smoothly, including updates, security patches, and performance monitoring.",
  },
];

export const webDesignFAQ: FAQItem[] = [
  {
    question: "How long does a Web Design project take?",
    answer: "Typical timelines depend on scope — small sites: 2–4 weeks; larger builds: 6–12 weeks.",
  },
  {
    question: "Can you work from our brand guidelines?",
    answer: "Yes — we adapt to your existing brand and provide recommendations to make the site consistent and accessible.",
  },
  {
    question: "Do you provide responsive designs?",
    answer: "All our designs are mobile-first and responsive across common breakpoints.",
  },
];

export const seoFAQ: FAQItem[] = [
  {
    question: "Do you do keyword research?",
    answer: "Yes — keyword research is included in our SEO packages to align content and technical optimizations.",
  },
  {
    question: "How soon can I see SEO results?",
    answer: "SEO is ongoing; you can expect noticeable improvements in 2–6 months depending on competition and the work required.",
  },
  {
    question: "Will you optimize existing content?",
    answer: "We can audit and optimize existing pages, or create new SEO-optimized content as required.",
  },
];

export const marketingFAQ: FAQItem[] = [
  {
    question: "What channels do you manage?",
    answer: "We support paid ads, email marketing, social campaigns and analytics-driven CRO.",
  },
  {
    question: "Do you run A/B tests?",
    answer: "Yes — we design and run experiments to improve conversion rates and measure impact.",
  },
  {
    question: "Can you integrate analytics tools?",
    answer: "We integrate Google Analytics, Tag Manager, and other tracking tools as needed.",
  },
];

// serviceFAQs will be exported after all FAQ groups are defined

export const appDevelopmentFAQ: FAQItem[] = [
  {
    question: "What platforms do you target?",
    answer: "We build for native (iOS/Android) and cross-platform (React Native) depending on your needs.",
  },
  {
    question: "Do you publish to app stores?",
    answer: "Yes — we handle app store submission and listing, including required assets and metadata.",
  },
  {
    question: "Can you integrate backend services?",
    answer: "We develop or integrate APIs, authentication, push notifications, and other backend services as required.",
  },
];

export const serviceFAQs: Record<string, FAQItem[]> = {
  webDesign: webDesignFAQ,
  seo: seoFAQ,
  marketing: marketingFAQ,
  appDevelopment: appDevelopmentFAQ,
};
