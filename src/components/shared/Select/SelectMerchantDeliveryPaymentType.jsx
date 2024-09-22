
import { Controller } from 'react-hook-form';
import ReactSelectError from './ReactSelectError';
import SelectCustom from './SelectCustom';
import { useGetAreaByDistrictIdQuery } from '@/store/api/app/ApplicationSetting/Area/areaApiSlice';
import { useGetRiderByBranchIdQuery } from '@/store/api/app/Team/Rider/riderApiSlice';

const SelectMerchantDeliveryPaymentType = ({
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
    pick_up_rider
}) => {

    const options = [
        {
            value: "",
            label: "Select Delivery Payment Type"
        },
        {
            value: 1,
            label: "Delivery Payment Send Merchant"
        },
        {
            value: 2,
            label: "Merchant Accept"
        },
        {
            value: 3,
            label: "Merchant Reject"
        },
    ];


    return (
        <>
            <Controller
                name={name || 'merchant_payment_type'}
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
                rules={{ required: 'Branch is required!' }}
            />
            <ReactSelectError errorName={errors?.[name ? name : 'merchant_payment_type']} />
        </>
    );
};

export default SelectMerchantDeliveryPaymentType;
