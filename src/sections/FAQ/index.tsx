import { useState } from "react";

const faqItems = [
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
  {
    question: "Do you provide training?",
    answer:
      "Yes, we provide comprehensive training sessions to help you and your team manage your website independently. Training can be done remotely or on-site.",
  },
  {
    question: "Can I request additional features later?",
    answer:
      "Absolutely. Our development process is flexible, and we can add new features or functionality at any stage after launch.",
  },
  {
    question: "Do you write content?",
    answer:
      "We can assist with content creation including copywriting, SEO-optimized text, and multimedia content to enhance your website's impact.",
  },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-16 md:py-28 px-6">
      <div className="max-w-[1200px] w-full mx-auto">
        <div className="flex flex-col md:flex-row gap-10 md:gap-20">
          <div className="md:w-5/12 shrink-0">
            <h2 className="text-4xl md:text-[56px] font-bold leading-tight text-white mb-6">
              FAQ
            </h2>
            <p className="text-white/60 text-base leading-relaxed">
              <span className="text-white font-semibold">
                Got questions?
              </span>{" "}
              {"We've got answers! Explore our FAQ to learn more about our web design process, services, and how we can bring your vision to life."}
            </p>
          </div>
          <div className="md:w-7/12">
            <div className="border-t border-white/10">
              {faqItems.map((item, index) => (
                <div key={index} className="border-b border-white/10 border-dashed">
                  <button
                    onClick={() => toggle(index)}
                    className="flex items-center justify-between w-full py-6 text-left group"
                  >
                    <span className="text-lg md:text-xl font-medium text-white pr-8">
                      {item.question}
                    </span>
                    <span
                      className={`w-10 h-10 rounded-full bg-[#c4b5fd] flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        openIndex === index ? "rotate-45" : ""
                      }`}
                    >
                      <svg
                        className="w-5 h-5 text-black"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === index ? "max-h-48 pb-6" : "max-h-0"
                    }`}
                  >
                    <p className="text-white/60 text-sm md:text-base leading-relaxed pr-16">
                      {item.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
