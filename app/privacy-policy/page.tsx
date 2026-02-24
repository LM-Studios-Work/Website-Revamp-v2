import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "LM Studios Privacy Policy — how we collect, use, and protect your personal information in compliance with the Protection of Personal Information Act (POPIA).",
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "24 February 2026";

  return (
    <div className="relative z-10 py-20 md:py-32 px-6">
      <div className="max-w-[860px] w-full mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-[56px] font-bold leading-tight text-white mb-4">
            Privacy Policy
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
              LM Studios (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or
              &ldquo;our&rdquo;) is a web design and development agency based in
              Midrand, Gauteng, South Africa. We are committed to protecting
              your personal information in accordance with the{" "}
              <strong className="text-white">
                Protection of Personal Information Act 4 of 2013 (POPIA)
              </strong>{" "}
              and any applicable South African data protection legislation.
            </p>
            <p className="mt-3">
              This Privacy Policy explains what personal information we collect,
              why we collect it, how we use it, and your rights regarding your
              information. By using our website or engaging our services, you
              agree to the practices described in this policy.
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              2. Information We Collect
            </h2>
            <p className="mb-3">
              We collect only the information necessary to deliver our services
              and communicate with you:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-white">Contact details</strong> — your
                name, email address, and phone number submitted via our contact
                form or direct communication.
              </li>
              <li>
                <strong className="text-white">Project information</strong> —
                business name, website requirements, and other details you share
                during a project consultation.
              </li>
              <li>
                <strong className="text-white">Usage data</strong> — anonymous
                browsing data collected via Google Analytics 4 (pages visited,
                session duration, device type, approximate location). This data
                does not identify you personally.
              </li>
              <li>
                <strong className="text-white">Cookies</strong> — small files
                stored by your browser to enable site functionality and
                analytics. See Section 7 for more detail.
              </li>
            </ul>
            <p className="mt-3">
              We do not collect sensitive personal information (such as identity
              numbers, financial account details, or health records).
            </p>
          </section>

          {/* How We Use Your Information */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              3. How We Use Your Information
            </h2>
            <p className="mb-3">We use your personal information to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Respond to enquiries and project requests.</li>
              <li>
                Deliver, manage, and improve the web design, development, SEO,
                and photography services you commission.
              </li>
              <li>
                Send project updates, invoices, and support communications.
              </li>
              <li>
                Analyse anonymous site traffic to improve website performance
                and user experience.
              </li>
              <li>Comply with legal obligations where required.</li>
            </ul>
            <p className="mt-3">
              We will not use your personal information for unsolicited marketing
              without your consent.
            </p>
          </section>

          {/* Legal Basis */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              4. Legal Basis for Processing
            </h2>
            <p>
              Under POPIA, we process your personal information on the following
              lawful grounds:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>
                <strong className="text-white">Contractual necessity</strong> —
                processing required to deliver the services you have engaged us
                for.
              </li>
              <li>
                <strong className="text-white">Legitimate interest</strong> —
                improving our services and communicating with prospective
                clients.
              </li>
              <li>
                <strong className="text-white">Consent</strong> — where you
                have explicitly agreed to receive communications or where
                cookies require your consent.
              </li>
              <li>
                <strong className="text-white">Legal obligation</strong> —
                where South African law requires us to process or retain
                certain information.
              </li>
            </ul>
          </section>

          {/* Sharing Your Information */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              5. Sharing Your Information
            </h2>
            <p className="mb-3">
              We do not sell, rent, or trade your personal information. We may
              share information only in the following limited circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-white">Service providers</strong> —
                third-party tools we use to operate our business (e.g., Google
                Analytics, hosting providers). These parties are bound by their
                own privacy policies and data processing agreements.
              </li>
              <li>
                <strong className="text-white">Legal requirements</strong> —
                where disclosure is required by law, court order, or a
                regulatory authority.
              </li>
              <li>
                <strong className="text-white">Business continuity</strong> —
                in the event of a merger or acquisition, your information may
                transfer to the successor entity under the same terms.
              </li>
            </ul>
          </section>

          {/* Third-Party Services */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              6. Third-Party Services
            </h2>
            <p className="mb-3">
              Our website uses the following third-party services that may
              process data independently:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-white">Google Analytics 4</strong> —
                anonymous site traffic analysis. Google may process data outside
                South Africa. See{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-white transition-colors"
                >
                  Google&apos;s Privacy Policy
                </a>
                .
              </li>
              <li>
                <strong className="text-white">Vercel</strong> — website
                hosting and edge network infrastructure.
              </li>
            </ul>
            <p className="mt-3">
              We are not responsible for the privacy practices of third-party
              services. We recommend reviewing their respective policies.
            </p>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              7. Cookies
            </h2>
            <p className="mb-3">
              We use the following types of cookies on our website:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-white">Essential cookies</strong> —
                necessary for the website to function correctly. These cannot be
                disabled.
              </li>
              <li>
                <strong className="text-white">Analytics cookies</strong> —
                used by Google Analytics 4 to collect anonymous usage
                statistics. You may opt out via your browser settings or a
                Google Analytics opt-out browser add-on.
              </li>
            </ul>
            <p className="mt-3">
              Most browsers allow you to refuse or delete cookies. Disabling
              analytics cookies will not affect your ability to use our website.
            </p>
          </section>

          {/* Data Retention */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              8. Data Retention
            </h2>
            <p>
              We retain personal information only for as long as necessary to
              fulfil the purposes for which it was collected, or as required by
              South African law. Contact enquiry data is retained for up to{" "}
              <strong className="text-white">3 years</strong> unless you request
              deletion sooner. Project and invoicing records are retained for a
              minimum of{" "}
              <strong className="text-white">5 years</strong> in line with
              financial record-keeping requirements.
            </p>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              9. Your Rights Under POPIA
            </h2>
            <p className="mb-3">
              As a data subject under POPIA, you have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-white">Access</strong> — request a copy
                of the personal information we hold about you.
              </li>
              <li>
                <strong className="text-white">Correction</strong> — ask us to
                correct inaccurate or incomplete information.
              </li>
              <li>
                <strong className="text-white">Deletion</strong> — request that
                we delete your personal information (subject to legal retention
                obligations).
              </li>
              <li>
                <strong className="text-white">Objection</strong> — object to
                certain types of processing, including direct marketing.
              </li>
              <li>
                <strong className="text-white">Complaint</strong> — lodge a
                complaint with the{" "}
                <strong className="text-white">
                  Information Regulator of South Africa
                </strong>{" "}
                if you believe we have not handled your information lawfully.
              </li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, contact us using the details in
              Section 11 below.
            </p>
          </section>

          {/* Security */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              10. Security
            </h2>
            <p>
              We take reasonable technical and organisational measures to
              protect your personal information from unauthorised access,
              disclosure, alteration, or destruction. However, no method of
              transmission over the internet is 100% secure. If you have reason
              to believe your interaction with us is no longer secure, please
              contact us immediately.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              11. Contact Us
            </h2>
            <p className="mb-3">
              For any privacy-related queries, requests, or complaints, please
              contact our Information Officer:
            </p>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-1 text-sm">
              <p>
                <strong className="text-white">LM Studios</strong>
              </p>
              <p>Midrand, Gauteng, South Africa</p>
              <p>
                Email:{" "}
                <a
                  href="mailto:lm.studios.web@gmail.com"
                  className="underline hover:text-white transition-colors"
                >
                  lm.studios.web@gmail.com
                </a>
              </p>
              <p>
                Phone:{" "}
                <a
                  href="tel:+27814272624"
                  className="underline hover:text-white transition-colors"
                >
                  081 427 2624
                </a>
              </p>
            </div>
          </section>

          {/* Changes */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              12. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. The date at
              the top of this page reflects the most recent revision. We
              encourage you to review this policy periodically. Continued use of
              our website or services after any changes constitutes your
              acceptance of the updated policy.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
