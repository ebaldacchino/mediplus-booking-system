import { useState } from 'react';
import Layout, { Navbar, Main } from '../components/layout';
import Card from '../components/cards/patient';
import tw, { styled } from 'twin.macro';
import { Button, LinkButton } from '../components/button';
import data from '../constants/doctors';
import { Frame } from '../components/modal';
import InfoContainer from '../components/info-container';
import { Subtitle, Subtitle2 } from '../components/typography';
import Link from 'next/link';
import { Checkbox } from '../components/forms';
import { format, parseISO } from 'date-fns';

export const getServerSideProps: GetServerSideProps = async ({ query: { id, date } }) => {
	const doctor = data[id];
	// confirm booking availability in fetch request
	if (!doctor) return { notFound: true };
	return { props: { doctor, date } };
};
import { ordinal } from '../lib/dates';
import { GetServerSideProps } from 'next';

const GraySubtitle2 = tw(Subtitle2)`text-gray-400`;
const StyledFrame = tw(Frame)`min-w-full`;
const FlexContainer = tw.div`flex justify-around`;
const ColumnContainer = tw.div`flex flex-col rounded-circle`;
const TokenContainer = styled(ColumnContainer)`
	height: 4.75rem;
	width: 4.75rem;
	${tw`border-2 border-blue-500 justify-center items-center text-center`}
`;
const TokenNumber = tw.span`text-3xl font-bold leading-none`;

const Confirmation = ({ doctor, date }) => {
	const [sendUpdates, setSendUpdates] = useState(false);
	const [dd, mm, yy, time] = format(parseISO(date), 'd MMMM yyyy hh:mma').split(
		' '
	);
	return (
        <Layout>
			<Navbar>
				<Button danger textOnly>
					Emergency
				</Button>
			</Navbar>
			<Main>
				<Card {...doctor}>
					<Button tw='mt-2' secondary>
						View More
					</Button>
				</Card>
				<StyledFrame>
					<FlexContainer>
						<ColumnContainer>
							<GraySubtitle2>Date & time</GraySubtitle2>
							<Subtitle>
								{ordinal(dd)} {mm} {yy}
							</Subtitle>
							<Subtitle>{time}</Subtitle>
						</ColumnContainer>
						<TokenContainer>
							<Subtitle tw='leading-snug'>Token</Subtitle>
							<TokenNumber>27</TokenNumber>
						</TokenContainer>
					</FlexContainer>
				</StyledFrame>
				<InfoContainer>
					Please arrive 10 minutes before your scheduled time.
				</InfoContainer>
				<StyledFrame>
					<GraySubtitle2>Address</GraySubtitle2>
					<Subtitle>{doctor.address}</Subtitle>
					<div tw='flex justify-end'>
						<Link href='/' passHref legacyBehavior>
							<LinkButton textOnly> Get Directions</LinkButton>
						</Link>
					</div>
				</StyledFrame>
				<Checkbox checked={sendUpdates} setChecked={setSendUpdates}>
					Send me updates over Whatsapp
				</Checkbox>
				<footer tw='flex gap-2 pb-4 mt-auto'>
					<Link href='/' passHref legacyBehavior>
						<LinkButton tw='flex-1' secondary>
							Cancel Appointment
						</LinkButton>
					</Link>
					<Button tw='flex-1'>Done</Button>
				</footer>
			</Main>
		</Layout>
    );
};

export default Confirmation;
