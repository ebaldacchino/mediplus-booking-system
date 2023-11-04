import tw from 'twin.macro';
import { BiX } from 'react-icons/bi';
const ChipContainer = tw.div`flex items-center m-0 px-2.5 py-1.5  bg-blue-100 rounded-full w-fit`;
const Text = tw.span`pr-8 m-0`;
const IconContainer = tw.button`rounded-circle text-sm flex items-center justify-center h-5 w-5 bg-blue-500 text-blue-100`;

interface ChipProps {
	children: string;
	onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
const Chip = ({ children, onClick }: ChipProps) => {
	return (
		<ChipContainer>
			<Text>{children}</Text>
			<IconContainer onClick={onClick}>
				<BiX />
			</IconContainer>
		</ChipContainer>
	);
};

export default Chip;
