import type { MetadataRoute } from "next";

const DOMAIN = "https://www.lmwebdesign.co.za";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: DOMAIN,
      lastModified: new Date("2025-01-01"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${DOMAIN}/about-us`,
      lastModified: new Date("2025-01-01"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${DOMAIN}/contact`,
      lastModified: new Date("2025-01-01"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${DOMAIN}/projects`,
      lastModified: new Date("2025-01-01"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${DOMAIN}/projects/mr-float-logistics`,
      lastModified: new Date("2025-01-01"),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${DOMAIN}/projects/xclusive-barber`,
      lastModified: new Date("2025-01-01"),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${DOMAIN}/projects/ndilayavhupo-travels`,
      lastModified: new Date("2025-01-01"),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${DOMAIN}/services`,
      lastModified: new Date("2025-01-01"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${DOMAIN}/services/web-design`,
      lastModified: new Date("2025-01-01"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${DOMAIN}/services/seo`,
      lastModified: new Date("2025-01-01"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${DOMAIN}/services/app-development`,
      lastModified: new Date("2025-01-01"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${DOMAIN}/services/barbershop`,
      lastModified: new Date("2025-01-01"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${DOMAIN}/services/custom-wedding-websites`,
      lastModified: new Date("2025-01-01"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${DOMAIN}/services/e-commerce`,
      lastModified: new Date("2025-01-01"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${DOMAIN}/services/private-event-websites`,
      lastModified: new Date("2025-01-01"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${DOMAIN}/services/web-design/care-plan`,
      lastModified: new Date("2025-01-01"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${DOMAIN}/web-design-johannesburg`,
      lastModified: new Date("2025-01-01"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${DOMAIN}/web-design-midrand`,
      lastModified: new Date("2025-01-01"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${DOMAIN}/privacy-policy`,
      lastModified: new Date("2025-01-01"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${DOMAIN}/terms-of-service`,
      lastModified: new Date("2025-01-01"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
