import tw, { styled } from 'twin.macro';
import { unstyledButton } from './button';

interface ListContainerProps {
	noBorder?: boolean;
	column?: boolean;
}

const ListContainer = styled.ul<ListContainerProps>`
	${tw`flex`}
	${(props) =>
		props.noBorder
			? tw`divide-none`
			: tw`divide-gray-200 border-t border-b border-gray-200`}
	${({ column }) => (column ? tw`divide-y` : tw`divide-x`)}
`;
const ListItem = tw.li`flex flex-1`;

interface ListItemButtonProps {
	icon?: boolean;
	blue?: boolean;
}

const ListItemButton = styled(unstyledButton)<ListItemButtonProps>`
	${tw`flex justify-center items-center flex-1 font-semibold py-3.5`}
	${({ icon }) => (icon ? tw`text-2xl` : tw`text-sm`)}
	${({ blue }) =>
		blue &&
		tw`text-blue-500 hover:text-blue-600 focus:text-blue-600 active:text-blue-700`}
		${({ disabled }) =>
		disabled
			? tw`text-gray-200 cursor-default`
			: tw`focus:bg-gray-100 hover:bg-gray-100 active:bg-gray-200 active:shadow-inner focus:shadow-inner`}
`;

export { ListContainer, ListItem, ListItemButton };
