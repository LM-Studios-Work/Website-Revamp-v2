/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "c.animaapp.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "fonts.gstatic.com" },
    ],
  },
  async redirects() {
    return [
      // Redirect non-www to www (canonical)
      {
        source: "/:path*",
        has: [{ type: "host", value: "lmwebdesign.co.za" }],
        destination: "https://www.lmwebdesign.co.za/:path*",
        permanent: true,
      },
      // Redirect http to https (canonical)
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.lmwebdesign.co.za" }],
        destination: "https://www.lmwebdesign.co.za/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
