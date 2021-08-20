import tw, { styled } from 'twin.macro';

const PageTitle = tw.h1`font-bold text-2xl`;
const CardTitle = tw.h2`font-bold text-lg`;
const SectionTitle = styled.h3`
	${tw`text-sm uppercase`}
	${props => props.gray && tw`text-gray-400`}
`;
const Subtitle = styled.span`
	${tw`text-base`}
	${({ inline }) => !inline && tw`block`}
	${(props) =>
		props.red
			? tw`text-red-500`
			: props.green
			? tw`text-green-500`
			: props.gray
			? tw`text-gray-400`
			: props.blue && tw`text-blue-500`}
`;
const Subtitle2 = tw.span`text-sm block`;

export { PageTitle, CardTitle, SectionTitle, Subtitle, Subtitle2 };
