// craco.config.js (สำหรับเวอร์ชัน 7)
module.exports = {
  postcss: {
    plugins: [
      require('tailwindcss'),
      require('autoprefixer'),
    ],
  },
};