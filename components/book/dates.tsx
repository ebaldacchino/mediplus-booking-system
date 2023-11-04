import { BiCalendarAlt } from 'react-icons/bi';
import Calendar from './calendar';
import { isAfter, addMonths, format, addDays } from 'date-fns';
import { ListContainer, ListItem, ListItemButton } from '../list-group';
import { useRef } from 'react';

interface DatesProps {
	toggleCalendar: () => void;
	viewCalendar: boolean;
	date: Date;
	setDate: (newDate: Date) => void;
	today: Date | number;
}

const Dates = (props: DatesProps) => {
	const buttonEl = useRef<HTMLButtonElement>(null);
	const { toggleCalendar, viewCalendar, date, setDate, today } = props;
	const checkIsDisabled = (n: number) => isAfter(addDays(date, n), addMonths(today, 3));
	const handleClick = (n: number) => {
		setDate(addDays(date, n));
		buttonEl.current?.focus();
	};
	return (
		<ListContainer>
			<ListItem>
				<ListItemButton blue ref={buttonEl}>
					{format(date, 'd MMM')}
				</ListItemButton>
			</ListItem>
			<ListItem>
				<ListItemButton
					onClick={() => handleClick(1)}
					disabled={checkIsDisabled(1)}>
					{format(addDays(date, 1), 'd MMM')}
				</ListItemButton>
			</ListItem>
			<ListItem>
				<ListItemButton
					onClick={() => handleClick(2)}
					disabled={checkIsDisabled(2)}>
					{format(addDays(date, 2), 'd MMM')}
				</ListItemButton>
			</ListItem>
			<ListItem>
				<ListItemButton icon onClick={toggleCalendar}>
					<BiCalendarAlt />
				</ListItemButton>
			</ListItem>
			{viewCalendar && <Calendar {...props} />}
		</ListContainer>
	);
};

export default Dates;
