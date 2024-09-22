// import { useGetBranchesQuery, useGetSelectBranchesQuery } from '@/store/api/app/Team/branch/branchApiSlice';
import { Controller } from 'react-hook-form';
import ReactSelectError from './ReactSelectError';
import SelectCustom from './SelectCustom';
import { useGetActiveBatchQuery } from '@/store/api/app/settings/batch/batchApiSlice';

const SelectBatch = ({
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
	
	const { data, isLoading } = useGetActiveBatchQuery()
	console.log("Batch:::", data);
	if (isLoading) {
		return <div>Loading...</div>;
	}
	console.log("Batch:::", data);
	console.log("defaultValue:::", defaultValue);

	const options = data?.data?.map((item) => ({
		value: item._id,
		label: item.batch,
	}));



	const options2 = [
		{
			value: "",
			label: "All Batch"
		},
		...(data?.data?.map((item) => ({
			value: item._id,
			label: item.batch,
		})) || [])
	];


	return (
		<>
			<Controller
				name={name || 'batch'}
				control={control}
				defaultValue={defaultValue}
				render={({ field: { onChange, onBlur, value, ref } }) => (
					<SelectCustom
						isMarked={isMarked}
						defaultValue={defaultValue}
						options={ options}
						onChange={onChange}
						setState={setState}
						setItem={setItem}
						isDisabled={isDisabled}
						isLoading={isLoading}
					/>
				)}
				rules={{ required: 'batch is required!' }}
			/>
			<ReactSelectError errorName={errors?.[name ? name : 'batch']} />
		</>
	);
};

export default SelectBatch;
