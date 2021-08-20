import Slot from './slot';
import { SectionTitle } from '../typography';
import { format } from 'date-fns';

const BookDoctor = (props) => {
	const { daysSlots, setConfirmBooking } = props;
	return (
		<>
			<SectionTitle gray>Available Times</SectionTitle>
			{daysSlots.map((slot, index) => {
				const warning = daysSlots.length < 4 && index === 0;
				return (
					<Slot
						key={index}
						time={format(slot, 'hh:mma')}
						{...{ setConfirmBooking, warning, slot }}
					/>
				);
			})}
		</>
	);
};

export default BookDoctor;
