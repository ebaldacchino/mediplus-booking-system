import tw, { styled } from 'twin.macro';
import { Subtitle } from '../typography';
import { BsArrowLeft } from 'react-icons/bs';
import { BiMap, BiPlus, BiSearch, BiSort } from 'react-icons/bi';
import Link from 'next/link';
import { unstyledButton, unstyledLink } from '../button';
import { ReactNode } from 'react';

const iconStyles = `h-full px-2.5 flex items-center hover:bg-gray-200 focus:bg-gray-200 active:bg-gray-300 focus:shadow-inner active:shadow-inner`;
const IconsButtonContainer = styled(unstyledButton)`
	${tw`${iconStyles} text-gray-400 focus:text-gray-500`}
	& svg {
		${tw`text-2xl`}
	}
`;
const IconsLinkContainer = styled(unstyledLink)<{ blue?: boolean; }>`
	${tw`${iconStyles} text-blue-500 focus:text-blue-600`}
	& svg {
		${tw`text-2xl`}
	}
`;
const NavContainer = styled.nav`
	${tw`flex items-center h-12 text-lg bg-gray-50`}
	${(props: { white?: boolean }) =>
		props.white ? tw`bg-white` : tw`bg-gray-50`}
`;
const Location = styled.div`
	${tw`px-2.5 flex mr-auto h-full items-center text-blue-500`}
	& svg {
		${tw`text-2xl mr-1`}
	}
`;

interface NavbarProps {
	location?: string;
	sort?: boolean;
	backLink?: string;
	search?: boolean;
	plus?: string;
	children?: ReactNode;
}

const Navbar = ({
	location,
	sort,
	backLink,
	search,
	plus,
	children,
}: NavbarProps) => {
	return (
		<NavContainer>
			{location && (
				<Location>
					<BiMap />
					<Subtitle>Melbourne</Subtitle>
				</Location>
			)}
			{backLink && (
				<Link href={backLink} passHref legacyBehavior>
					<IconsLinkContainer blue>
						<BsArrowLeft />
					</IconsLinkContainer>
				</Link>
			)}

			{(search || sort || plus || children) && (
				<div tw='ml-auto h-full flex'>
					{search && (
						<IconsButtonContainer>
							<BiSearch />
						</IconsButtonContainer>
					)}
					{sort && (
						<IconsButtonContainer>
							<BiSort />
						</IconsButtonContainer>
					)}
					{plus && (
						<Link href={plus} passHref legacyBehavior>
							<IconsLinkContainer blue>
								<BiPlus />
							</IconsLinkContainer>
						</Link>
					)}
					{children}
				</div>
			)}
		</NavContainer>
	);
};

export default Navbar;
