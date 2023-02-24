/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    //enter the domain or subdomain where you have WordPress installed
    domains: ['isrsep.dreamhosters.com'],
  },
}

module.exports = nextConfig
