/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	safelist: [
		"bg-[url('/Sunnyside-landing-page/images/mobile/image-header.jpg')]",
		"md:bg-[url('/Sunnyside-landing-page/images/desktop/image-header.jpg')]",
		"bg-[url('/Sunnyside-landing-page/images/mobile/image-transform.jpg')]",
		"md:bg-[url('/Sunnyside-landing-page/images/desktop/image-transform.jpg')]",
		"bg-[url('/Sunnyside-landing-page/images/mobile/image-stand-out.jpg')]",
		"md:bg-[url('/Sunnyside-landing-page/images/desktop/image-stand-out.jpg')]",
		"bg-[url('/Sunnyside-landing-page/images/mobile/image-graphic-design.jpg')]",
		"md:bg-[url('/Sunnyside-landing-page/images/desktop/image-graphic-design.jpg')]",
		"bg-[url('/Sunnyside-landing-page/images/mobile/image-photography.jpg')]",
		"md:bg-[url('/Sunnyside-landing-page/images/desktop/image-photography.jpg')]",
		"bg-[url('/Sunnyside-landing-page/images/mobile/image-gallery-milkbottles.jpg')]",
		"md:bg-[url('/Sunnyside-landing-page/images/desktop/image-gallery-milkbottles.jpg')]",
		"bg-[url('/Sunnyside-landing-page/images/mobile/image-gallery-orange.jpg')]",
		"md:bg-[url('/Sunnyside-landing-page/images/desktop/image-gallery-orange.jpg')]",
		"bg-[url('/Sunnyside-landing-page/images/mobile/image-gallery-cone.jpg')]",
		"md:bg-[url('/Sunnyside-landing-page/images/desktop/image-gallery-cone.jpg')]",
		"bg-[url('/Sunnyside-landing-page/images/mobile/image-gallery-sugarcubes.jpg')]",
		"md:bg-[url('/Sunnyside-landing-page/images/desktop/image-gallery-sugarcubes.jpg')]",
	],
	theme: {
		extend: {
			'colors': {
				'primary': {
					'red': '#fe7867',
					'yellow': '#fad400',
					'desaturated-cyan': '#25564b',
					'dark-blue': '#19536b',
					'cyan': '#90d4c5',
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
