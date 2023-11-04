import Layout, { Footer, Main, Navbar } from '../../components/layout';
import {
	CardTitle,
	SectionTitle,
	Subtitle,
	Subtitle2,
} from '../../components/typography';
import tw from 'twin.macro';
import Card from '../../components/cards';
import Link from 'next/link';
const StyledSectionTitle = tw(SectionTitle)`text-gray-500`;
const Prescriptions = () => {
	const prescriptions = [
		{
			symptoms: 'Viral Fever, Cold',
			doctor: 'Dr. K Chinnaswamy',

			date: '12th October, 2020',
			time: '10AM - 11AM',
			medicines: ['Combiflam', 'Crocin', 'Rantac'],
		},
		{
			symptoms: 'Viral Fever, Cold',
			doctor: 'Dr. K Chinnaswamy',

			date: '12th October, 2020',
			time: '10AM - 11AM',
			medicines: ['Fabiflu', 'Actilife D3'],
		},
	];
	return (
        <Layout>
			<Navbar sort search />
			<Main>
				<StyledSectionTitle>Your Prescriptions</StyledSectionTitle>
				{prescriptions.map(
					({ doctor, date, time, medicines, symptoms }, index) => {
						return (
                            (<Link key={index} href='/prescriptions/details' className='group'>

									<Card link>
										<CardTitle>{symptoms}</CardTitle>
										<Subtitle gray>{doctor}</Subtitle>
										<Subtitle tw='mr-4 inline'>{date}</Subtitle>
										<Subtitle tw='inline'>{time}</Subtitle>
										<div tw='mt-2'>
											<Subtitle2 tw='text-gray-500 leading-none'>
												Medicines
											</Subtitle2>
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
									</Card>

                            </Link>)
                        );
					}
				)}
			</Main>
			<Footer path={'/prescriptions'} />
		</Layout>
    );
};

export default Prescriptions;
