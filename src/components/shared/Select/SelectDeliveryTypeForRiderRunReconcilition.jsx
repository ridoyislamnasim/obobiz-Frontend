import { Controller } from 'react-hook-form';
import ReactSelectError from './ReactSelectError';
import SelectCustom from './SelectCustom';

const SelectDeliveryTypeForRiderRunReconcilition = ({
	name,
	errors,
	control,
	setState,
	defaultValue,
	isDisabled,
}) => {
	const options = [
		{
			value: 0,
			label: 'Select Delivery Type',
		},
		{
			value: 1,
			label: 'Delivery Complete',
		},
		{
			value: 2,
			label: 'Partial Delivery',
		},
		{
			value: 3,
			label: 'Reshedule Delivery',
		},
		{
			value: 4,
			label: 'Delivery Cancel',
		},
	];

	return (
		<>
			<Controller
				name={name || 'delivery_type'}
				control={control}
				defaultValue={defaultValue}
                
				render={({ field: { onChange, onBlur, value, ref } }) => (
					<SelectCustom
						isDisabled={isDisabled}
						defaultValue={defaultValue}
						options={options}
						onChange={onChange}
						setState={setState}
					/>
				)}
				// rules={{ required: 'Select Delivery Type is required' }}
			/>
			<ReactSelectError errorName={errors?.[name ? name : 'delivery_type']} />
		</>
	);
};

export default SelectDeliveryTypeForRiderRunReconcilition;
