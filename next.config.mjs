/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/products',
        destination: '/products/1',
        permanent: true, // Ustaw na true, jeśli przekierowanie ma być stałe (301), lub false, jeśli tymczasowe (302)
      },
      {
        source: '/categories/t-shirts',
        destination: '/categories/t-shirts/1',
        permanent: true, // Ustaw na true, jeśli przekierowanie ma być stałe (301), lub false, jeśli tymczasowe (302)
      },
    ]
  },
};

export default nextConfig;
