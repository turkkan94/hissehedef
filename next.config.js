/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["react-bootstrap", "reactstrap"],
  },
  env: {
    MAIN_API: "https://hisse-hedef.herokuapp.com/api",
    YAHOO_API_QUOTE:
      "https://query2.finance.yahoo.com/v7/finance/quote?symbols=",
  },
};

module.exports = nextConfig;
