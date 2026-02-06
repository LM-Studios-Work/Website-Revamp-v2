import { TestimonialCard } from "@/sections/TestimonialsSection/components/TestimonialCard";

export const TestimonialsGrid = () => {
  return (
    <section className="relative box-border caret-transparent px-4 py-8 md:px-8 md:py-16">
      <div className="relative box-border caret-transparent w-full mx-auto px-[15px] before:accent-auto before:box-border before:caret-transparent before:clear-both before:text-white before:table before:text-lg before:not-italic before:normal-nums before:font-light before:tracking-[normal] before:leading-[32.4px] before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-inter after:accent-auto after:box-border after:caret-transparent after:clear-both after:text-white after:table after:text-lg after:not-italic after:normal-nums after:font-light after:tracking-[normal] after:leading-[32.4px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-inter">
        <div className="items-stretch box-border caret-transparent flex flex-wrap ml-[-15px] mr-[-15px]">
          <TestimonialCard
            imageUrl="https://c.animaapp.com/mlaz3dsraozDAl/assets/img_testimonial_aerospacelab.jpg"
            name="Thibault Libioulle"
            title="Software Engineer | Aerospacelab"
            testimonial='"We brought in Odoo&#39;s Web Design Team to deploy and implement our predefined mock-up pages in the Odoo CMS. Throughout the project, the team applied its combined expertise to refine and enhance these designs before efficiently bringing them to life. Communication with the team was straightforward and seamless, allowing us to launch our site swiftly."'
          />
          <TestimonialCard
            imageUrl="https://c.animaapp.com/mlaz3dsraozDAl/assets/img_testimonial_cefora.jpg"
            name="Jelle Vancoppenolle"
            title="Media Marketing Specialist | Cefora"
            testimonial='"Do you want a confusing and ugly website? Stay away from Odoo web designers. Before you know, they’ll start showing their understanding of design and of Odoo technicalities (who likes a know-it-all, right?), might create beautiful components, answer your stupidly detailed questions or even suggest UI/UX solutions you never asked for. Consider yourself warned!"'
          />
          <TestimonialCard
            imageUrl="https://c.animaapp.com/mlaz3dsraozDAl/assets/img_testimonial_fondation.jpg"
            name="Fabienne Gérard"
            title="Communication responsible | Fondation Saint-Luc"
            testimonial='"A huge thanks to the Web design team of Odoo for their expert advice, incredible patience, and quick responses. Their dedication made the entire experience smooth and enjoyable. I truly appreciated how attentive and responsive they were throughout the process. I highly recommend their services!"'
          />
          <TestimonialCard
            imageUrl="https://c.animaapp.com/mlaz3dsraozDAl/assets/img_testimonial_materrup.jpg"
            name="Julie Neuville"
            title="Chairwoman | Materrup"
            testimonial='"We have sought Odoo&#39;s assistance in transferring and enhancing certain features of our existing site to the Odoo platform. Their expertise has enabled us to bring our ideas to life with a high level of customization, a crucial advantage in a context where the website plays a central role in standing out."'
          />
        </div>
      </div>
    </section>
  );
};
