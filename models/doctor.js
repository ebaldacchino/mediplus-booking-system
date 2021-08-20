import mongoose from 'mongoose';
import { prop, AddressSchema } from './helpers';

const doctorSchema = new mongoose.Schema({
	email: prop(String, true, true),
	googleId: String,
	facebookId: String,
	password: prop(String, true),
	givenName: prop(String, true),
	familyName: prop(String, true),
	title: prop(String, true),
	address: AddressSchema,
	rating: prop(Number, true),
	phone: prop(Number, true),
	price: prop(Number, true),
    slots: [{
		type: Date,
	}]
});

const Doctor = mongoose.models.Doctor || mongoose.model('Doctor', doctorSchema);

export default Doctor;
