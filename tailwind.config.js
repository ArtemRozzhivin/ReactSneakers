/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
		screens: {
      'xs': '320px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
			width: {
				'wrapper': '1080px',
			},
			maxWidth: {
				'cart': '210px'
			},
			colors: {
				"lightGreen": "#ddffdc",
				"grayApp": "#9B9B9B",
				"grayContent": "#BDBDBD"
			},
		},
  },
  plugins: [],
}