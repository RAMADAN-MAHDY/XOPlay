/** @type {import('next').NextConfig} */


module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'openweathermap.org',
          port: '',
          pathname: '/account123/**',
        },
      ],
    },
  }
