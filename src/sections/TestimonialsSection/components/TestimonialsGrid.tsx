import { TestimonialCard } from "@/sections/TestimonialsSection/components/TestimonialCard";

export const TestimonialsGrid = () => {
  return (
    <section className="relative px-6 py-8 md:py-16">
      <div className="max-w-[1200px] w-full mx-auto">
        <div className="flex flex-wrap -mx-3">
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
