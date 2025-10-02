/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true,
    optimizePackageImports: ['gsap', 'lucide-react']
  },
  images: {
    formats: ['image/avif', 'image/webp']
  }
};

export default nextConfig;
