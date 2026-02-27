import {
  Scissors,
  Globe,
  CalendarCheck,
  DeviceMobile,
  MagnifyingGlass,
  MapPin,
  Clock,
} from "@phosphor-icons/react";
import { CaseStudyData } from "@/components/templates/CaseStudyLayout";

export const xclusiveBarberData: CaseStudyData = {
  category: "Barber & Grooming",
  title: (
    <>
      Xclusive Barber
      <br />
      <span className="italic text-outline-2">Davenport</span>
    </>
  ),
  description:
    "How we replaced disruptive mid-haircut phone calls with a seamless, automated Next.js booking platform, helping a Durban barbershop get found on Google and fill every chair.",
  location: "Davenport, Durban",
  serviceType: "Barber Shop",
  features: "Custom Web Design & Booking System",
  previewImage: {
    src: "/preview/v0-barbershop-durban.vercel.app_(laptop).webp",
    alt: "Custom web design Durban — Xclusive Barber website with salon online booking system by LM Studios",
  },
  problem: {
    quote:
      "Phone calls were killing productivity. Barbers were forced to stop mid-haircut to take bookings, costing them 3 to 4 appointments a day.",
    paragraphs: [
      "Xclusive Barber is a popular grooming destination in Davenport, Durban, known for precision fades, beard sculpting, and a loyal local following. But their growth was being strangled by two operational headaches.",
      'When potential clients searched for <span class="text-white/80">&quot;barber in Davenport&quot;</span> or <span class="text-white/80">&quot;haircut near me Chatsworth&quot;</span>, Xclusive Barber didn\'t exist online. Every unanswered Google search was a booking handed to a competitor.',
      "Every booking came through phone calls, often mid-haircut. Barbers were forced to stop, wipe their hands, and take calls, disrupting the client in the chair and creating a bottleneck that cost real revenue daily.",
    ],
  },
  solution: {
    quote:
      "A booking platform that runs itself. Clients browse, pick a barber, choose a time, and confirm without a single phone call.",
    paragraphs: [
      "We built a complete digital solution as specialist small business website developers: a custom-designed website paired with a salon online booking system that eliminated every phone interruption.",
      "Our custom Next.js booking system lets clients browse services, pick a barber, choose a time slot, and confirm, all without a single phone call. Automated reminders cut no-shows, and the team stays focused on the craft.",
      'On-page SEO targeting <span class="text-white/80">&quot;barber in Davenport&quot;</span> and <span class="text-white/80">&quot;best barber Durban&quot;</span> combined with Schema.org structured data ensures Xclusive Barber now appears in the Google Map Pack where local customers actually look.',
    ],
  },
  deliverables: {
    description:
      "A high-performance website and automated booking system that replaced phone chaos with a revenue machine for this Durban barber shop.",
    highlights: [
      {
        number: "01",
        icon: Globe,
        title: "Custom Web Design Built for Durban Barbers",
        description:
          "We designed a fully bespoke website that captures the premium identity of Xclusive Barber. Bold typography, a dark-themed aesthetic, and high-quality imagery work together to build instant trust with new visitors searching for a barber in Davenport or Durban.",
      },
      {
        number: "02",
        icon: CalendarCheck,
        title: "Salon Online Booking System Setup",
        description:
          "We replaced the chaos of mid-haircut phone calls with a 100% automated Next.js booking platform. Clients now book appointments 24/7, receive automated confirmations, and the team never has to put down their clippers to answer the phone again.",
      },
      {
        number: "03",
        icon: DeviceMobile,
        title: "Mobile-First, Sub-Second Load Times",
        description:
          "Over 80% of Xclusive Barber's clients search on their phones. We built a fully responsive, performance-optimised site that loads in under 0.8 seconds on mobile, so customers in Davenport and Chatsworth can find and book in seconds.",
      },
      {
        number: "04",
        icon: MagnifyingGlass,
        title: "Local SEO for Barber Shops in Durban",
        description:
          "We implemented on-page SEO and Schema.org structured data targeting high-intent phrases like 'barber in Davenport', 'custom web design Durban', and 'haircut Chatsworth'. The result: improved Google Map Pack visibility and more organic walk-ins from local search.",
      },
    ],
  },
  results: {
    description:
      "Hard numbers that prove our custom web design work saves business owners time and makes them money.",
    metrics: [
      {
        metric: "< 0.8s",
        label: "Mobile Load Time",
        description:
          "Sub-second page loads on 3G and 4G networks, keeping bounce rates near zero",
      },
      {
        metric: "100%",
        label: "Automated Scheduling",
        description:
          "Zero phone interruptions during haircuts. Every booking handled automatically",
      },
      {
        metric: "Top 3",
        label: "Local Map Pack",
        description:
          "Ranking in Google's local pack for 'barber Davenport' and 'barber near me Durban'",
      },
      {
        metric: "40%+",
        label: "More Monthly Bookings",
        description:
          "Measurable increase in appointment volume within the first 60 days of launch",
      },
    ],
  },
  techStack: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Vercel",
    "Custom Booking API",
    "Google Maps Integration",
    "Schema.org Markup",
    "Responsive Images",
  ],
  cta: {
    title: (
      <>
        Need a website that{" "}
        <span className="italic text-outline-2">books clients</span> for you?
      </>
    ),
    description:
      "Whether you're a barber in Durban, a salon in Johannesburg, or any small business in South Africa that's tired of answering the phone, we build websites that get you found, booked, and paid.",
  },
};

export const xclusiveBarberIcons = {
  MapPin,
  ServiceIcon: Scissors,
  FeatureIcon: Clock,
};
