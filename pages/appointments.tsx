import Layout, { Navbar, Footer, Main } from '../components/layout';

const Appointments = () => {
	return (
		<Layout>
			<Navbar />
			<Main>appointments</Main>
			<Footer path={'/appointments'} />
		</Layout>
	);
};

export default Appointments;
