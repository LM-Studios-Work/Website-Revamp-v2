import {
  Airplane,
  Globe,
  WhatsappLogo,
  Camera,
  MagnifyingGlass,
  MapPin,
  Clock,
} from "@phosphor-icons/react";
import { CaseStudyData } from "@/components/templates/CaseStudyLayout";

export const ndilayavhupoData: CaseStudyData = {
  category: "Travel & Tourism",
  title: (
    <>
      Ndilayavhupo
      <br />
      <span className="italic text-outline-2">Travels</span>
    </>
  ),
  description:
    "How we built a visually immersive, high-performance platform with a streamlined WhatsApp booking funnel, turning a Thohoyandou-based travel agency's scattered social media posts into a lead-generating machine that fills group tours.",
  location: "Thohoyandou, Limpopo",
  serviceType: "Travel Agency",
  features: "Tourism Website & Booking Platform",
  previewImage: {
    src: "/preview/www.ndilayavhupo.co.za_(laptop) (2).webp",
    alt: "Travel agency web design — Ndilayavhupo Travels custom tourism booking platform by LMWebDesign",
  },
  problem: {
    quote:
      "Social media chaos was leaking leads. Potential travellers couldn't find past trips, compare options, or book with confidence.",
    paragraphs: [
      "Ndilayavhupo Travels is a Thohoyandou-based travel agency specialising in shared group tours and Limpopo travel packages. They curate authentic experiences across South Africa's hidden gems, but their digital presence was holding them back.",
      "Trip announcements, booking requests, and customer enquiries were all handled through disjointed Facebook and WhatsApp status posts, leading to half-filled tours and revenue left on the table.",
      'When someone searched <span class="text-white/80">&quot;travel agency Thohoyandou&quot;</span> or <span class="text-white/80">&quot;Limpopo group tours&quot;</span>, Ndilayavhupo didn\'t appear. Without a website, they had no way to build brand authority beyond their existing social circle.',
    ],
  },
  solution: {
    quote:
      "A visual-first experience. Stunning destination galleries with a one-tap WhatsApp booking button that auto-fills trip details.",
    paragraphs: [
      "As experienced tour operator website developers, we built a visually immersive, high-performance custom tourism booking platform that turns scrolling into booking and transforms social media followers into confirmed travellers.",
      "Upcoming tours are displayed with clear dates, pricing, itineraries, and a one-tap WhatsApp booking button that auto-fills the trip details, turning inspiration into action.",
      "Beyond current trips, we built an interest-capture system for upcoming itineraries. Visitors can register interest in future destinations, giving Ndilayavhupo a warm lead list to fill every tour before it's even announced on social media.",
    ],
  },
  deliverables: {
    description:
      "A custom tourism booking platform with WhatsApp booking funnels and automated lead capture, built to fill group tours and establish local search authority.",
    highlights: [
      {
        number: "01",
        icon: Globe,
        title: "Travel Agency Web Design That Sells Experiences",
        description:
          "We built a visually immersive website that transports visitors before they even book. High-resolution travel galleries, bold destination imagery, and compelling trip descriptions work together to convert casual browsers into paying group tour participants.",
      },
      {
        number: "02",
        icon: WhatsappLogo,
        title: "Streamlined WhatsApp Booking Funnel",
        description:
          "Each upcoming trip features a dedicated booking CTA that opens a pre-formatted WhatsApp message with the trip name, date, and traveller details. No forms, no friction. Just one tap from 'I want to go' to a confirmed conversation with the travel team.",
      },
      {
        number: "03",
        icon: Camera,
        title: "Sub-Second Gallery Performance",
        description:
          "Travel is sold through visuals. We optimised every gallery image for sub-second rendering using next-gen formats, lazy loading, and responsive sizing, ensuring Limpopo's stunning landscapes load instantly, even on rural mobile networks.",
      },
      {
        number: "04",
        icon: MagnifyingGlass,
        title: "Local SEO for Travel Agencies in Limpopo",
        description:
          "On-page SEO targeting 'travel agency Thohoyandou', 'Limpopo group tours', and 'tour operator Venda' paired with Schema.org TouristTrip markup ensures Ndilayavhupo appears when local travellers search for their next adventure.",
      },
    ],
  },
  results: {
    description:
      "Quantifiable results proving that custom tourism booking platforms build profitable, lead-generating digital assets for the tourism sector.",
    metrics: [
      {
        metric: "60%+",
        label: "Trip Fill Rate Increase",
        description:
          "Group tours filling faster with direct WhatsApp bookings replacing scattered social media DMs",
      },
      {
        metric: "< 0.7s",
        label: "Gallery Load Time",
        description:
          "Sub-second image rendering for travel galleries, even on mobile data connections",
      },
      {
        metric: "5x",
        label: "Organic Local Traffic",
        description:
          "Five-fold increase in organic search visitors from Limpopo and surrounding provinces",
      },
      {
        metric: "100%",
        label: "Automated Lead Capture",
        description:
          "Every trip enquiry captured and funnelled into WhatsApp. Zero leads lost to DM chaos",
      },
    ],
  },
  techStack: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Vercel",
    "WhatsApp Business API",
    "Schema.org TouristTrip Markup",
    "Image Optimisation Pipeline",
    "Responsive Images",
  ],
  cta: {
    title: (
      <>
        Need a website for your{" "}
        <span className="italic text-outline-2">travel business</span>?
      </>
    ),
    description:
      "Whether you're a tour operator in Limpopo, a travel agency in Cape Town, or any tourism business that needs to fill trips and capture leads, we build custom tourism booking platforms that turn browsers into booked travellers.",
  },
};

export const ndilayavhupoIcons = {
  MapPin,
  ServiceIcon: Airplane,
  FeatureIcon: Clock,
};
