import Router from 'next/router'
import { useState } from 'react';
import AuthForm from '../components/forms/auth-form';
import { validateLogin } from '../lib/form-validation';
const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errors, setErrors] = useState({});
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const body = { email, password };
			const formErrors = await validateLogin(body);
			if (formErrors) return setErrors(formErrors);
			const res = await fetch('/api/auth/login', {
				method: 'POST',
				body: JSON.stringify(body),
				headers: {
					'Content-Type': 'application/json',
				},
			});
			const data = await res.json();
			if (res.ok) {
				setEmail('');
				setPassword('');
				setErrors({});
				Router.push('/')
			} else {
				setErrors(data);
			}
		} catch (err) {}
	};
	return (
		<AuthForm
			{...{ errors, handleSubmit, password, setPassword, email, setEmail }}
		/>
	);
};

export default Login;
