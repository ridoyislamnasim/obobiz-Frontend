// import { useGetBranchesQuery, useGetSelectBranchesQuery } from '@/store/api/app/Team/branch/branchApiSlice';
import { Controller } from 'react-hook-form';
import ReactSelectError from './ReactSelectError';
import SelectCustom from './SelectCustom';
import { useGetActiveExamDateQuery } from '@/store/api/app/settings/examSlot/examSlotApiSlice';

const SelectExamDate = ({
	errors,
	control,
	setState,
	setItem,
	state,
	defaultValue,
	isMarked,
	isDisabled,
	all_parcel,
	name,
}) => {
	
	const { data, isLoading } = useGetActiveExamDateQuery()
	console.log("ExamDate:::", data);
	if (isLoading) {
		return <div>Loading...</div>;
	}
	console.log("ExamDate:::", data);
	console.log("defaultValue:::", defaultValue);
	const formatDate = (isoString) => {
		const date = new Date(isoString);
		const year = date.getFullYear();
		const month = (date.getMonth() + 1).toString().padStart(2, '0');
		const day = date.getDate().toString().padStart(2, '0');
		return `${year}-${month}-${day}`;
	};

	const options = data?.data?.map((item) => ({
		value: item._id,
		label: formatDate(item.exam_date),
	}));



	const options2 = [
		{
			value: "",
			label: "All ExamDate"
		},
		...(data?.data?.map((item) => ({
			value: item.id,
			label: item.name,
		})) || [])
	];


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
						options={all_parcel ? options2 : options}
						onChange={onChange}
						setState={setState}
						setItem={setItem}
						isDisabled={isDisabled}
						isLoading={isLoading}
					/>
				)}
				rules={{ required: 'ExamDate is required!' }}
			/>
			<ReactSelectError errorName={errors?.[name ? name : 'exam_date']} />
		</>
	);
};

export default SelectExamDate;
