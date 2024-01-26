/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './components/**/*.{html,js}', './src/**/*.{html,js}'],
	theme: {
		extend: {
			colors: {
				transparent: 'transparent',
				current: 'currentColor',
				white: '#ffffff',
				purple: '#3f3cbb',
				midnight: '#121063',
				metal: '#565584',
				tahiti: '#3ab7bf',
				silver: '#ecebff',
			},
		},
	},
	plugins: [],
};
