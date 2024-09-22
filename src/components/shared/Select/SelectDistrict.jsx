import { Controller } from 'react-hook-form';
import { useGetDistrictsQuery } from '@/store/api/app/ApplicationSetting/District/districtApiSlice';
import ReactSelectError from './ReactSelectError';
import SelectCustom from './SelectCustom';

const SelectDistrict = ({
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
	const { data, isLoading } = useGetDistrictsQuery()

	const options = data?.data?.map((item) => ({
		value: item.id,
		label: item.name,
	}));

	if (isLoading) {
		return <div>Loading...</div>;
	}

	return (
		<>
			<Controller
				name={name || 'district_id'}
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
				rules={{ required: 'District is required!' }}
			/>
			<ReactSelectError errorName={errors?.[name ? name : 'district_id']} />
		</>
	);
};

export default SelectDistrict;
