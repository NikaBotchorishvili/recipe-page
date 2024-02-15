/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["index.html"],
	theme: {
		colors: {
			// Primary

			secondary: "hsl(14, 45%, 36%)",
			main: "hsl(332, 51%, 32%)",

			// Neutral

			white: "hsl(0, 0%, 100%)",
			roseWhite: "hsl(330, 100%, 98%)",
			Eggshell: "hsl(30, 54%, 90%)",
			lightGrey: "hsl(30, 18%, 87%)",
			wengeBrown: "hsl(30, 10%, 34%)",
			darkCharcoal: "hsl(24, 5%, 18%)",
		},
		fontFamily: {
			outfit: "'Outfit', sans-serif",
			young: "'Young Serif', serif",
		},
		extend: {},
	},
	plugins: [],
};
