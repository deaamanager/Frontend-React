/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],
    reactStrictMode: true,
    experimental: {
      appDir: true,
      serverComponentsExternalPackages: ['@tremor/react'],
    },
    images: {
      domains: ['cdn.sanity.io'],
    },
  


}

module.exports = nextConfig
