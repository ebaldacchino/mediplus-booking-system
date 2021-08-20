import { BiCalendarAlt } from 'react-icons/bi';
import Calendar from './calendar';
import { isAfter, addMonths, format, addDays } from 'date-fns';
import { ListContainer, ListItem, ListItemButton } from '../list-group';

const Dates = (props) => {
	const { toggleCalendar, viewCalendar, date, setDate, today } = props;
	const checkIsDisabled = (n) => isAfter(addDays(date, n), addMonths(today, 3));
	const handleClick = (n) => setDate(addDays(date, n));
	return (
		<ListContainer>
			<ListItem>
				<ListItemButton blue>{format(date, 'd MMM')}</ListItemButton>
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
