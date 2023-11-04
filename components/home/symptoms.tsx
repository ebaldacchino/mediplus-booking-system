import tw from 'twin.macro';
import symptoms from '../../constants/symptoms';
import Image from 'next/image';
const SymptomsContainer = tw.div`bg-blue-500 text-white py-4 px-3 mt-2 mb-1 rounded-lg`;
const Description = tw.p`ml-2 mb-3`;
const Symptoms = tw.div`flex w-full justify-between `;
const Symptom = tw.div`flex flex-col flex-1 items-center text-center text-sm`;
const ImageContainer = tw.div`bg-blue-900 w-10 h-10 rounded-full mb-1`;
const SymptomSection = () => {
	return (
		<SymptomsContainer>
			<Description>Common Symptoms</Description>
			<Symptoms>
				{symptoms
					.filter(({ url }) => Boolean(url))
					.slice(0, 4)
					.map(({ name, url }, index) => {
						return (
							<Symptom key={index}>
								<ImageContainer>
									<Image src={url} alt={name} />
								</ImageContainer>
								{name}
							</Symptom>
						);
					})}
			</Symptoms>
		</SymptomsContainer>
	);
};

export default SymptomSection;
