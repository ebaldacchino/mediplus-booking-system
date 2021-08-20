import { Strategy } from 'passport-local';
import { findUser, validatePassword } from './user';

const options = {
	usernameField: 'email',
};

const callback = async (email, password, done) => {
	try {
		const user = await findUser(email);
		if (!user) throw Error(JSON.stringify({ email: 'Email is incorrect' }));
		const correctPassword = validatePassword(password, user.password);
		if (!correctPassword)
			throw Error(JSON.stringify({ password: 'Password is incorrect' }));
		return done(null, user);
	} catch (err) {
		return done(err);
	}
};

const LocalStrategy = new Strategy(options, callback);

export default LocalStrategy;
