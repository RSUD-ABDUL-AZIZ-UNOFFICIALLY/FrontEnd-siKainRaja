/** @type {import('next').NextConfig} */
require('dotenv').config();
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
}

module.exports = {
    nextConfig, env: {
        base_url: process.env.base_url,
    },
}
