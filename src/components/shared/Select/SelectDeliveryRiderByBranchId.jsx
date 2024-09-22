
import { Controller } from 'react-hook-form';
import ReactSelectError from './ReactSelectError';
import SelectCustom from './SelectCustom';
import { useGetAreaByDistrictIdQuery } from '@/store/api/app/ApplicationSetting/Area/areaApiSlice';
import { useGetRiderByBranchIdQuery } from '@/store/api/app/Team/Rider/riderApiSlice';

const SelectDeliveryRiderByBranchId = ({
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

    const { data, isLoading } = useGetRiderByBranchIdQuery(branchId)

    const options = data?.data?.map((item) => ({
        value: item.id,
        label: item.name,
    }));

    const options2 = [
        {
            value: "",
            label: "All Rider"
        },
        ...(data?.data?.map((item) => ({
            value: item.id,
            label: item.name,
        })) || [])
    ];

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Controller
                name={name || 'delivery_rider_id'}
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
            <ReactSelectError errorName={errors?.[name ? name : 'delivery_rider_id']} />
        </>
    );
};

export default SelectDeliveryRiderByBranchId;
