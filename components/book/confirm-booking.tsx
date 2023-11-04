import { useState } from 'react';
import { Button, LinkButton } from '../button';
import { ButtonContainer } from '../cards/styles';
import Modal from '../modal';
import { CardTitle, Subtitle, Subtitle2 } from '../typography';
import { Input } from '../forms';
import InfoContainer from '../info-container';
import Link from 'next/link';
import { format } from 'date-fns';
import { ordinal } from '../../lib/dates';

const FormSection = ({
	symptoms,
	setSymptoms,
	closeModal,
	setConfirmSection,
}) => (
	<>
		<CardTitle tw='font-normal'>Any symptoms you want to add</CardTitle>
		<Input
			value={symptoms}
			setValue={setSymptoms}
			type={'text'}
			placeHolder={'E.g. Fever, Cold'}
			name={'symptoms'}
		/>
		<ButtonContainer>
			<Button secondary onClick={closeModal}>
				Skip
			</Button>
			<Button onClick={() => setConfirmSection(true)}>Continue</Button>
		</ButtonContainer>
	</>
);
const ConfirmSection = ({ confirmBooking, closeModal }) => {
	const [dd, mm, yy, time] = format(confirmBooking, 'dd MMMM yyy hh:mma').split(
		' '
	);
	const url = `/confirmation?id=${0}&date=${confirmBooking.toISOString()}`;
	return <>
        <CardTitle tw='font-normal mb-4'>
            Are you sure you want to confirm booking?
        </CardTitle>
        <Subtitle2 tw='text-gray-500'>Selected date & time:</Subtitle2>
        <Subtitle tw='font-bold'>
            {ordinal(dd)} {mm}, {yy} {time}
        </Subtitle>
        <InfoContainer>Only two cancellations allowed</InfoContainer>
        <ButtonContainer>
            <Button secondary onClick={closeModal}>
                Edit date & time
            </Button>
            <Link passHref href={url} legacyBehavior>
                <LinkButton>Confirm booking</LinkButton>
            </Link>
        </ButtonContainer>
    </>;
};
const ConfirmBooking = ({ formatTime, setConfirmBooking, confirmBooking }) => {
	const [symptoms, setSymptoms] = useState('');
	const [confirmSection, setConfirmSection] = useState(false);
	const closeModal = () => setConfirmBooking(false);
	return (
		<Modal toggleModal={closeModal} frame>
			{confirmSection ? (
				<ConfirmSection {...{ confirmBooking, formatTime, closeModal }} />
			) : (
				<FormSection
					{...{ symptoms, setSymptoms, closeModal, setConfirmSection }}
				/>
			)}
		</Modal>
	);
};

export default ConfirmBooking;
