import { getTime } from 'date-fns';

const getDate = () => {
	const now = Date.now();
	const oneHour = 60 * 60 * 1000;
	const oneDay = 24 * oneHour;
	const days = Math.floor(Math.random() * 10) + 2;
	const time = oneHour * 3 + Math.floor(Math.random() * 8);
	return new Date(now - oneDay * days + time).toISOString();
};

const users = [
	{
		id: 0,
		email: 'test@test.com',
		password: 'qwerty',
		prescriptions: [
			{
				infection: 'Viral Fever, Cold',
                doctorId: 0,
				date: getDate(),
				medicines: [
					{
						name: 'Crocin',
						length: '2 Days',
						doses: {
							morning: 1,
							afternoon: 1,
							dinner: 1,
						},
					},
					{
						name: 'Combiflam',
						length: '2 Days',
						doses: {
							morning: 1,
							afternoon: 1,
							dinner: 1,
						},
					},
				],
			},
			{
				infection: 'Gastro',
                doctorId: 1,
				date: getDate(),
				medicines: [
					{
						name: 'Fabiflu',
						length: '2 Days',
						doses: {
							morning: 1,
							afternoon: 1,
							dinner: 1,
						},
					},
					{
						name: 'Azithromycin 500',
						length: '2 Days',
						doses: {
							morning: 1,
							afternoon: 1,
							dinner: 1,
						},
					},
				],
			},
		],
	},
];

export default users;
