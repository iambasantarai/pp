/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter var', 'sans']
			}
		}
	},
	plugins: [require('@tailwindcss/forms')]
};
