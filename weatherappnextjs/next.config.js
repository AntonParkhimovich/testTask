module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/in/minsk',
        permanent: true,
      },
    ]
  },

    images: {
      domains: ['cdn.weatherapi.com'],
    },

}
