export type FAQItem = { question: string; answer: string };

export const generalFAQ: FAQItem[] = [
  {
    question: "How do you price your projects?",
    answer:
      "Every project is unique. We provide tailored quotes based on the scope, complexity, and specific requirements of your system. Contact us to discuss your needs and receive a detailed proposal.",
  },
  {
    question: "What if the project scope changes?",
    answer:
      "We understand that requirements evolve. We work with you to adjust timelines and budgets as needed, ensuring your project stays aligned with your goals.",
  },
  {
    question: "Do you offer ongoing support?",
    answer:
      "Yes, we offer maintenance and support packages to keep your system running smoothly, including updates, security patches, feature enhancements, and technical support.",
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
    question: "How do you determine project scope and pricing?",
    answer: "Every project is unique. We start with a discovery call to understand your requirements, then provide a detailed proposal with timeline and cost estimates tailored to your specific needs.",
  },
  {
    question: "What types of web applications do you build?",
    answer: "We build booking systems, inventory management, admin dashboards, workflow automation, CRMs, and other custom business tools. Each solution is designed around your operational requirements.",
  },
  {
    question: "How do you ensure security and scalability?",
    answer: "We implement role-based authentication, encrypted data storage, secure APIs, and cloud infrastructure that scales with your organization. Security and reliability are built into every system we create.",
  },
];

export const serviceFAQs: Record<string, FAQItem[]> = {
  webDesign: webDesignFAQ,
  seo: seoFAQ,
  marketing: marketingFAQ,
  appDevelopment: appDevelopmentFAQ,
};
