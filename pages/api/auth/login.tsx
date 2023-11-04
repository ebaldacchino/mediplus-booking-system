import connectDB from '../../../middleware/mongodb';
import passport from 'passport';
import nextConnect from 'next-connect';
import { validate_login } from '../../../middleware/form-validation';
import LocalStrategy from '../../../lib/passport-local';
import { setLoginSession } from '../../../lib/auth';
import { authenticate } from '../../../lib/passport';

passport.use(LocalStrategy);

const handler = nextConnect();

handler.use(passport.initialize()).post(async (req, res) => {
	try {
		const errors = await validate_login(req);
		if (errors) return res.status(404).json(errors);
		const user = await authenticate('local', req, res);
		if (!user) throw Error();

		await setLoginSession(res, user._doc);

		res.status(201).json({ msg: 'Logged in successfully' });
	} catch (err) {
		res.status(401).json(JSON.parse(err.message));
	}
});

export default connectDB(handler);
