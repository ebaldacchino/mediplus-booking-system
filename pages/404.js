import Layout, { Footer, Main, Navbar } from '../components/layout';
import { PageTitle, Subtitle2 } from '../components/typography';
const PageNotFound = () => {
	return (
		<Layout>
			<Navbar backLink={'/'} search />
			<Main center>
				<PageTitle>Page Not Found</PageTitle>
				<Subtitle2>Use the links to find your way</Subtitle2>
			</Main>
			<Footer />
		</Layout>
	);
};

export default PageNotFound;
