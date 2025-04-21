/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['cdn.crunchservices.xyz'],
  },
}

module.exports = nextConfig
