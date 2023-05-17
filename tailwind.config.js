/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
			fontFamily: {
        'inter': ['inter', 'sans-serif'],
			},
			colors: {
				'old-lace': '#FAF4E5',
				'black': '#2C2C2C',
				'green': '#7EBC89',
				'old-green': '#45774E'
			},
		},
  },
  plugins: [require("flowbite/plugin")],
};
