import { Controller } from 'react-hook-form';
import { useGetDistrictsQuery } from '@/store/api/app/ApplicationSetting/District/districtApiSlice';
import ReactSelectError from './ReactSelectError';
import SelectCustom from './SelectCustom';
import { useGetMerchantsQuery } from '@/store/api/app/Team/Merchant/merchantApiSLice';

const SelectMerchant = ({
	errors,
	control,
	setState,
	setItem,
	state,
	defaultValue,
	isMarked,
	isDisabled,
	name,
	all_parcel
}) => {
	const { data, isLoading } = useGetMerchantsQuery()
	// console.log('merchant:;', data)

	const options = data?.data?.map((item) => ({
		value: item.id,
		label: item.company_name,
	}));
	console.log('options:', data)

	const options2 = [
		{
			value: "",
			label: "All Merchant"
		},
		...(data?.data?.map((item) => ({
			value: item.id,
			label: item.company_name,
		})) || [])
	];

	if (isLoading) {
		return <div>Loading...</div>;
	}

	return (
		<>
			<Controller
				name={name || 'merchant_id'}
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
					/>
				)}
				rules={{ required: 'Merchant is required!' }}
			/>
			<ReactSelectError errorName={errors?.[name ? name : 'merchant_id']} />
		</>
	);
};

export default SelectMerchant;
