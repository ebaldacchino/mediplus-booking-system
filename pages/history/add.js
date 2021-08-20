import Layout, { Main, Navbar, Header } from '../../components/layout';
import { Input } from '../../components/forms';
import { useState } from 'react';
import { SectionTitle, Subtitle } from '../../components/typography';
import { Button } from '../../components/button';
import {
	ListContainer,
	ListItem,
	ListItemButton,
} from '../../components/list-group';
import tw, { styled } from 'twin.macro';

const StyledSectionTitle = tw(SectionTitle)`text-gray-500`;
const MedicineListing = tw.div`flex flex-wrap col-gap-2 items-center`;
const Container = styled.div`
	${({ listing }) => listing && tw`rounded py-3`}
`;
const MedicineContainer = tw(Container)`flex-2`;
const DoseContainer = tw(Container)`flex-1 min-w-22`;
const AddMedicalHistory = () => {
	const [medicines, setMedicines] = useState({
		active: 'morning',
		morning: [],
		afternoon: [],
		evening: [],
	});
	const [disease, setDisease] = useState('');
	const [duration, setDuration] = useState('');
	const [medicine, setMedicine] = useState('');
	const [dose, setDose] = useState('');

	const addMedicine = (e) => {
		e.preventDefault();
		const { active } = medicines;
		if (dose.trim() && medicine.trim()) {
			setMedicines({
				...medicines,
				[active]: [...medicines[active], { medicine, dose }],
			});
			setMedicine('');
			setDose('');
		}
	};

	const changeMedicineTime = (e) => {
		setMedicines({
			...medicines,
			active: e.target.dataset.time,
		});
	};
	return (
		<Layout>
			<Navbar backLink='/history' />
			<Header>
				<div tw='mt-4'>
					<StyledSectionTitle>Add Disease</StyledSectionTitle>
					<Input
						transparent
						value={disease}
						setValue={setDisease}
						label='Disease Name'
						placeHolder='E.g. Diabetes'
						name='disease'
					/>
					<Input
						transparent
						value={duration}
						setValue={setDuration}
						label='Duration'
						placeHolder='E.g. 10 Years'
						name='duration'
					/>
				</div>
				<StyledSectionTitle>Medicines</StyledSectionTitle>
			</Header>
			<ListContainer>
				<ListItem>
					<ListItemButton
						blue={medicines.active === 'morning'}
						onClick={changeMedicineTime}
						data-time='morning'>
						Morning
					</ListItemButton>
				</ListItem>
				<ListItem>
					<ListItemButton
						blue={medicines.active === 'afternoon'}
						onClick={changeMedicineTime}
						data-time='afternoon'>
						Afternoon
					</ListItemButton>
				</ListItem>
				<ListItem>
					<ListItemButton
						blue={medicines.active === 'evening'}
						onClick={changeMedicineTime}
						data-time='evening'>
						Evening
					</ListItemButton>
				</ListItem>
			</ListContainer>
			<Main tw='gap-0'>
				<MedicineListing>
					<MedicineContainer>
						<Subtitle>Medicine Name</Subtitle>
					</MedicineContainer>

					<DoseContainer>
						<Subtitle>Dose</Subtitle>
					</DoseContainer>
				</MedicineListing>
				{medicines[medicines.active].map(({ medicine, dose }, index) => {
					return (
						<MedicineListing key={index} tw='my-2'>
							<MedicineContainer listing>
								<Subtitle tw='ml-2'>{medicine}</Subtitle>
							</MedicineContainer>
							<div tw='pb-1'>x</div>
							<DoseContainer listing>
								<Subtitle tw='ml-2'>{dose}</Subtitle>
							</DoseContainer>
						</MedicineListing>
					);
				})}
				<form tw='mb-auto' onSubmit={addMedicine}>
					<MedicineListing tw='flex flex-wrap col-gap-2 items-center'>
						<div tw='flex-2'>
							<Input
								transparent
								value={medicine}
								setValue={setMedicine}
								// label='Medicine Name'
								placeHolder='E.g. Crocin'
								name='medicine'
							/>
						</div>
						<div tw='pb-4'>x</div>
						<div tw='flex-1 min-w-22'>
							<Input
								transparent
								value={dose}
								setValue={setDose}
								// label='Dose'
								placeHolder='E.g. 0.2ml'
								name='dose'
							/>
						</div>
					</MedicineListing>
					<div tw='flex mb-auto justify-end'>
						<Button textOnly type='submit'>
							+ Add Medicine
						</Button>
					</div>
				</form>
				<Button>Save Disease</Button>
			</Main>
		</Layout>
	);
};

export default AddMedicalHistory;
