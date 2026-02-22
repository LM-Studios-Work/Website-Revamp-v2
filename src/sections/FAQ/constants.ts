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
    question: "How much does a professional website cost in South Africa?",
    answer: "At LM Studios, professional website design starts at a transparent, once-off fee of R1,999 for a sleek portfolio site, and goes up to R4,999 for a comprehensive, 6-page professional business website. We do not believe in hidden costs or mandatory retainers. Your first year of hosting is completely free, ensuring maximum return on your investment.",
  },
  {
    question: "How long does it take to design and launch a website?",
    answer: "We pride ourselves on industry-leading turnaround times. Depending on your chosen package, your brand-new, fully functional website will be designed, built, and launched in just 4 to 12 working days. We deliver speed without ever compromising on quality, security, or design.",
  },
  {
    question: "How do I choose the best web design company in Gauteng?",
    answer: "The best web design agencies offer complete transparency, fast delivery, and robust post-launch support. Look for a team that guarantees mobile responsiveness, includes on-page SEO, and doesn't hide behind confusing jargon. LM Studios is highly rated because we back every single build with a comprehensive 6-month post-launch warranty, giving you absolute peace of mind.",
  },
  {
    question: "Will I have to pay expensive monthly retainers after my site goes live?",
    answer: "No. We do not lock our clients into expensive, rigid contracts. Every website we build includes a 6-month warranty covering bug fixes and browser compatibility at no extra charge. After that, you operate on a pay-for-what-you-use model with clear, flat-fee pricing for any future updates or new pages.",
  },
  {
    question: "Will my website be mobile-friendly and optimized for Google?",
    answer: "Absolutely. Over 60% of web traffic comes from mobile devices, so every site we deploy is 100% mobile-responsive and rigorously tested across Chrome, Safari, and Edge. Furthermore, basic and local SEO optimization is baked into our development process, ensuring your business is structured to rank well on search engines from day one.",
  },
];

export const seoFAQ: FAQItem[] = [
  {
  question: "Do you do keyword research?",
  answer: "Absolutely. We don't guess what your customers are searching for; we use advanced data tools to find the exact terms they use. For our Essential package, we focus on high-intent local keywords—terms that indicate a user is ready to hire someone nearby.",
  },
  {
  question: "How soon can I see SEO results?",
  answer: "SEO is a marathon, not a sprint. While some technical fixes can yield quick wins in the first month, substantial ranking improvements typically take 3 to 6 months. We build for long-term stability, avoiding quick hacks that risk penalties later.",
  },
  {
  question: "Will you optimize existing content?",
  answer: "Yes. Often, you don't need new pages; you just need your existing pages to work harder. We review your current text to ensure it is readable, keyword-rich, and structured in a way that Google's bots can easily understand.",
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
