// import { useGetBranchesQuery, useGetSelectBranchesQuery } from '@/store/api/app/Team/branch/branchApiSlice';
import { Controller } from 'react-hook-form';
import ReactSelectError from './ReactSelectError';
import SelectCustom from './SelectCustom';
import { useGetActiveTeacherQuery } from '@/store/api/app/teacher/teacherApiSlice';

const SelectTeacher = ({
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
	
	const { data, isLoading } = useGetActiveTeacherQuery()
	console.log("Teacher:::", data);
	if (isLoading) {
		return <div>Loading...</div>;
	}
	console.log("Teacher:::", data);
	console.log("defaultValue:::", defaultValue);

	const options = data?.data?.map((item) => ({
		value: item._id,
		label: item.teacher_name,
	}));



	const options2 = [
		{
			value: "",
			label: "All Teacher"
		},
		...(data?.data?.map((item) => ({
			value: item._id,
			label: item.teacher_name,
		})) || [])
	];


	return (
		<>
			<Controller
				name={name || 'teacher_name'}
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
						// isMulti={true}
					/>
				)}
				rules={{ required: 'teacher is required!' }}
			/>
			<ReactSelectError errorName={errors?.[name ? name : 'teacher_name']} />
		</>
	);
};

export default SelectTeacher;
