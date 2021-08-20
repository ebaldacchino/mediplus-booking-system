const prop = (type, required, unique, ref) => ({
	type,
	required,
	unique,
	ref
});

const AddressSchema = {
	street: String,
	city: String,
	state: {
		type: String,
		uppercase: true,
		required: true,
		enum: ['VIC', 'NSW', 'QLD', 'TAS', 'SA', 'WA', 'ACT', 'NT'],
	},
	zip: Number,
};


export { prop, AddressSchema };
