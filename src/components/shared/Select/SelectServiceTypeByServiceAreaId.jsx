import { Controller } from 'react-hook-form';
import ReactSelectError from './ReactSelectError';
import SelectCustom from './SelectCustom';
import { useGetServiceTypeByServiceAreaIdQuery, useGetServiceTypesQuery } from '@/store/api/app/ApplicationSetting/ServiceTypeApiSlice';

const SelectServiceTypeByServiceAreaId = ({
	errors,
	control,
	setState,
	setItem,
	state,
	defaultValue,
	isMarked,
	isDisabled,
	name,
    serviceAreaId,
}) => {
	const { data, isLoading } = useGetServiceTypeByServiceAreaIdQuery(serviceAreaId)
	const options = data?.data?.map((item) => ({
		value: item.id,
		label: item.title,
	}));

	if (isLoading) {
		return <div>Loading...</div>;
	}

	return (
		<>
			<Controller
				name={name || 'service_type_id'}
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
				// rules={{ required: 'Service Type is required!' }}
			/>
			<ReactSelectError errorName={errors?.[name ? name : 'service_type_id']} />
		</>
	);
};

export default SelectServiceTypeByServiceAreaId;
