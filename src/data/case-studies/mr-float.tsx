import {
  Truck,
  Globe,
  WhatsappLogo,
  DeviceMobile,
  MagnifyingGlass,
  MapPin,
  Clock,
} from "@phosphor-icons/react";
import { CaseStudyData } from "@/components/templates/CaseStudyLayout";

export const mrFloatData: CaseStudyData = {
  category: "Logistics & Transport",
  title: (
    <>
      Mr. Float
      <br />
      <span className="italic text-outline-2">Logistics</span>
    </>
  ),
  description:
    "How we built a high-converting landing page with custom WhatsApp booking integration, unifying six transport services into one lead-generating digital platform for a Zimbabwe-based transport company.",
  location: "Zimbabwe",
  serviceType: "Transport & Logistics",
  features: "Landing Page & WhatsApp Integration",
  previewImage: {
    src: "/preview/mrfloatlogistics.com_(laptop) (6).webp",
    alt: "Transport company web design — Mr. Float Logistics website with custom WhatsApp booking integration by LMWebDesign",
  },
  problem: {
    quote:
      "Scattered communication killed conversions. Potential customers had to hunt through social media posts just to find a phone number.",
    paragraphs: [
      "Mr. Float Logistics operates across Zimbabwe offering a complex array of services: taxi rides, long-distance travel, car hire, airport shuttles, and package deliveries. Despite being a trusted name locally, they had no centralised digital presence to match their reputation.",
      "There was no clear way to see all services, compare options, or make a booking. This was leading to dozens of lost leads every day.",
      'Without a professional website, Mr. Float was invisible to the growing number of Zimbabweans searching online for <span class="text-white/80">&quot;transport service Zimbabwe&quot;</span> or <span class="text-white/80">&quot;car hire Harare&quot;</span> and losing business to competitors who looked more established.',
    ],
  },
  solution: {
    quote:
      "One page, six services, one tap to book. Every service opens a pre-formatted WhatsApp message automatically.",
    paragraphs: [
      "As experienced logistics website developers, we built a fast, mobile-optimised landing page designed to do one thing exceptionally well: funnel six diverse transport services directly into a streamlined WhatsApp booking system.",
      "Every service from airport shuttles to package deliveries is clearly presented with its own call-to-action that opens a pre-formatted WhatsApp message. The customer never has to type an explanation. The system handles context automatically.",
      "We optimised every asset for sub-second loads on 3G networks, knowing that most users access the site on budget smartphones with limited data. The result: a professional digital presence that converts, even on the slowest connections.",
    ],
  },
  deliverables: {
    description:
      "A high-converting landing page with custom WhatsApp booking integration, purpose-built for a multifaceted transport business in Zimbabwe.",
    highlights: [
      {
        number: "01",
        icon: Globe,
        title: "Transport Company Web Design That Builds Trust",
        description:
          "We built a fast, professional landing page that instantly communicates credibility. Instead of scattered social media posts, Mr. Float now has a centralised digital presence that showcases every service from taxi rides to package deliveries in one polished, conversion-focused layout.",
      },
      {
        number: "02",
        icon: WhatsappLogo,
        title: "Custom WhatsApp Booking Integration",
        description:
          "We designed a streamlined service selection flow that funnels every enquiry, whether it's a car hire, airport shuttle, or long-distance trip, directly into a pre-formatted WhatsApp message. Customers tap, select their service, and start chatting. Zero friction, zero missed leads.",
      },
      {
        number: "03",
        icon: DeviceMobile,
        title: "Mobile-Optimised for On-the-Go Bookings",
        description:
          "Over 90% of Mr. Float's customers browse on mobile. We built a lightning-fast, thumb-friendly interface that loads in under 0.9 seconds on 3G networks. Critical in Zimbabwe where data costs are high and connection speeds vary.",
      },
      {
        number: "04",
        icon: MagnifyingGlass,
        title: "Local SEO for Transport Companies in Zimbabwe",
        description:
          "On-page SEO targeting 'transport service Zimbabwe', 'car hire Harare', and 'airport shuttle Bulawayo' ensures Mr. Float appears when business owners and travellers search for reliable logistics. Schema.org markup drives local search visibility across multiple cities.",
      },
    ],
  },
  results: {
    description:
      "Measurable results proving that practical, high-converting small business websites in Zimbabwe drive real revenue.",
    metrics: [
      {
        metric: "< 0.9s",
        label: "Mobile Load Time",
        description:
          "Sub-second performance on mobile networks, keeping users engaged even on 3G",
      },
      {
        metric: "3x",
        label: "Daily WhatsApp Enquiries",
        description:
          "Triple the daily inbound leads funnelled directly into WhatsApp conversations",
      },
      {
        metric: "6 to 1",
        label: "Services, One Platform",
        description:
          "Six distinct transport services unified under one clear, navigable digital presence",
      },
      {
        metric: "Top 5",
        label: "Local Search Visibility",
        description:
          "Improved Google rankings for key transport and logistics terms in Zimbabwe",
      },
    ],
  },
  techStack: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Vercel",
    "WhatsApp Business API",
    "Schema.org Markup",
    "Responsive Images",
    "Mobile-First Architecture",
  ],
  cta: {
    title: (
      <>
        Need a website for your{" "}
        <span className="italic text-outline-2">transport business</span>?
      </>
    ),
    description:
      "Whether you run a logistics company in Zimbabwe, a shuttle service in South Africa, or any transport business that needs to capture leads online, we build small business websites that turn visitors into WhatsApp bookings.",
  },
};

export const mrFloatIcons = {
  MapPin,
  ServiceIcon: Truck,
  FeatureIcon: Clock,
};
