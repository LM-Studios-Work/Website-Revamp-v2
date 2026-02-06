import { ServiceItem } from "@/sections/ServicesSection/components/ServiceItem";

export const ServicesSection = () => {
  return (
    <section className="relative box-border caret-transparent pb-5 md:pb-10">
      <div className="relative box-border caret-transparent w-full mx-auto before:accent-auto before:box-border before:caret-transparent before:clear-both before:text-white before:table before:text-lg before:not-italic before:normal-nums before:font-light before:tracking-[normal] before:leading-[32.4px] before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-inter after:accent-auto after:box-border after:caret-transparent after:clear-both after:text-white after:table after:text-lg after:not-italic after:normal-nums after:font-light after:tracking-[normal] after:leading-[32.4px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-inter">
        <div className="border-t-neutral-700 box-border caret-transparent flex flex-wrap border-t-2 border-b-white border-x-white">
          <ServiceItem
            href="/services/web-design"
            number="01"
            title="Web Design"
            iconUrl="https://c.animaapp.com/mlaz3dsraozDAl/assets/icon-3.svg"
          />
        </div>
        <div className="border-t-neutral-700 box-border caret-transparent flex flex-wrap border-t-2 border-b-white border-x-white">
          <ServiceItem
            href="/services/seo"
            number="02"
            title="SEO"
            iconUrl="https://c.animaapp.com/mlaz3dsraozDAl/assets/icon-3.svg"
          />
        </div>
        <div className="border-b-neutral-700 border-t-neutral-700 box-border caret-transparent flex flex-wrap border-x-white border-y-2">
          <ServiceItem
            href="/services/app-development"
            number="03"
            title="App Development"
            iconUrl="https://c.animaapp.com/mlaz3dsraozDAl/assets/icon-3.svg"
          />
        </div>
      </div>
  
    </section>
  );
};
