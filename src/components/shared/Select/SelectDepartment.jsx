import { Controller } from 'react-hook-form';
import ReactSelectError from './ReactSelectError';
import SelectCustom from './SelectCustom';
import { useGetActiveDepartmentQuery } from '@/store/api/app/settings/department/departmentApiSlice';

const SelectDepartment = ({
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
	
	const { data, isLoading } = useGetActiveDepartmentQuery()
	console.log("Department:::", data);
	if (isLoading) {
		return <div>Loading...</div>;
	}
	console.log("Department:::", data);
	console.log("defaultValue:::", defaultValue);
	console.log("defaultValue:::",typeof defaultValue);
	data?.data?.map((item) => (
		console.log(typeof item._id)
	));

	const options = data?.data?.map((item) => ({
		value: item._id,
		label: item.department_name,
	}));



	const options2 = [
		{
			value: "",
			label: "All Department"
		},
		...(data?.data?.map((item) => ({
			value: item._id,
			label: item.department_name,
		})) || [])
	];
	// const isMulti = true;

	return (
		<>
			<Controller
				name={name || 'department_ref'}
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
				rules={{ required: 'Department is required!' }}
			/>
			<ReactSelectError errorName={errors?.[name ? name : 'department_ref']} />
		</>
	);
};

export default SelectDepartment;
