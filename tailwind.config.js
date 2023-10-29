/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",

		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		fontFamily: {
			customBlack: ["NeueHaasDisplay-Black"],
			customBold: ["NeueHaasDisplay-Bold"],
			customMed: ["NeueHaasDisplay-Mediu"],
			custom: ["NeueHaasDisplay-Roman"],
			customLight: ["NeueHaasDisplay-Light"],
		},
		screens: {
			sm: "480px",
			md: "700px",
			lg: "976px",
			xl: "1440px",
		},
		colors: {
			white: "#ffffff",
			cream: "#F3F7F3",
			black: "#211D1D",
			gray: "#BEBEBE",
			pink: "#CF00F1",
			"gray-dark": "#273444",
			"gray-light": "#fafafa",
			mint: "#D1FFE9",
			red: "#EF0D36",
		},
		extend: {
			backgroundColor: {
				"random-color-1": "#ff5733",
				"random-color-2": "#33ff57",
				"random-color-3": "#5733ff",
			},
			keyframes: {
				pulse: {
					"0%, 100%": { opacity: "1" },
					"50%": { opacity: "0" },
				},
			},
			animation: {
				pulse: "pulse 20s ease-out infinite",
			},
		},
	},
	plugins: [],
};
