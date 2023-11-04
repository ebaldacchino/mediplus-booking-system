import { useState } from 'react';
import Layout, { Main } from '../layout';
import { Input } from './';
import tw from 'twin.macro';
import { Button, LinkButton } from '../button';
const Form = tw.form`flex flex-col w-96 max-w-full`;
const AuthForm = (props) => {
	const {
		email,
		setEmail,
		password,
		setPassword,
		givenName,
		setGivenName,
		familyName,
		setFamilyName,
		handleSubmit,
		errors,
	} = props;
	const [showPassword, setShowPassword] = useState(false);
	return (
		<Layout>
			<Main center>
				<Form onSubmit={handleSubmit} noValidate>
					{setGivenName && (
						<Input
							transparent
							placeHolder='First Name'
							value={givenName}
							setValue={setGivenName}
							name='givenName'
							error={errors.givenName}
						/>
					)}
					{setFamilyName && (
						<Input
							transparent
							placeHolder='Last Name'
							value={familyName}
							setValue={setFamilyName}
							name='familyName'
							error={errors.familyName}
						/>
					)}
					<Input
						transparent
						placeHolder='Email'
						value={email}
						setValue={setEmail}
						name='email'
						type='email'
						error={errors.email}
					/>
					<Input
						transparent
						placeHolder='Password'
						value={password}
						setValue={setPassword}
						name='password'
						type={showPassword ? 'text' : 'password'}
						handleShowPassword={() => setShowPassword(!showPassword)}
						error={errors.password}
					/>
					<div tw='flex flex-col row-gap-2'>
						<Button>{setGivenName ? 'Sign Up' : 'Log In'}</Button>
						{setGivenName ? (
							<LinkButton tw='w-full' secondary href='/login'>
								Switch to Log In
							</LinkButton>
						) : (
							<LinkButton tw='w-full' secondary href='/signup'>
								Switch to Sign Up
							</LinkButton>
						)}
					</div>
				</Form>
			</Main>
		</Layout>
	);
};

export default AuthForm;
