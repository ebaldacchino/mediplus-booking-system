import Head from 'next/head';
import tw, { styled } from 'twin.macro';
import Footer from './footer';
import Navbar from './navbar';
const PageContainer = tw.div`h-screen flex flex-col bg-gray-50`;
const Main = styled.main`
	${tw`flex flex-1 flex-col h-full min-h-fit px-4 py-2 overflow-y-auto gap-2`}
	${({ center }) => center && tw`items-center justify-center`}
`;
const Header = tw.header`px-4`;

const Layout = ({ children, title, description }) => {
	return (
		<PageContainer homePage>
			<Head>
				<title>
					{title ? `${title} | MediPlus` : 'MediPlus | Medical Booking System'}
				</title>
				<meta
					name='description'
					content={description || 'The best in medical booking systems'}
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			{children}
		</PageContainer>
	);
};

export default Layout;

export { Footer, Header, Main, Navbar };
