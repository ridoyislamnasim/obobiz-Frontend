import { useGetCompleteDeliveryMerchantListQuery } from '@/store/api/app/Team/Merchant/merchantApiSLice';
import { Controller } from 'react-hook-form';
import ReactSelectError from './ReactSelectError';
import SelectCustom from './SelectCustom';

const SelectCompleteDeliveryPaymentMerchantList = ({
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
	const { data, isLoading } = useGetCompleteDeliveryMerchantListQuery()
	console.log('hello Merchant:;', data)

	const options = data?.data?.map((item) => ({
		value: item.id,
		label: item.company_name,
	}));

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
						options={options}
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

export default SelectCompleteDeliveryPaymentMerchantList;
