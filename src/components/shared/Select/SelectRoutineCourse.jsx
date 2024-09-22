// import { useGetBranchesQuery, useGetSelectBranchesQuery } from '@/store/api/app/Team/branch/branchApiSlice';
import { Controller } from 'react-hook-form';
import ReactSelectError from './ReactSelectError';
import SelectCustom from './SelectCustom';
import { useGetRoutineCourseQuery } from '@/store/api/app/settings/course/courseApiSlice';

const SelectRoutineCourse = ({
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
	
	const { data, isLoading } = useGetRoutineCourseQuery()
	console.log("RoutineCourse:::", data);
	if (isLoading) {
		return <div>Loading...</div>;
	}
	console.log("RoutineCourse:::", data);
	console.log("defaultValue:::", defaultValue);

	const options = data?.data?.map((item) => ({
		value: item._id,
		label: `${item.course_name} (${item.subject_total_student})`,
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
				name={name || 'course_ref'}
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
			<ReactSelectError errorName={errors?.[name ? name : 'course_ref']} />
		</>
	);
};

export default SelectRoutineCourse;
