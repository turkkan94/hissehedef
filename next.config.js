/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    MAIN_API: "https://api.hissehedef.com",
    YAHOO_API_QUOTE:
      "https://query2.finance.yahoo.com/v7/finance/quote?symbols=",
  },
  async rewrites() {
    return [
      {
        source: "/sitemap.xml",
        destination: "/api/sitemap.xml",
      },
      {
        source: "/sectors-sitemap.xml",
        destination: "/api/sectors-sitemap.xml",
      },
      {
        source: "/stocks-sitemap.xml",
        destination: "/api/stocks-sitemap.xml",
      },
      {
        source: "/stocks-sitemap-1.xml",
        destination: "/api/stocks-sitemap-1.xml",
      },
      {
        source: "/stocks-sitemap-2.xml",
        destination: "/api/stocks-sitemap-2.xml",
      },
      {
        source: "/stocks-sitemap-3.xml",
        destination: "/api/stocks-sitemap-3.xml",
      },
      {
        source: "/stocks-sitemap-4.xml",
        destination: "/api/stocks-sitemap-4.xml",
      },
      {
        source: "/stocks-sitemap-5.xml",
        destination: "/api/stocks-sitemap-5.xml",
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/api/sitemap.xml",
        destination: "/sitemap.xml",
        permanent: true,
      },
      {
        source: "/api/sectors-sitemap.xml",
        destination: "/sectors-sitemap.xml",
        permanent: true,
      },
      {
        source: "/api/stocks-sitemap.xml",
        destination: "/stocks-sitemap.xml",
        permanent: true,
      },
      {
        source: "/api/stocks-sitemap-1.xml",
        destination: "/stocks-sitemap-1.xml",
        permanent: true,
      },
      {
        source: "/api/stocks-sitemap-2.xml",
        destination: "/stocks-sitemap-2.xml",
        permanent: true,
      },
      {
        source: "/api/stocks-sitemap-3.xml",
        destination: "/stocks-sitemap-3.xml",
        permanent: true,
      },
      {
        source: "/api/stocks-sitemap-4.xml",
        destination: "/stocks-sitemap-4.xml",
        permanent: true,
      },
      {
        source: "/api/stocks-sitemap-5.xml",
        destination: "/stocks-sitemap-5.xml",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
