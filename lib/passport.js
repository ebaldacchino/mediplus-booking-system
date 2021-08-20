import passport from 'passport';

const authenticate = (method, req, res) => {
	return new Promise((resolve, reject) => {
		passport.authenticate(method, { session: false }, (error, token) => {
			if (error) {
				reject(error);
			} else {
				resolve(token);
			}
		})(req, res);
	});
};

export { authenticate };
