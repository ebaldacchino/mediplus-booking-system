const { extendTheme } = require('./tailwind.custom-styles');
module.exports = {
	mode: 'jit',
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: extendTheme,
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
