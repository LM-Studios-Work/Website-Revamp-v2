import { ServiceItem } from "@/sections/ServicesSection/components/ServiceItem";

export const ServicesSection = () => {
  return (
    <section className="relative pb-10 md:pb-20">
      <div className="max-w-[1400px] w-full mx-auto">
        <div className="border-t border-neutral-800">
          <ServiceItem
            href="/services/web-design"
            number="01"
            title="Web Design"
          />
        </div>
        <div className="border-t border-neutral-800">
          <ServiceItem
            href="/services/seo"
            number="02"
            title="SEO"
          />
        </div>
        <div className="border-t border-b border-neutral-800">
          <ServiceItem
            href="/services/app-development"
            number="03"
            title="App Development"
          />
        </div>
      </div>
    </section>
  );
};
