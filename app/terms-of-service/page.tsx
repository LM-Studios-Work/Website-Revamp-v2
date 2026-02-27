import type { Metadata } from "next";
import { CONTACT_DETAILS } from "@/constants/contact";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "LM Studios Terms of Service — the terms and conditions governing our web design, development, SEO, and photography services.",
  robots: { index: true, follow: true },
};

export default function TermsOfServicePage() {
  const lastUpdated = "24 February 2026";

  return (
    <div className="relative z-10 py-20 md:py-32 px-6">
      <div className="max-w-[860px] w-full mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-[56px] font-bold leading-tight text-white mb-4">
            Terms of Service
          </h1>
          <p className="text-white/50 text-sm">Last updated: {lastUpdated}</p>
        </div>

        <div className="space-y-10 text-white/80 leading-relaxed">
          {/* Introduction */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              1. Introduction
            </h2>
            <p>
              These Terms of Service (&ldquo;Terms&rdquo;) govern your use of
              the website at{" "}
              <a
                href="https://www.lmwebstudios.co.za"
                className="underline hover:text-white transition-colors"
              >
                www.lmwebstudios.co.za
              </a>{" "}
              and the services provided by{" "}
              <strong className="text-white">LM Studios</strong>, a web design
              and development agency based in Midrand, Gauteng, South Africa.
            </p>
            <p className="mt-3">
              By engaging our services or using our website, you confirm that
              you have read, understood, and agree to be bound by these Terms.
              If you do not agree, please do not use our services or website.
            </p>
          </section>

          {/* Services */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              2. Services
            </h2>
            <p className="mb-3">LM Studios provides:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-white">Web Design &amp; Development</strong> —
                custom website design, development, and deployment.
              </li>
              <li>
                <strong className="text-white">App Development</strong> — custom
                web and mobile application development.
              </li>
              <li>
                <strong className="text-white">SEO Services</strong> — search
                engine optimisation strategy and implementation.
              </li>
              <li>
                <strong className="text-white">Photography</strong> — product,
                event, and brand photography services.
              </li>
              <li>
                <strong className="text-white">Ongoing Support &amp; Maintenance</strong>{" "}
                — post-launch website updates and technical support.
              </li>
            </ul>
            <p className="mt-3">
              Specific deliverables, timelines, and pricing are agreed upon in a
              written project proposal or invoice prior to commencement of work.
              These Terms apply to all such engagements.
            </p>
          </section>

          {/* Payments */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              3. Payment Terms
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                A{" "}
                <strong className="text-white">
                  50% non-refundable deposit
                </strong>{" "}
                is required before any project work commences.
              </li>
              <li>
                The remaining balance is due upon project completion and before
                the final website is transferred to your hosting or made live.
              </li>
              <li>
                Post-warranty support requests are invoiced within 7 days of
                delivery.
              </li>
              <li>
                All prices are quoted in South African Rand (ZAR) and include
                VAT where applicable.
              </li>
              <li>
                Overdue invoices (past 14 days) may attract a late payment fee
                of 5% per month on the outstanding amount.
              </li>
            </ul>
          </section>

          {/* Project Process */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              4. Project Process &amp; Client Responsibilities
            </h2>
            <p className="mb-3">
              To ensure smooth delivery, clients agree to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Provide all required content (text, images, branding assets) by
                the agreed deadline. Delays in content delivery may extend
                project timelines.
              </li>
              <li>
                Provide timely feedback at each project milestone (typically
                within 3 business days). Silence for more than 7 business days
                may be treated as approval to proceed.
              </li>
              <li>
                Ensure all content and materials provided to LM Studios are
                owned by the client or properly licensed. The client bears sole
                responsibility for copyright compliance of submitted assets.
              </li>
              <li>
                Designate a single point of contact to avoid conflicting
                instructions.
              </li>
            </ul>
            <p className="mt-3">
              LM Studios reserves the right to pause a project if payment
              milestones or content deadlines are not met.
            </p>
          </section>

          {/* Revisions */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              5. Revisions &amp; Change Requests
            </h2>
            <p className="mb-3">
              Each package includes a reasonable number of revision rounds as
              agreed in the project proposal. A revision is defined as minor
              adjustments to existing design or content within the original
              agreed scope.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Changes that materially alter the original scope (new pages,
                features, or complete redesigns) will be quoted as separate
                work.
              </li>
              <li>
                Post-launch change requests are billed at the applicable support
                tier rates listed on our website.
              </li>
            </ul>
          </section>

          {/* Warranty */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              6. Warranty &amp; Post-Launch Support
            </h2>
            <p className="mb-3">
              All website builds include a{" "}
              <strong className="text-white">6-month post-launch warranty</strong>{" "}
              covering:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Code bug fixes and broken link repairs.</li>
              <li>
                Browser compatibility patches (Chrome, Safari, Edge, Firefox).
              </li>
              <li>Minor text and image swaps within existing sections.</li>
            </ul>
            <p className="mt-3">
              The warranty does not cover issues arising from client-made
              modifications, third-party plugin conflicts introduced after
              launch, or hosting provider outages beyond our control.
            </p>
            <p className="mt-3">
              After the warranty period, support is available at published rates.
            </p>
          </section>

          {/* Hosting & Domain */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              7. Hosting &amp; Domain
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                First-year hosting is included with applicable packages at no
                additional charge.
              </li>
              <li>
                From year two onwards, hosting and domain renewals are charged
                at the rates published on our website (currently R400/year for
                .com and R150/year for .co.za domains).
              </li>
              <li>
                Clients are responsible for renewing domains not managed by LM
                Studios. Expiry of a domain is not LM Studios&apos; liability.
              </li>
              <li>
                LM Studios may transfer website files to the client&apos;s
                preferred hosting upon request, subject to full payment of all
                outstanding invoices.
              </li>
            </ul>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              8. Intellectual Property
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Upon receipt of full payment, the client receives ownership of
                the final deliverables (design files and compiled website code)
                for the specific project.
              </li>
              <li>
                LM Studios retains ownership of any proprietary frameworks,
                libraries, or reusable components used to build the project.
              </li>
              <li>
                LM Studios reserves the right to display completed work in its
                portfolio and marketing materials unless the client explicitly
                requests confidentiality in writing.
              </li>
              <li>
                The client warrants that all content, images, and materials
                supplied do not infringe third-party intellectual property
                rights.
              </li>
            </ul>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              9. Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by South African law, LM Studios&apos;
              total liability to you for any claim arising out of or related to
              these Terms or our services shall not exceed the total fees paid by
              you for the specific project giving rise to the claim.
            </p>
            <p className="mt-3">
              LM Studios is not liable for any indirect, incidental, or
              consequential damages including loss of revenue, loss of data, or
              loss of business opportunity, even if we have been advised of the
              possibility of such damages.
            </p>
            <p className="mt-3">
              We are not responsible for third-party services (hosting providers,
              payment gateways, social media platforms) that may affect your
              website&apos;s performance or availability.
            </p>
          </section>

          {/* Termination */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              10. Termination
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Either party may terminate a project engagement with written
                notice.
              </li>
              <li>
                In the event of client-initiated termination, the deposit is
                non-refundable and any work completed up to termination will be
                invoiced at a prorated rate based on hours worked.
              </li>
              <li>
                In the event of LM Studios-initiated termination (e.g., due to
                non-payment or abusive conduct), all outstanding fees become
                immediately payable.
              </li>
            </ul>
          </section>

          {/* Governing Law */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              11. Governing Law
            </h2>
            <p>
              These Terms are governed by and construed in accordance with the
              laws of the{" "}
              <strong className="text-white">Republic of South Africa</strong>.
              Any disputes arising from these Terms shall be subject to the
              exclusive jurisdiction of the South African courts, with venue in
              Gauteng.
            </p>
          </section>

          {/* Website Use */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              12. Website Use
            </h2>
            <p className="mb-3">
              You agree not to use the LM Studios website to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Violate any applicable law or regulation.</li>
              <li>
                Transmit any harmful, offensive, or unlawful content or
                material.
              </li>
              <li>
                Attempt to gain unauthorised access to any system or network.
              </li>
              <li>Scrape or harvest data without prior written consent.</li>
            </ul>
          </section>

          {/* Changes */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              13. Changes to These Terms
            </h2>
            <p>
              We may update these Terms from time to time. The date at the top
              of this page reflects the latest revision. For ongoing projects,
              the Terms in effect at the time of project commencement apply
              unless both parties agree in writing to updated Terms.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              14. Contact
            </h2>
            <p className="mb-3">
              For any questions about these Terms, please contact us:
            </p>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-1 text-sm">
              <p>
                <strong className="text-white">LM Studios</strong>
              </p>
              <p>{CONTACT_DETAILS.address.display}</p>
              <p>
                Email:{" "}
                <a
                  href={`mailto:${CONTACT_DETAILS.email}`}
                  className="underline hover:text-white transition-colors"
                >
                  {CONTACT_DETAILS.email}
                </a>
              </p>
              <p>
                Phone:{" "}
                <a
                  href={`tel:${CONTACT_DETAILS.phone.value}`}
                  className="underline hover:text-white transition-colors"
                >
                  {CONTACT_DETAILS.phone.display}
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
