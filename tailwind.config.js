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
			customSerif: ["ABCSynt-Regular-Trial"],
		},
		screens: {
			sm: "300px",
			md: "700px",
			lg: "976px",
			xl: "1440px",
		},
		colors: {
			white: "#ffffff",
			cream: "#F3F7F3",
			black: "#211D1D",
			gray: "#BEBEBE",
			ash: "#8C8C8C",
			pink: "#FF80FA",
		},
		extend: {
			backgroundColor: {
				"random-color-1": "#ff5733",
				"random-color-2": "#33ff57",
				"random-color-3": "#5733ff",
			},
			fontSize: {
				actionS: ["12px", { lineHeight: "14px", letterSpacing: "0.05em" }],
				actionM: ["14px", { lineHeight: "16px", letterSpacing: "0.05em" }],
				actionL: ["24px", { lineHeight: "24px", letterSpacing: "0.02em" }],
				note: ["12px", { lineHeight: "14px", letterSpacing: "0.04em" }],
				body: ["24px", { lineHeight: "18px", letterSpacing: "0.00em" }],
				xl: ["32px", { lineHeight: "28px", letterSpacing: "0.0em" }],
				"2xl": ["40px", { lineHeight: "44px", letterSpacing: "-0.01em" }],
				"3xl": ["48px", { lineHeight: "48px", letterSpacing: "-0.01em" }],
				"4xl": ["64px", { lineHeight: "64px", letterSpacing: "-0.02em" }],
				"6xl": ["96px", { lineHeight: "92px", letterSpacing: "-0.0em" }],
				"7xl": ["212px", { lineHeight: "190px", letterSpacing: "-0.02em" }],
			},
			keyframes: {
				pulse: {
					"0%, 70%, 100%": {
						filter: "blur(0px)",
					},
					"50%": {
						opacity: "0",
						filter: "blur(32px)",
					},
				},
			},
			animation: {
				pulse: "pulse 10s ease-out infinite",
			},
		},
	},
	plugins: [],
};
