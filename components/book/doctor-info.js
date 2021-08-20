import tw from 'twin.macro';
import Modal from '../modal';
import Card from '../cards/patient';
import { Subtitle } from '../typography';
import Link from 'next/link';
import { LinkButton } from '../button';
const InfoContainer = tw.div`flex flex-col`;
const Title = tw.span`text-gray-400 uppercase`;
const Description = tw.span`pb-4 capitalize`;
const DoctorInfo = ({ handleClick, rating, title, name, address, price }) => {
	return (
		<Modal toggleModal={handleClick} frame end>
			<Card {...{ rating, title, name, address }}>
				<Subtitle>{price}</Subtitle>
			</Card>
			<InfoContainer>
				<Title>qualification</Title>
				<Description>{title}</Description>
			</InfoContainer>
			<InfoContainer>
				<Title>address</Title>
				<Description>{address}</Description>
			</InfoContainer>
			<div tw='flex justify-end'>
				<Link href='/' passHref>
					<LinkButton textOnly>Get Directions</LinkButton>
				</Link>
			</div>
		</Modal>
	);
};

export default DoctorInfo;
