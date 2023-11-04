import Card from '../components/cards/patient';
import data from '../constants/doctors';
import SymptomSection from '../components/home/symptoms';
import Layout, { Footer, Header, Main, Navbar } from '../components/layout';
import { SectionTitle, Subtitle } from '../components/typography';
import { useEffect } from 'react';
import { getLoginSession } from '../lib/auth';
import { GetServerSideProps } from 'next';

// export const getStaticProps = async () => {
// 	return { props: { doctors: data } };
// };

export const getServerSideProps: GetServerSideProps = async (context) => {
	try {
		const session = await getLoginSession(context.req);
		if (!session) throw Error('Invalid token');
		// const user = await findUser(session.email);

		// if (!user) throw Error('User not found');
		// if (session && user) {
		// 	res.status(200).json({ ...user, password: null });
		// }
	} catch (error) {
		console.error(error.message);
		// res.status(500).end('Authentication token is invalid, please log in');
	}
	return { props: { doctors: data } };
};

const Home = ({ doctors }) => {
	useEffect(() => {
		async function fetchData() {
			const url = '/api/auth/user';
			const res = await fetch(url);
			const data = await res.json();

			console.log(res);
			console.log(data);
		}

		fetchData();
	}, []);

	return (
		<Layout>
			<Navbar location search />
			<Header>
				<SymptomSection />
			</Header>
			<Main>
				<SectionTitle gray>Doctors near you</SectionTitle>
				{doctors.map((doctor) => (
					<Card link key={doctor.id} {...doctor}>
						{/* <Subtitle>12 Years Experience</Subtitle> */}
						<Subtitle>{doctor.distance}</Subtitle>
						<Subtitle>{doctor.price}</Subtitle>
					</Card>
				))}
			</Main>
			<Footer path={'/'} />
		</Layout>
	);
};

export default Home;

// Header: location, search
// List of ongoing appointments
// Grid of common symptoms
// List of doctors available
// Each appointment card contains:
// 		date + time, docs name, token no.
// Each common symptom card contains:
// 		icon, symptom name
// Each doc's card contains:
// 		name, img, rating, dist, type of medicine practiced, price
