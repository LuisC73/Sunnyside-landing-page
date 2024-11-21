/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	safelist: [
		"bg-[url('/images/mobile/image-header.jpg')]",
		"md:bg-[url('/images/desktop/image-header.jpg')]",
		"bg-[url('/images/mobile/image-transform.jpg')]",
		"md:bg-[url('/images/desktop/image-transform.jpg')]",
		"bg-[url('/images/mobile/image-stand-out.jpg')]",
		"md:bg-[url('/images/desktop/image-stand-out.jpg')]",
		"bg-[url('/images/mobile/image-graphic-design.jpg')]",
		"md:bg-[url('/images/desktop/image-graphic-design.jpg')]",
		"bg-[url('/images/mobile/image-photography.jpg')]",
		"md:bg-[url('/images/desktop/image-photography.jpg')]"
	],
	theme: {
		extend: {
			'colors': {
				'primary': {
					'red': '#fe7867',
					'yellow': '#fad400',
					'desaturated-cyan': '#25564b',
					'cyan': '#458c7e',
					'white': '#fffbf8'
				},
				'secondary': {
					'desaturated-blue': '#23303e',
					'dark-blue': '#5a636c',
					'grayish-blue': '#818498',
					'blue': '#a7abae'
				}
			},
			'fontFamily': {
				barlow: ['Barlow', 'sans-serif'],
				frauces: ['Fraunces Variable', 'serif']
			},
			'gridTemplateColumns': {
				'cards': 'repeat(auto-fit, minmax(240px, 1fr))'
			}
		},
	},
	plugins: [],
}
