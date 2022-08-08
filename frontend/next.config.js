/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains:["upload.wikimedia.org","static.xx.fbcdn.net","z-p3-scontent.fbjm1-1.fna.fbcdn.net"],
  }
}

module.exports = nextConfig
