import tw from 'twin.macro';
import {
	PageTitle,
	CardTitle,
	SectionTitle,
	Subtitle,
	Subtitle2,
} from '../typography';
import { Button, unstyledLink } from '../button';
const CardContainerStyles = `rounded py-4 w-full`;
const CardContainer = tw.div`${CardContainerStyles}`;
const CardLinkContainer = tw(
	unstyledLink
)`${CardContainerStyles} bg-white hover:bg-gray-100 focus:bg-gray-100 active:bg-gray-200`;
const FlexContainer = tw.div`flex`;
const ImageContainer = tw.div`w-1/5 md:w-1/6 lg:w-40 min-w-10 flex flex-col items-center mr-4`;
const InfoContainer = tw.div`w-full`;
const Rating = tw(Subtitle2)`text-blue-500 font-bold`;
const Token = tw.span`mr-6`;
const ButtonContainer = tw.div`flex flex-wrap gap-2 mt-2`;
export {
	PageTitle,
	CardTitle,
	SectionTitle,
	Subtitle,
	Subtitle2,
	CardContainer,
	FlexContainer,
	CardLinkContainer,
	ImageContainer,
	InfoContainer,
	Rating,
	Token,
	Button,
	ButtonContainer,
};
