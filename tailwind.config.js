/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
		screens: {
      'xs': '320px',
      'sm': '520px',
      'md': '768px',
      'lg': '1080px',
      'xl': '1220px',
      '2xl': '1536px',
    },
    extend: {
			width: {
				'wrapper': '1080px',
			},
			maxWidth: {
				'wrapper': '1080px',
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