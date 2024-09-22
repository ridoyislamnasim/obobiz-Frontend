import { Controller } from 'react-hook-form';
import { useGetDistrictsQuery } from '@/store/api/app/ApplicationSetting/District/districtApiSlice';
import ReactSelectError from './ReactSelectError';
import SelectCustom from './SelectCustom';
import { useGetMerchantsByBranchIdDropdownQuery, useGetMerchantsByBranchIdQuery, useGetMerchantsQuery } from '@/store/api/app/Team/Merchant/merchantApiSLice';
import { useSelector } from 'react-redux';

const SelectMerchantByBranchId = ({
	errors,
	control,
	setState,
	setItem,
	state,
	defaultValue,
	isMarked,
	isDisabled,
	name,
	branchId,
	required,
}) => {

	const { isAuth, auth } = useSelector((state) => state.auth);

	const { data, isLoading } = useGetMerchantsByBranchIdDropdownQuery(auth?.user?.user_info?.branch_id)
	// console.log('merchant:;', data)

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
				rules={{ required: required === false ? false : 'Merchant is required!' }}
			/>
			<ReactSelectError errorName={errors?.[name ? name : 'merchant_id']} />
		</>
	);
};

export default SelectMerchantByBranchId;
