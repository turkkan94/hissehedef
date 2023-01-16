/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["react-bootstrap", "reactstrap"],
  },
  env: {
    MAIN_API: "http://127.0.0.1:8000/api",
    YAHOO_API_QUOTE:
      "https://query2.finance.yahoo.com/v7/finance/quote?symbols=",
  },
};

module.exports = nextConfig;
