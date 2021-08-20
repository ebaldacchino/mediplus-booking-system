import Image from 'next/image';
import Img from '../../../icons/runny-nose.svg';
import { CardTitle, Subtitle } from '../../typography';
import {
	FlexContainer,
	ImageContainer,
	InfoContainer,
	Rating,
} from '../styles';
import Card, { LinkCard } from '..';
const InnerCard = (props) => {
	const { rating, name, title, children } = props;
	return (
		<FlexContainer>
			<ImageContainer>
				<Image src={Img} />
				<Rating>{rating}/5</Rating>
			</ImageContainer>
			<InfoContainer>
				<CardTitle>{name}</CardTitle>
				<Subtitle gray>{title}</Subtitle>
				{children}
			</InfoContainer>
		</FlexContainer>
	);
};

const PatientCard = (props) => {
	const { children, id, link } = props;
	return link ? (
		<LinkCard href={`/book/${id}`} key={id}>
			<InnerCard {...props}>{children}</InnerCard>
		</LinkCard>
	) : (
		<Card transparent>
			<InnerCard {...props}>{children}</InnerCard>
		</Card>
	);
};

export default PatientCard;
