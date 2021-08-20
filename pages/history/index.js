import Layout, { Main, Navbar } from '../../components/layout';
import {
	CardTitle,
	SectionTitle,
	Subtitle,
	Subtitle2,
} from '../../components/typography';
import tw from 'twin.macro';
import { Button } from '../../components/button';
import { LinkCard } from '../../components/cards';
const StyledSectionTitle = tw(SectionTitle)`text-gray-500`;
const Footer = tw.footer`flex px-4 pb-2`
const MedicalHistory = () => {
	const diseases = [
		{
			disease: 'Diabetes',
			duration: '10 Years',
			medicines: [
				'Combiflam',
				'Crocin',
				'Rantac',
				'A-Z',
				'Celin',
				'Fabiflu',
				'Actilife D3',
			],
		},
		{
			disease: 'Diabetes',
			duration: '10 Years',
			medicines: [
				'Combiflam',
				'Crocin',
				'Rantac',
				'A-Z',
				'Celin',
				'Fabiflu',
				'Actilife D3',
			],
		},
	];
	return (
		<Layout>
			<Navbar backLink='/profile' plus='/history/add' />
			<Main>
				<StyledSectionTitle>Your Medical History</StyledSectionTitle>
				{diseases.map(({ disease, duration, medicines }, index) => {
					return (
						<LinkCard href={`/history/add`} key={index}>
							<CardTitle>{disease}</CardTitle>
							<Subtitle tw='text-gray-500'>{duration}</Subtitle>
							<div tw='mt-2'>
								<Subtitle2 tw='text-gray-500 leading-none'>Medicines</Subtitle2>
								<Subtitle>
									{medicines.map((medicine, index) => {
										return `${
											index === medicines.length - 1
												? ' and '
												: index
												? ', '
												: ''
										}${medicine}`;
									})}
								</Subtitle>
							</div>
						</LinkCard>
					);
				})}
			</Main>
			<Footer>
				<Button tw='flex-1'>Proceed</Button>
			</Footer>
		</Layout>
	);
};

export default MedicalHistory;
