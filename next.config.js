require('dotenv').config();
const { sizes } = require('./blocks/Image/sizes');

module.exports = {
 
  experimental: {
    appDir: true,
  },
  publicRuntimeConfig: {
    SERVER_URL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  },
  images: {
    domains: [
      "localhost",
      "pixelabs.verixr.com",
      "justinedev.verixr.com",
      "via.placeholder.com",
      "images.unsplash.com"
    ],
    deviceSizes: sizes,
  },
};
