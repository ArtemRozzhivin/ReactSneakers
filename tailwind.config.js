/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
			width: {
				'wrapper': '1080px',
			},
			maxWidth: {
				'cart': '210px'
			},
			colors: {
				"grayApp": "#9B9B9B",
				"grayContent": "#BDBDBD"
			},
		},
  },
  plugins: [],
}