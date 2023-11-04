import tw from 'twin.macro';

const SpinnerContainer = tw.div`flex flex-1 justify-center items-center`;
const Spinner = tw.div`animate-spin rounded-circle h-32 w-32 border-t-2 border-b-2 border-blue-500`;
const Loader = () => {
	return (
		<SpinnerContainer>
			<Spinner />
		</SpinnerContainer>
	);
};

export default Loader;

// https://tailwind-elements.com/docs/standard/components/spinners/