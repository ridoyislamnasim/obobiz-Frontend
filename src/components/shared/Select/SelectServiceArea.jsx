import { Controller } from 'react-hook-form';
import { useGetDistrictsQuery } from '@/store/api/app/ApplicationSetting/District/districtApiSlice';
import ReactSelectError from './ReactSelectError';
import SelectCustom from './SelectCustom';
import { useGetServiceAreasQuery } from '@/store/api/app/ApplicationSetting/serviceAreaApiSlice';

const SelectServiceArea = ({
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
	const { data, isLoading } = useGetServiceAreasQuery()

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
				name={name || 'service_area_id'}
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
				rules={{ required: 'Service Area is required!' }}
			/>
			<ReactSelectError errorName={errors?.[name ? name : 'service_area_id']} />
		</>
	);
};

export default SelectServiceArea;

