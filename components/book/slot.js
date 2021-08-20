import tw from 'twin.macro';
import { Button } from '../button';
import { SectionTitle, Subtitle2 } from '../typography';
import { format } from 'date-fns';
const SlotContainer = tw.div`rounded flex justify-between bg-white px-4 min-h-20`;
const TimeContainer = tw.div`flex flex-col my-auto`;
const StyledButton = tw(Button)`my-auto`;
const Warning = tw(Subtitle2)`text-red-500`;
const Slot = ({ warning, setConfirmBooking, slot }) => {
	return (
		<SlotContainer>
			<TimeContainer>
				<SectionTitle>{format(slot, 'hh:mma')}</SectionTitle>
				{warning && <Warning>Filling Fast</Warning>}
			</TimeContainer>

			<StyledButton onClick={() => setConfirmBooking(slot)} secondary>
				Book Now
			</StyledButton>
		</SlotContainer>
	);
};

export default Slot;
