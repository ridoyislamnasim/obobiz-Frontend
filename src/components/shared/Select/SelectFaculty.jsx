// import { useGetBranchesQuery, useGetSelectBranchesQuery } from '@/store/api/app/Team/branch/branchApiSlice';
import { Controller } from 'react-hook-form';
import ReactSelectError from './ReactSelectError';
import SelectCustom from './SelectCustom';
import { useGetActiveFacultyQuery } from '@/store/api/app/settings/faculty/facultyApiSlice';

const SelectFaculty = ({
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
	
	const { data, isLoading } = useGetActiveFacultyQuery()
	console.log("Faculty:::", data);
	if (isLoading) {
		return <div>Loading...</div>;
	}
	console.log("Faculty:::", data);
	console.log("defaultValue:::", defaultValue);

	const options = data?.data?.map((item) => ({
		value: item._id,
		label: item.faculty_name,
	}));



	const options2 = [
		{
			value: "",
			label: "All Faculty"
		},
		...(data?.data?.map((item) => ({
			value: item.id,
			label: item.name,
		})) || [])
	];


	return (
		<>
			<Controller
				name={name || 'faculty_ref'}
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
				rules={{ required: 'Faculty is required!' }}
			/>
			<ReactSelectError errorName={errors?.[name ? name : 'faculty_ref']} />
		</>
	);
};

export default SelectFaculty;
