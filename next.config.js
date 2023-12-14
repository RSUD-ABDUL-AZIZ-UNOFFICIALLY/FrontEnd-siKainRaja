/** @type {import('next').NextConfig} */
require('dotenv').config();

// const withPWA = require('next-pwa')({
//     dest: 'public'
// })


// module.exports = withPWA({
//     eslint: {
//         ignoreDuringBuilds: false,
//     },
//     env: {
//         base_url: process.env.base_url,
//     },
//     // NextConfig
// })

const runtimeCaching = require("next-pwa/cache");
const withPWA = require('next-pwa')({
    dest: 'public',
    register: true,
    skipWaiting: true,
    runtimeCaching
})
module.exports = withPWA({
    eslint: {
        ignoreDuringBuilds: false,
    },
    env: {
        base_url: process.env.base_url,
    },
    pwa: {
        dest: 'public',
        register: true,
        skipWaiting: true,
        runtimeCaching
    },
    reactStrictMode: false
    // NextConfig
})