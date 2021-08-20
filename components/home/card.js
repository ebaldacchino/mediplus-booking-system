// import Link from 'next/link';
// import tw, { styled } from 'twin.macro';

// const CardContainer = tw.div`flex py-3 mb-2 gap-4 bg-white cursor-pointer transform duration-200 active:scale-95 hover:bg-gray-100 pl-6 rounded-lg`;
// export const Rating = tw.span`text-sm text-blue-500 font-semibold text-center`;
// export const Info = tw.div` flex flex-col`;
// export const Name = tw.span`capitalize font-bold`;
// export const Job = tw.span`text-sm text-gray-500`;
// export const Image = tw.div`mt-1 w-8 h-8 bg-blue-500 rounded-full overflow-hidden object-cover`;
// export const Button = styled.a`
// 	${tw`flex items-center justify-center text-center px-3 py-1.5 my-auto border rounded cursor-pointer focus:outline-none transform duration-200 active:scale-95 select-none`}
// 	${(props) =>
// 		props.secondary
// 			? tw`text-blue-500 border-gray-200 hover:bg-gray-200`
// 			: tw`text-white bg-blue-500 hover:bg-blue-600 border-transparent`}
// `;
// export const ButtonContainer = tw.div`flex gap-2 mt-2 mb-2`;
// const Card = (props) => {
// 	const { name, title, availability, distance, rating } = props;
// 	return (
// 		<Link href={`/book/${props.id}`}>
// 			<a>
// 				<CardContainer>
// 					<Info>
// 						<Image></Image>
// 						<Rating>{rating}/5</Rating>
// 					</Info>
// 					<Info>
// 						<Name>{name}</Name>
// 						<Job>{title}</Job>
// 						<span>{availability}</span>
// 						<span>{distance}</span>
// 					</Info>
// 				</CardContainer>
// 			</a>
// 		</Link>
// 	);
// };

// export default Card;
