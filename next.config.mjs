/** @type {import('next').NextConfig} */
const MISSING_PAGE_REDIRECTS = [
  "products",
  "categories/t-shirts",
  "categories/hoodies",
  "categories/accessories",
];

const nextConfig = {
  async redirects() {
    return MISSING_PAGE_REDIRECTS.map(source => ({
      source: `/${source}`,
      destination: `/${source}/1`,
      permanent: true,
    }));
  }
};

export default nextConfig;
