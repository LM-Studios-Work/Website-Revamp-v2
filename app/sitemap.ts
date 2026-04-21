import type { MetadataRoute } from "next";

const DOMAIN = "https://www.lmwebdesign.co.za";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: DOMAIN,
      lastModified: "2026-04-14",
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${DOMAIN}/about-us`,
      lastModified: "2026-04-01",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${DOMAIN}/contact`,
      lastModified: "2026-03-09",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${DOMAIN}/projects`,
      lastModified: "2026-04-14",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${DOMAIN}/projects/mr-float-logistics`,
      lastModified: "2026-04-01",
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${DOMAIN}/projects/xclusive-barber`,
      lastModified: "2026-04-01",
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${DOMAIN}/projects/ndilayavhupo-travels`,
      lastModified: "2026-03-09",
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${DOMAIN}/services`,
      lastModified: "2026-04-01",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${DOMAIN}/services/web-design`,
      lastModified: "2026-04-01",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${DOMAIN}/services/seo`,
      lastModified: "2026-03-09",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${DOMAIN}/services/app-development`,
      lastModified: "2026-03-09",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${DOMAIN}/services/barbershop`,
      lastModified: "2026-03-09",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${DOMAIN}/services/custom-wedding-websites`,
      lastModified: "2026-03-09",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${DOMAIN}/services/e-commerce`,
      lastModified: "2026-03-09",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${DOMAIN}/services/private-event-websites`,
      lastModified: "2026-03-09",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${DOMAIN}/services/web-design/care-plan`,
      lastModified: "2026-04-21",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${DOMAIN}/web-design-johannesburg`,
      lastModified: "2026-04-01",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${DOMAIN}/web-design-midrand`,
      lastModified: "2026-04-21",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${DOMAIN}/privacy-policy`,
      lastModified: "2026-02-24",
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${DOMAIN}/terms-of-service`,
      lastModified: "2026-02-24",
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
