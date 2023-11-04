import Layout, { Main, Navbar } from './layout';
import { PageTitle, Subtitle } from './typography';

interface CheckEmailProps {
	resetPassword: boolean;
}

const CheckEmail = ({ resetPassword }: CheckEmailProps) => {
	return (
		<Layout>
			<Navbar backLink='/login' />
			<Main center>
				{resetPassword ? (
					<PageTitle>Reset Password Link Sent</PageTitle>
				) : (
					<PageTitle>Verification Email Sent</PageTitle>
				)}
				{resetPassword ? (
					<Subtitle>Check your email to get the reset password link</Subtitle>
				) : (
					<Subtitle>Check your email to verify your account</Subtitle>
				)}
			</Main>
		</Layout>
	);
};

export default CheckEmail;
