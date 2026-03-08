import { NextResponse } from "next/server";
import type { Review } from "@/types/reviews";

// Fallback reviews shown when the Google Places API is unavailable or over quota.
// These are real clients — kept as a safety net, not as fabricated content.
const FALLBACK_REVIEWS: Review[] = [
  {
    name: "Rocky",
    title: "Google Review",
    rating: 5,
    testimonial:
      "During my recent experience, I was thoroughly impressed with the level of customer service provided by LM Web Design. Lupry’s patience throughout the entire process truly stood out, as he managed each step with care and professionalism. Despite challenges with my existing hosting company, which was unable to assist, Lupry took initiative and seamlessly managed the situation. His proactive approach ensured that our website was launched on time, demonstrating both competence and dedication. Based on this outstanding support and his professional approach and patience, I highly recommend Lupry for anyone wanting to have a website done. Thank you!!!",
    url: "https://share.google/cqfu2fOfTjcbzSMRq",
  },
  {
    name: "Ash",
    title: "Google Review",
    rating: 5,
    testimonial:
      "We had a great experience with LMWebDesign. What stood out was how much time they spent researching our specific niche and looking at what our competitors were doing to see how we could outperform them. As someone who isn’t a 'tech person,' I really appreciated how they explained the SEO and web design process in a way that actually made sense for our business. They go above and beyond to make sure you’re never lost in the process. Professional, thorough, and very highly recommended.",
    url: "https://share.google/a4ryCEhQJVqJicclM",
  },
  {
    name: "Rokunda",
    title: "Google Review",
    rating: 5,
    testimonial:
      "They created my architectural portfolio website and this is the best service ive received. A lot of other places quoted me over 15 thousand for what i needed done as it was quite complex and previous companies returned very ugly and unusable websites. They did it in a timely and affordable manner. They followed everything I wanted down to the decimal with professionalism and ease. I will be using their services again for more work in future. Great service received",
    url: "https://share.google/YOvDqBTPIowP0TnvP",
  },
  {
    name: "Shots by Ozee",
    title: "Google Review",
    rating: 5,
    testimonial:
      "Made an amazing website for my photography business (shotsbyozee) . I would definitely recommend this website designer, very affordable rates and very fast responses to your every needs",
    url: "https://share.google/V5AAbktr157gvI4rs",
  },
  {
    name: "Makabongwe",
    title: "Google Review",
    rating: 5,
    testimonial:
      "The service was provided at an excellent standard. Punctuality and communication was very good. I would recommend LM studios to any other growing business who want to improve and make their business the best.",
    url: "https://share.google/ZT3cEEySeYKBPHtps",
  },
];

const PLACE_ID = "ChIJmcxwIrFvlR4RqDIGR7rhppY";

export async function GET() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;

  if (!apiKey) {
    return NextResponse.json({ reviews: FALLBACK_REVIEWS, source: "fallback" });
  }

  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews&key=${apiKey}&reviews_sort=newest`;

    const res = await fetch(url, { next: { revalidate: 3600 } }); // cache for 1 hour

    if (!res.ok) {
      return NextResponse.json({ reviews: FALLBACK_REVIEWS, source: "fallback" });
    }

    const data = await res.json();

    if (data.status !== "OK" || !data.result?.reviews?.length) {
      return NextResponse.json({ reviews: FALLBACK_REVIEWS, source: "fallback" });
    }

    const reviews: Review[] = (data.result.reviews as GoogleReview[])
      .map((r) => ({
        name: r.author_name,
        title: "Google Review",
        rating: r.rating,
        testimonial: r.text.trim(),
      }));

    if (reviews.length === 0) {
      return NextResponse.json({ reviews: FALLBACK_REVIEWS, source: "fallback" });
    }

    return NextResponse.json({ reviews, source: "google" });
  } catch {
    return NextResponse.json({ reviews: FALLBACK_REVIEWS, source: "fallback" });
  }
}

type GoogleReview = {
  author_name: string;
  rating: number;
  text: string;
  relative_time_description: string;
  profile_photo_url?: string;
};
