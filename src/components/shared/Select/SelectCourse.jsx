// import { useGetBranchesQuery, useGetSelectBranchesQuery } from '@/store/api/app/Team/branch/branchApiSlice';
import { Controller } from 'react-hook-form';
import ReactSelectError from './ReactSelectError';
import SelectCustom from './SelectCustom';
import { useGetActiveCourseQuery } from '@/store/api/app/settings/course/courseApiSlice';

const SelectCourse = ({
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
	
	const { data, isLoading } = useGetActiveCourseQuery()
	console.log("Course:::", data);
	if (isLoading) {
		return <div>Loading...</div>;
	}
	console.log("Course:::", data);
	console.log("defaultValue:::", defaultValue);

	const options = data?.data?.map((item) => ({
		value: item._id,
		label: item.course_name,
	}));



	const options2 = [
		{
			value: "",
			label: "All Course"
		},
		...(data?.data?.map((item) => ({
			value: item._id,
			label: item.course_name,
		})) || [])
	];


	return (
		<>
			<Controller
				name={name || 'course_name'}
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
				rules={{ required: 'course is required!' }}
			/>
			<ReactSelectError errorName={errors?.[name ? name : 'course_name']} />
		</>
	);
};

export default SelectCourse;
