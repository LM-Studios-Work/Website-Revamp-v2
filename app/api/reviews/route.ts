import { NextResponse } from "next/server";
import type { Review } from "@/types/reviews";

// Fallback reviews shown when the Google Places API is unavailable or over quota.
// These are real clients — kept as a safety net, not as fabricated content.
const FALLBACK_REVIEWS: Review[] = [
  {
    name: "Omhle Zuma",
    title: "Google Review",
    rating: 5,
    testimonial:
      "LMWebDesign turned our designs into a working website, and they even suggested some improvements that we liked. The site is fast, the communication was great, and the project was delivered on schedule.",
  },
  {
    name: "Nkoka Logan",
    title: "Google Review",
    rating: 5,
    testimonial:
      "The team knows their stuff. They handled our technical questions well and helped us refine the user experience. We're happy with the final product and the service was professional throughout.",
  },
  {
    name: "Neo Leeuw",
    title: "Google Review",
    rating: 5,
    testimonial:
      "Working with LMWebDesign was a great experience. They were patient with our questions and always responsive. We got the website we wanted and would absolutely recommend them.",
  },
  {
    name: "Rokunda Mboyi",
    title: "Google Review",
    rating: 5,
    testimonial:
      "We needed custom work done on our existing site, and LMWebDesign delivered. They have the technical skills for complex jobs, which was exactly what we were looking for.",
  },
];

export async function GET() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return NextResponse.json({ reviews: FALLBACK_REVIEWS, source: "fallback" });
  }

  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}&reviews_sort=newest`;

    const res = await fetch(url, { next: { revalidate: 3600 } }); // cache for 1 hour

    if (!res.ok) {
      return NextResponse.json({ reviews: FALLBACK_REVIEWS, source: "fallback" });
    }

    const data = await res.json();

    if (data.status !== "OK" || !data.result?.reviews?.length) {
      return NextResponse.json({ reviews: FALLBACK_REVIEWS, source: "fallback" });
    }

    const reviews: Review[] = (data.result.reviews as GoogleReview[])
      .filter((r) => r.rating >= 4 && r.text?.trim().length > 20)
      .slice(0, 6)
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
