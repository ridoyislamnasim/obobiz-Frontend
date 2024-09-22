// import { useGetBranchesQuery, useGetSelectBranchesQuery } from '@/store/api/app/Team/branch/branchApiSlice';
import { Controller } from 'react-hook-form';
import ReactSelectError from './ReactSelectError';
import SelectCustom from './SelectCustom';
import { useGetActiveSlotQuery } from '@/store/api/app/settings/slot/slotApiSlice';

const SelectSlot = ({
	errors,
	control = false,
	setState,
	setItem,
	state,
	defaultValue,
	isMarked,
	isDisabled,
	all_parcel,
	name,
}) => {
	
	const { data, isLoading } = useGetActiveSlotQuery()
	console.log("Slot:::", data);
	if (isLoading) {
		return <div>Loading...</div>;
	}
	console.log("Slot:::", data);
	console.log("defaultValue:::", defaultValue);

	const options = data?.data?.map((item) => ({
		value: item._id,
		label: `${item.slot_name} (${item.start_time} - ${item.end_time})`,
	}));


	return (
		<>
			<Controller
				name={name || 'exam_date'}
				control={control}
				defaultValue={defaultValue}
				render={({ field: { onChange, onBlur, value, ref } }) => (
					<SelectCustom
						isMarked={isMarked}
						defaultValue={defaultValue}
						options={options}
						onChange={onChange}
						setState={setState}
						setItem={setItem}
						isDisabled={isDisabled}
						isLoading={isLoading}
					/>
				)}
				rules={{ required: 'Slot is required!' }}
			/>
			<ReactSelectError errorName={errors?.[name ? name : 'exam_date']} />
		</>
	);
};

export default SelectSlot;
