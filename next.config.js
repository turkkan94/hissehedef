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
};

module.exports = nextConfig;
