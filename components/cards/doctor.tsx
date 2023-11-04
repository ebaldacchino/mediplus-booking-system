import Image from 'next/image';
import Img from '../../icons/runny-nose.svg';
import {
	CardTitle,
	Subtitle,
	CardContainer,
	CardInnerContainer,
	ImageContainer,
	InfoContainer,
	Rating,
	ButtonContainer,
	Button,
} from './styles';
const DoctorCard = ({ rating, token, cancelled, completed }) => {
    rating = 4
	token = 999;
	completed = true;
	return (
		<CardContainer>
			<CardInnerContainer>
				<ImageContainer>
					<Image src={Img} />
					<Rating>{rating}/5</Rating>
				</ImageContainer>
				<InfoContainer>
					<CardTitle>Dr. Arnold Schwarzenegger</CardTitle>
					<Subtitle inline>Token Number: </Subtitle>
					<Subtitle inline blue>
						{token}
					</Subtitle>
					{cancelled && <Subtitle red>Cancelled</Subtitle>}
					{completed && <Subtitle green>Completed</Subtitle>}
				</InfoContainer>
			</CardInnerContainer>
			{!cancelled && !completed && (
				<ButtonContainer>
					<Button textOnly>Skip</Button>
					<Button secondary>Attend Now</Button>
				</ButtonContainer>
			)}
		</CardContainer>
	);
};

export default DoctorCard;
