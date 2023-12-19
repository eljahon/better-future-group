/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'api.betterfuture.uz',
                port: '',
                // pathname: '/account123/**',
            },
        ],
        domains: [
          "192.168.0.109",
        "localhost",
          "api.qrserver.com"
        ]
      },
}

module.exports = nextConfig
