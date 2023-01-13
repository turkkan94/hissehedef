/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["react-bootstrap", "reactstrap"],
  },
  env: {
    YAHOO_API_QUOTE_SUMMARY:
      "https://query2.finance.yahoo.com/v10/finance/quoteSummary/",
    YAHOO_API_QUOTE:
      "https://query2.finance.yahoo.com/v7/finance/quote?symbols=",
  },
};

module.exports = nextConfig;
