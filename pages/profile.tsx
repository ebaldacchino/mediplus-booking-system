import Layout, { Navbar, Footer, Main } from '../components/layout';
import { authUserServerSideProps } from '../lib/auth';

// export const getStaticProps = async () => {
// 	return { props: { doctors: data } };
// };

export const getServerSideProps = (context) => authUserServerSideProps(context);

const Profile = ({ user }) => {
	return (
		<Layout>
			<Navbar />
			<Main>profile</Main>
			<Footer path={'/profile'} />
		</Layout>
	);
};

export default Profile;
