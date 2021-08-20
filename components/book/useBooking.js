import { useState, useEffect } from 'react';
import { isSameDay } from 'date-fns';
import useCalendar from './calendar/useCalendar';

const formatSlots = (slots) => {
	let formattedSlots = JSON.parse(slots).map((slot) => new Date(slot));
	return formattedSlots || [];
};

const useBooking = (props) => {
	const slots = formatSlots(props.slots);
	const [viewMore, setViewMore] = useState(false);
	const [confirmBooking, setConfirmBooking] = useState(false);
	const [daysSlots, setDaysSlots] = useState([]);

	const calendar = useCalendar();
	const { date } = calendar;

	const handleViewMore = () => setViewMore(!viewMore);

	const findDaysSlots = () =>
		slots.filter((slot) => isSameDay(slot, date)) || [];

	useEffect(() => {
		if (date) setDaysSlots(findDaysSlots());
	}, [date]);
	return {
		calendar,
		confirmBooking,
		daysSlots,
		handleViewMore,
		setConfirmBooking,
		viewMore,
	};
};

export default useBooking;
