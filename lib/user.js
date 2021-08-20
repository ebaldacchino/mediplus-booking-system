import User from '../models/user';
import bcrypt from 'bcryptjs';

const genPassword = (password) => {
	const salt = bcrypt.genSaltSync(10);
	return bcrypt.hashSync(password, salt);
};

const validatePassword = (password, hashedPassword) => {
	return bcrypt.compareSync(password, hashedPassword);
};

const createUser = async (body) => {
	const password = genPassword(body.password);
	return await User.create({
		...body,
		password,
	});
};

const findUser = (email) => User.findOne({ email });

export { createUser, findUser, genPassword, validatePassword };
