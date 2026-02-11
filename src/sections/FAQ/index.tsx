import { useState } from "react";
import type { FAQItem } from "./constants";
import { generalFAQ } from "./constants";

export type FAQProps = {
  items?: FAQItem[];
  title?: string;
};

export const FAQ = ({ items = generalFAQ, title = "FAQ" }: FAQProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="relative py-16 md:py-28 px-6">
      <div className="max-w-[1400px] w-full mx-auto">
        <div className="flex flex-col md:flex-row gap-10 md:gap-20">
          <div className="md:w-5/12 shrink-0">
            <h2 className="text-4xl md:text-[56px] font-bold leading-tight text-white mb-6">
              {title}
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
              {items.map((item, index) => (
                <div key={index} className="border-b border-white/10 border-dashed">
                  <button
                    onClick={() => toggle(index)}
                    className="flex items-center justify-between w-full py-6 text-left group"
                  >
                    <span className="text-lg md:text-xl font-medium text-white pr-8">
                      {item.question}
                    </span>
                    <span
                      className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
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
