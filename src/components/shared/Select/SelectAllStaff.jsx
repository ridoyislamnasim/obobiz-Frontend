import { Controller } from 'react-hook-form';
import ReactSelectError from './ReactSelectError';
import SelectCustom from './SelectCustom';
// import { useGetStaffByBranchIdQuery, useGetStaffByIdQuery, useGetStaffQuery } from '@/store/api/app/accountsPanel/staff/staffApiSlice';

const SelectAllStaff = ({
    errors,
    control,
    setState,
    setItem,
    state,
    defaultValue,
    isMarked,
    isDisabled,
    name,
    branchId
}) => {
    const { data, isLoading } = useGetStaffQuery()

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
                name={name || 'staff_id'}
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
                rules={{ required: 'Staff is required!' }}
            />
            <ReactSelectError errorName={errors?.[name ? name : 'staff_id']} />
        </>
    );
};

export default SelectAllStaff;
