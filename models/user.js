import mongoose, { Schema } from 'mongoose';
import { prop, AddressSchema } from './helpers';
import Prescription from './prescription';

const userSchema = new Schema({
	email: prop(String, true, true),
	googleId: String,
	facebookId: String,
	password: prop(String, true),
	givenName: prop(String, true),
	familyName: prop(String, true),
	address: AddressSchema,
	prescriptions: [Prescription],
	gender: {
		type: String,
		enum: ['male', 'female'],
		required: true,
	},
});

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
