import tw, { styled } from 'twin.macro';

const ModalBackground = styled.div`
	${tw`absolute top-0 bottom-0 left-0 right-0 bg-black bg-opacity-40 z-10 flex justify-center`}
	${({ end }) => (end ? tw`items-end` : tw`items-center`)}
`;
const Frame = styled.div`
	${tw`bg-white rounded p-5 w-11/12 sm:w-2/3 flex flex-col`}
	${({ row }) => !row && tw`flex-col`}
`;

const Modal = ({ children, frame, toggleModal, end, row }) => {
	const handleClosingModal = (e) => {
		const { className } = e.target;
		if (
			className &&
			typeof className === 'string' &&
			className.includes('modal-bg')
		) {
			toggleModal();
		}
	};  
	return (
		<ModalBackground
			onClick={(e) => handleClosingModal(e)}
			className='modal-bg'
			end={end && 'true'}>
			{frame ? <Frame row={row}>{children}</Frame> : children}
		</ModalBackground>
	);
};
export default Modal;
export { Frame };
