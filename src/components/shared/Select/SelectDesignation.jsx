import { Controller } from 'react-hook-form';
import { useGetDistrictsQuery } from '@/store/api/app/ApplicationSetting/District/districtApiSlice';
import ReactSelectError from './ReactSelectError';
import SelectCustom from './SelectCustom';
import { useGetActiveDesignationQuery } from '@/store/api/app/settings/designation/designationApiSlice';

const SelectDesignation = ({
	errors,
	control,
	setState,
	setItem,
	state,
	defaultValue,
	isMarked,
	isDisabled,
	name,
}) => {
	const { data, isLoading } = useGetActiveDesignationQuery()
console.log("defaultValue--------------------------------SelectDesignation-----",  defaultValue);
console.log("defaultValue-------------------------------------", typeof defaultValue);
console.log('data 12', data);
	const options = data?.data?.map((item) => ({
		value: item._id,
		label: item.designation_name,
	}));

	if (isLoading) {
		return <div>Loading...</div>;
	}

	return (
		<>
			<Controller
				name={name || 'designation_id'}
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
					/>
				)}
				rules={{ required: 'Designation is required!' }}
			/>
			<ReactSelectError errorName={errors?.[name ? name : 'designation_id']} />
		</>
	);
};

export default SelectDesignation;
