
import { Controller } from 'react-hook-form';
import ReactSelectError from './ReactSelectError';
import SelectCustom from './SelectCustom';
import { useGetAreaByDistrictIdQuery } from '@/store/api/app/ApplicationSetting/Area/areaApiSlice';
import { useGetRiderByBranchIdQuery } from '@/store/api/app/Team/Rider/riderApiSlice';

const SelectDeliveryPaymentType = ({
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
            label: "Send Request"
        },
        {
            value: 2,
            label: "Request Accept"
        },
        {
            value: 3,
            label: "Request Cancel"
        },
    ];


    return (
        <>
            <Controller
                name={name || 'payment_type'}
                control={control}
                defaultValue={defaultValue}
                render={({ field: { onChange, onBlur, value, ref } }) => (
                    <SelectCustom
                        isMarked={isMarked}
                        defaultValue={defaultValue}
                        options={pick_up_rider ? options2 : options}
                        onChange={onChange}
                        setState={setState}
                        setItem={setItem}
                        isDisabled={isDisabled}
                    />
                )}
                rules={{ required: 'Branch is required!' }}
            />
            <ReactSelectError errorName={errors?.[name ? name : 'payment_type']} />
        </>
    );
};

export default SelectDeliveryPaymentType;
