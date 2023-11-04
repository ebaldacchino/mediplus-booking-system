const now = Date.now();
const oneDay = 24 * 60 * 60 * 1000;
const possibleTimes = [
	'08:00',
	'09:00',
	'10:00',
	'11:00',
	'12:00',
	'13:00',
	'14:00',
	'15:00',
	'16:00',
	'17:00',
];
const makeSlots = () => {
	let slots: Date[] = [];
	for (let i = 0; i < 90; i++) {
		if (Math.random() < 0.7) {
			possibleTimes.forEach((time) => {
				if (Math.random() < 0.5) {
					const dateStr = new Date(now + oneDay * i).toDateString();
					slots.push(new Date(`${dateStr} ${time}`));
				}
			});
		}
	}
	return slots;
};

interface IDoctor {
	id: number;
	name: string;
	title: string;
	availability: string;
	distance: string;
	rating: number;
	address: string;
	phone: string;
	price: string;
	slots?: string;
}

const doctors: IDoctor[] = [
	{
		id: 0,
		name: 'Dr. John Doe',
		title: 'MBBS, Child specialist | Allopathy',
		availability: '10AM - 2PM',
		distance: '2.3km away',
		rating: 4,
		address: '34 Goodwill Rd, St Kilda, Melbourne, VIC',
		phone: '0454345432',
		price: '$40',
	},
	{
		id: 1,
		name: 'Dr. Smith Parker',
		title: 'BAMS',
		availability: '10AM - 12PM',
		distance: '0.3km away',
		rating: 4,
		address: '69 Langham Drive, Richmond, Melbourne, VIC',
		phone: '0494494203',
		price: '$60',
	},
	{
		id: 2,
		name: 'Dr. Tony Biden',
		title: 'Dentist',
		availability: '11AM - 1PM',
		distance: '3.3km away',
		rating: 3.5,
		address: '1 Melbourne Rd, Collingwood, Melbourne, VIC',
		phone: '0412345666',
		price: '$20',
	},
	{
		id: 3,
		name: 'Dr. Arnold Schwarzenegger',
		title: 'MBBS, Child specialist | Allopathy',
		availability: '11AM - 1PM',
		distance: '2.3km away',
		rating: 4,
		address: '24 Melbourne Rd, Collingwood, Melbourne, VIC',
		phone: '0412344499',
		price: '$30',
	},
];

doctors.forEach((doctor) => {
	doctor.slots = JSON.stringify(makeSlots());
});

export default doctors;
