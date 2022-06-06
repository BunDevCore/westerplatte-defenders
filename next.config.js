const nextTranslate = require('next-translate');

module.exports = nextTranslate({
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/learn",
        destination: "/learn/war",
        permanent: true,
      },
    ]
  },
});
