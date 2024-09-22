import { useGetRiderByBranchIdQuery } from '@/store/api/app/Team/Rider/riderApiSlice';
import { Controller } from 'react-hook-form';
import ReactSelectError from './ReactSelectError';
import SelectCustom from './SelectCustom';

const SelectRider = ({
	errors,
	control,
	setState,
	setItem,
	state,
	defaultValue,
	isMarked,
	isDisabled,
	name,
	branchId,
	pick_up_rider,
}) => {
	const { data, isLoading } = useGetRiderByBranchIdQuery(branchId);

	const options = data?.data?.map((item) => ({
		value: item.id,
		label: item.name,
	}));

	const options2 = [
		{
			value: '',
			label: 'All Rider',
		},
		...(data?.data?.map((item) => ({
			value: item.id,
			label: item.name,
		})) || []),
	];

	// if (isLoading) {
	// 	return <div>Loading...</div>;
	// }

	return (
		<>
			<Controller
				name={name || 'rider_id'}
				control={control}
				defaultValue={defaultValue}
				render={({ field: { onChange, onBlur, value, ref } }) => (
					<SelectCustom
						isMarked={isMarked}
						defaultValue={defaultValue}
						options={pick_up_rider ? options2 : options}
						onChange={onChange}
						setState={setState}
						isLoading={isLoading}
						setItem={setItem}
						isDisabled={isDisabled}
					/>
				)}
				rules={{ required: 'Rider is required!' }}
			/>
			<ReactSelectError errorName={errors?.[name ? name : 'rider_id']} />
		</>
	);
};

export default SelectRider;
