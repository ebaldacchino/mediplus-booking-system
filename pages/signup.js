import Router from 'next/router';
import { useState } from 'react';
import AuthForm from '../components/forms/auth-form';
import { validateSignup } from '../lib/form-validation';

const Signup = () => {
	const [givenName, setGivenName] = useState('');
	const [familyName, setFamilyName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errors, setErrors] = useState({});
	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const body = { familyName, givenName, email, password };
			const formErrors = await validateSignup(body);
			if (formErrors) return setErrors(formErrors);

			const res = await fetch('/api/auth/signup', {
				method: 'POST',
				body: JSON.stringify(body),
				headers: {
					'Content-Type': 'application/json',
				},
			});
			const data = await res.json();
			if (res.ok) {
				setErrors({});
				Router.push('/history');
			} else {
				setErrors(data);
			}
		} catch (err) {
			console.log("Error : Check the catch block")
		}
	};
	return (
		<AuthForm
			{...{
				errors,
				handleSubmit,
				password,
				setPassword,
				email,
				setEmail,
				givenName,
				setGivenName,
				familyName,
				setFamilyName,
			}}
		/>
	);
};

export default Signup;
