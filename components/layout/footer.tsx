import tw, { styled } from 'twin.macro';
import { BiHome, BiUserCircle, BiReceipt } from 'react-icons/bi';
import { TiThListOutline } from 'react-icons/ti';
import { unstyledLink } from '../button';
import Link from 'next/link';
import { ListContainer, ListItem } from '../list-group';

const Button = styled(unstyledLink)<{ active?: boolean }>`
	${({ active }) =>
		active ? tw`text-blue-600 focus:text-blue-700` : tw`focus:text-gray-700`}
	${tw`flex flex-col justify-center items-center flex-1 capitalize py-2.5 hover:bg-gray-100 focus:bg-gray-100 active:bg-gray-200 focus:shadow-inner`}
	& svg {
		${tw`text-2xl`}
	}
`;
const ButtonText = tw.span`text-xs font-semibold`;

interface FooterProps {
	path: string;
	abbrev?: string;
}

const Footer = ({ path, abbrev }: FooterProps) => {
	const showText = (customPath: string) =>
		path === customPath || path === abbrev;
	return (
		<footer>
			<ListContainer noBorder>
				<ListItem>
					<Link href='/' passHref legacyBehavior>
						<Button active={path === '/'}>
							<BiHome />
							{showText('/') && <ButtonText>home</ButtonText>}
						</Button>
					</Link>
				</ListItem>
				<ListItem>
					<Link href='/prescriptions' passHref legacyBehavior>
						<Button active={path === '/prescriptions'}>
							<BiReceipt />
							{showText('/prescriptions') && (
								<ButtonText>prescriptions</ButtonText>
							)}
						</Button>
					</Link>
				</ListItem>
				{!abbrev && (
					<ListItem>
						<Link href='/appointments' passHref legacyBehavior>
							<Button active={path === '/appointments'}>
								<TiThListOutline />
								{showText('/appointments') && (
									<ButtonText>appointments</ButtonText>
								)}
							</Button>
						</Link>
					</ListItem>
				)}
				<ListItem>
					<Link href='/profile' passHref legacyBehavior>
						<Button active={path === '/profile'}>
							<BiUserCircle />
							{showText('/profile') && <ButtonText>profile</ButtonText>}
						</Button>
					</Link>
				</ListItem>
			</ListContainer>
		</footer>
	);
};

export default Footer;
