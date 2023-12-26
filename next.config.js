/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            "api.coozin.uz",
            "trator-laravel-images.s3.eu-central-1.amazonaws.com"
        ]
      },
}

module.exports = nextConfig