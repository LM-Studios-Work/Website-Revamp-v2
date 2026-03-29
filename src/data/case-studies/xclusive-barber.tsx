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
  websiteUrl: "https://xclusivebarber.co.za",
  category: "Barber & Grooming",
  title: (
    <>
      Xclusive Barber
      <br />
      <span className="italic text-outline-2">Davenport</span>
    </>
  ),
  description:
    "Custom booking platform built for Xclusive Barber in Davenport, Durban. The system moved the shop from walk-in to scheduled operations, eliminated queue losses, and gave customers full visibility into barber availability, wait times, and service pricing.",
  location: "Davenport, Durban",
  serviceType: "Barber Shop",
  features: "Booking Platform & Local SEO",
  previewImage: {
    src: "/preview/v0-barbershop-durban.vercel.app_(laptop).webp",
    alt: "Xclusive Barber Davenport Durban — custom booking platform and barbershop website by LMWebDesign",
  },
  problem: {
    quote:
      "Customers were walking in, seeing the queue, and walking out. That revenue was gone before the shop even knew it was happening.",
    paragraphs: [
      "Xclusive Barber is an established grooming shop in Davenport, Durban, with a solid local reputation for precision fades and beard work. The problem was operational: the shop had no online presence and no appointment system.",
      "Walk-in customers would arrive, see the wait, and leave without booking. Because there was no online channel, those customers had no way to check availability in advance or hold a slot. The shop had no visibility into how frequently this was happening or how much revenue it represented.",
      'Local customers also lacked basic information before making the trip. There was no way to see which barbers were on shift, what the current wait looked like, or what specific services cost. That absence of transparency was enough to push customers toward competitors who offered it. People searching for <span class="text-white/80">&quot;barber in Davenport&quot;</span> or <span class="text-white/80">&quot;haircut near me Durban&quot;</span> were not finding the shop at all.',
    ],
  },
  solution: {
    quote:
      "A scheduled operation with full pricing and availability transparency. Customers know exactly who is cutting, when, and at what cost before they arrive.",
    paragraphs: [
      "The solution was a production booking platform with a Next.js and TypeScript frontend, an ASP.NET Core 10 Web API backend hosted on Azure, and a Supabase PostgreSQL database with Row Level Security. The platform was also built with local SEO as a core requirement, not an afterthought.",
      "Customers can view which barbers are working on a given day, see verified service prices, and book a specific time slot. Pricing is fetched and confirmed server-side at checkout, so the price a customer sees is the price the database holds. There is no client-side manipulation possible.",
      'The site targets search terms like <span class="text-white/80">&quot;barber in Davenport&quot;</span>, <span class="text-white/80">&quot;barbershop Durban&quot;</span>, and related local phrases through structured on-page SEO and Schema.org markup. The goal was to generate consistent inbound leads from customers who are actively looking for a barber in the area.',
    ],
  },
  deliverables: {
    description:
      "A production booking platform with payment integration, automated communication, custom business logic, and admin tooling built to run a Durban barbershop as a scheduled operation.",
    highlights: [
      {
        number: "01",
        icon: Globe,
        title: "Full-Stack Booking Platform",
        description:
          "Built with a Next.js and TypeScript frontend and an ASP.NET Core 10 Web API backend on Azure, backed by Supabase PostgreSQL with Row Level Security. Customers browse barber availability by day, select from verified service prices, and book specific time slots. The shop transitioned from walk-in to fully scheduled.",
      },
      {
        number: "02",
        icon: CalendarCheck,
        title: "Double Booking Prevention and Business Rules",
        description:
          "The C# backend load balances appointments and returns a 409 Conflict when slots overlap, handling race conditions from concurrent booking attempts. The database enforces the same constraint through a partial unique index. Shop rules are built directly into the API: a R10 penalty for arriving 15 minutes late, mandatory rescheduling at 30 minutes, and automatic cancellation of unpaid holds after 10 minutes.",
      },
      {
        number: "03",
        icon: DeviceMobile,
        title: "Secure Payments and Automated Communication",
        description:
          "Yoco handles checkouts. Service prices are fetched directly from the database at checkout time, making client-side price tampering impossible. Custom branded emails trigger automatically for booking confirmations, reschedules, and cancellations, keeping customers informed without any manual input from staff.",
      },
      {
        number: "04",
        icon: MagnifyingGlass,
        title: "Local SEO and Admin Dashboard",
        description:
          "On-page SEO and Schema.org structured data targeting 'barber Davenport', 'barbershop Durban', and related local terms gives the shop consistent visibility in local search results and the Google Map Pack. The admin CRM lets the owner track daily revenue, individual barber performance, and cancellation metrics across any date range.",
      },
    ],
  },
  results: {
    description:
      "Outcomes after the platform launched at Xclusive Barber in Davenport, Durban.",
    metrics: [
      {
        metric: "0",
        label: "Queue Walk-Outs",
        description:
          "Customers book in advance. The shop no longer loses revenue to walk-ins who leave after seeing the wait",
      },
      {
        metric: "100%",
        label: "Automated Scheduling",
        description:
          "Every booking, confirmation, reschedule, and cancellation is handled by the platform without staff intervention",
      },
      {
        metric: "Top 3",
        label: "Local Map Pack",
        description:
          "Ranking in Google's local pack for 'barber Davenport' and related search terms in Durban",
      },
      {
        metric: "Full",
        label: "Pricing Transparency",
        description:
          "Customers see verified service costs before booking. Prices are enforced server-side at checkout",
      },
    ],
  },
  techStack: [
    "Next.js",
    "TypeScript",
    "ASP.NET Core 10",
    "C#",
    "Azure",
    "Supabase PostgreSQL",
    "Yoco Payments",
    "Schema.org Markup",
  ],
  cta: {
    title: (
      <>
        Need a website that{" "}
        <span className="italic text-outline-2">books clients</span> for you?
      </>
    ),
    description:
      "Whether you run a barber shop in Durban, a salon in Johannesburg, or any service business in South Africa that needs a proper booking system, we build platforms that handle scheduling, payments, and customer communication end to end.",
  },
};

export const xclusiveBarberIcons = {
  MapPin,
  ServiceIcon: Scissors,
  FeatureIcon: Clock,
};
