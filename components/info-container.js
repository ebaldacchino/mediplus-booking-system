import { BiInfoCircle } from 'react-icons/bi';
import tw, { css } from 'twin.macro';
const Container = tw.div`flex bg-blue-100 text-blue-500 p-4 rounded mt-4 mb-6`;
const TextContainer = tw.div``;
const InfoContainer = ({ children }) => {
	return (
		<Container>
			<BiInfoCircle tw='text-2xl min-w-fit mr-2' />
			<TextContainer>{children}</TextContainer>
		</Container>
	);
};

export default InfoContainer;
