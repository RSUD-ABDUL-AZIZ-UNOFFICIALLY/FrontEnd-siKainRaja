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
module.exports = {
    eslint: {
        ignoreDuringBuilds: false,
    },
    env: {
        base_url: process.env.base_url,
    },
    // NextConfig
}