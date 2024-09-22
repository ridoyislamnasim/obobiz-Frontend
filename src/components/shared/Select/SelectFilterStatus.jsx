import { Controller } from 'react-hook-form';
import ReactSelectError from './ReactSelectError';
import SelectCustom from './SelectCustom';
import { useGetBranchesQuery } from '@/store/api/app/Team/branch/branchApiSlice';

const SelectStatus = ({
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

    const options = [
        {
            value: "",
            label: "All Status"
        },
        {
            value: 1,
            label: "Delivered"
        },
        {
            value: 2,
            label: "Delivery Pending"
        },
        {
            value: 3,
            label: "Cancelled"
        },
        {
            value: 4,
            label: "Paid"
        },
        {
            value: 5,
            label: "Payment Pending"
        },
        {
            value: 6,
            label: "Returned"
        },
        {
            value: 7,
            label: "Pickup Request"
        },
        {
            value: 8,
            label: "Branch Transfer"
        },
        {
            value: 9,
            label: "At Delivery Hub"
        },
        {
            value: 10,
            label: "Pickup Complete"
        },
        {
            value: 11,
            label: "Rider Delivered"
        },
        {
            value: 12,
            label: "Rescheduled"
        },
    ]



    return (
        <>
            <Controller
                name={name || 'status_id'}
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
                rules={{ required: 'Status is required!' }}
            />
            <ReactSelectError errorName={errors?.[name ? name : 'status_id']} />
        </>
    );
};

export default SelectStatus;
