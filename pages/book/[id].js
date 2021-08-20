import Book from '../../components/book';
import data from '../../constants/doctors';
import Layout, { Header, Main, Navbar } from '../../components/layout';
import Dates from '../../components/book/dates';
import Card from '../../components/cards/patient';
import useBooking from '../../components/book/useBooking';
import DoctorInfo from '../../components/book/doctor-info';
import ConfirmBooking from '../../components/book/confirm-booking';
import {
	Button,
	ButtonContainer,
	Subtitle,
} from '../../components/cards/styles';
import Link from 'next/link';
import { LinkButton } from '../../components/button';

export const getServerSideProps = async ({ params: { id } }) => {
	if (!data[id]) return { notFound: true };
	return { props: { ...data[id] } };
};

const BookingPage = (props) => {
	const data = useBooking(props);
	const {
		calendar,
		confirmBooking,
		handleViewMore,
		setConfirmBooking,
		viewMore,
	} = data;
	return (
		<Layout title={props.name}>
			<Navbar backLink={'/'} />
			<Header>
				<Card {...props}>
					<Subtitle>{props.price}</Subtitle>
					<ButtonContainer>
						<Button secondary onClick={handleViewMore}>
							View More
						</Button>
						<Link href={`tel:${props.phone}`} passHref>
							<LinkButton>Call Now</LinkButton>
						</Link>
					</ButtonContainer>
				</Card>
			</Header>
			<Dates {...calendar} />
			<Main>{<Book {...props} {...data} />}</Main>
			{viewMore && <DoctorInfo {...props} handleClick={handleViewMore} />}
			{confirmBooking && (
				<ConfirmBooking {...{ confirmBooking, setConfirmBooking }} />
			)}
		</Layout>
	);
};

export default BookingPage;
// Header: back button
// Doctor's info: img, name, call now (CTA), view more (CTA)
// slots: date selection, slot card
// each slot card contains: time, book now (CTA)
// docs info contains: name, img, experience(in yrs), quals, address
