import Link from 'next/link';
import tw, { styled } from 'twin.macro';
import { unstyledLink as LinkContainer } from '../button';

const Card = styled.article`
	${tw`rounded p-4`}
	${props => props.transparent ? tw`bg-transparent` : tw`bg-white`}
	${({ link }) =>
		link &&
		tw`transition-colors duration-200 hover:bg-gray-100 group-focus:bg-gray-100 group-active:bg-gray-200`}
`;
 
const LinkCard = ({ href, children }) => ( 
	<Link href={href || '/'} passHref>
		<LinkContainer className='group'>
			<Card link>{children}</Card>
		</LinkContainer>
	</Link>
);

export default Card;
export { LinkCard };
