import CaseStudyLayout from "@/components/templates/CaseStudyLayout";

export default function SSSKProductsPage() {
  return (
    <CaseStudyLayout
      title="SSSK Spill Control Products"
      client="SSSK Solutions"
      location="Kempton Park, Gauteng"
      industry="Environmental Services"
      website="https://sssksolutions.co.za"
      logoSrc="/preview/sssk-logo.png"
      heroImageSrc="/preview/sssk-hero.jpg"
    >
      <section>
        <h2>Premium Spill Control Products</h2>
        <ul>
          <li>Mobile Spill Kits: Wheelie bin kits ranging from 25L to 240L.</li>
          <li>
            Specialized Absorbents: Oil-only, chemical, and universal absorbent
            pads and booms.
          </li>
          <li>
            Bio-remediation Agents: Eco-friendly cleaning agents for soil
            restoration.
          </li>
        </ul>
        <a href="tel:0717881312" className="btn-primary mt-4">
          Order Now
        </a>
      </section>
    </CaseStudyLayout>
  );
}
