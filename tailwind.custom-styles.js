const spacing = {
	fit: 'fit-content',
	1: '0.25rem',
	2: '0.5rem',
	3: '0.75rem',
	4: '1rem',
	5: '1.25rem',
	10: '2.5rem',
	15: '3.75rem',
	20: '5rem',
	22: '5.5rem',
	24: '6rem',
	28: '7rem',
	32: '8rem',
	'1/2': '50%',
	'1/3': '33.333333%',
	'2/3': '66.666667%',
	'1/4': '25%',
	'1/2': '50%',
	'3/4': '75%',
	'1/5': '20%',
	'2/5': '40%',
	'3/5': '60%',
	'4/5': '80%',
};
const extendTheme = {
	scale: {
		99: '.99',
	},
	minWidth: spacing,
	minHeight: spacing,
	zIndex: {
		'-1': '-1',
	},
	borderRadius: {
		circle: '50%',
	},
	flex: {
		2: '2 2 0%',
	},
	width: {
		fit: 'fit-content',
	},
};

module.exports = {
	minHeight: spacing,
	minWidth: spacing,
	extendTheme
};
