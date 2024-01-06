/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./*.{html,js}', './src/*.{html,js}'],
	theme: {
		extend: {
			boxShadow: {
				l: '0px 2px 16px 0px rgba(0, 0, 0, 0.08)',
				'3xl': '0px 6px 34px 0px rgba(0, 0, 0, 0.11)',
				small: '-7px 11px 34px 0px rgba(0, 0, 0, 0.06)',
			},
			colors: {
				myBlue: '#0C58DB',
				lightBlue: '#EEF3FC',
				lightYellow: '#f6f5e5',
				lightGreen: '#f0f9f2',
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
};
