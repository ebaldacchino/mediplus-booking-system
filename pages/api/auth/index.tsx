export default function handler(req, res) {
	const { email, password } = JSON.parse(req.body);
	console.log();
	res.status(200).json({ name: 'John Doe' });
}
