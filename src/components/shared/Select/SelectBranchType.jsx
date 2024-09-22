
import { Controller } from 'react-hook-form';
import SelectCustom from './SelectCustom';
import ReactSelectError from './ReactSelectError';

const SelectBranchType = ({ errors, control, setState, defaultValue }) => {
	const options = [
		{
			value: 1,
			label: 'Parent',
		},
		{
			value: 2,
			label: 'Sub Branch',
		},
	];

	return (
		<>
			<Controller
				name="type"
				control={control}
				defaultValue={defaultValue}
				render={({ field: { onChange, onBlur, value, ref } }) => (
					<SelectCustom
						defaultValue={defaultValue}
						options={options}
						onChange={onChange}
						setState={setState}
					/>
				)}
				rules={{ required: 'Branch type is required' }}
			/>
			<ReactSelectError errorName={errors?.type} />
		</>
	);
};

export default SelectBranchType;
