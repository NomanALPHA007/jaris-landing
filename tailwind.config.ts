import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		fontSize: {
			xs: ["12px", "16px"],
			sm: ["14px", "20px"],
			base: ["16px", "19.5px"],
			lg: ["18px", "21.94px"],
			xl: ["20px", "24.38px"],
			"2xl": ["24px", "29.26px"],
			"3xl": ["28px", "32px"],
			"4xl": ["32px", "38px"],
			"5xl": ["40px", "48px"],
			"6xl": ["48px", "58px"],
			"7xl": ["64px", "74px"],
			"8xl": ["96px", "106px"],
		},
		extend: {
			colors: {
				"jaris-blue": "#1C406F",
        "jaris-blue-light": "#3B5174",
        "jaris-blue-dark": "#233D64",
				"jaris-gold": "#DD8F27",
        "jaris-gold-dark": "#B1721F",
				"jaris-red": "#ED4A45",
        "jaris-red-light": "#982F2C",
        "jaris-red-dark": "#7A2623",
        "jaris-yellow": "#EFCB9C",
        "jaris-white": "#FAFAFA",
        "jaris-black": "#191818",
        "bg-primary": "#FFF7ED",
        "bg-text": "#FFEED9",
			},
		},
	},
	darkMode: "class",
	plugins: [nextui()],
};
export default config;
