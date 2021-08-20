import FormField from './form-fields';
import { Input as InputField } from './styles';

const Input = (props) => {
	const { name, value, type, setValue, error } = props;
	return (
		<>
			<FormField {...props}>
				<InputField
					name={name}
					value={value}
					type={type || 'text'}
					onChange={(e) => setValue(e.target.value)}
				/>
			</FormField>
		</>
	);
};

export default Input;
