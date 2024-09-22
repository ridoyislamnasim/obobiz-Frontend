
import { Controller } from 'react-hook-form';
import ReactSelectError from './ReactSelectError';
import SelectCustom from './SelectCustom';
import { useGetRidersQuery } from '@/store/api/app/Team/Rider/riderApiSlice';

const SelectRiderAll = ({
    errors,
    control,
    setState,
    setItem,
    state,
    defaultValue,
    isMarked,
    isDisabled,
    name,
    riderId,
}) => {

    const { data, isLoading } = useGetRidersQuery(riderId)

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
                name={name || 'rider_id'}
                control={control}
                defaultValue={defaultValue}
                render={({ field: { onChange, onBlur, value, ref } }) => (
                    <SelectCustom
                        isMarked={isMarked}
                        defaultValue={defaultValue}
                        options={options2}
                        // options={options}
                        onChange={onChange}
                        setState={setState}
                        setItem={setItem}
                        isDisabled={isDisabled}
                    />
                )}
                rules={{ required: 'Rider is required!' }}
            />
            <ReactSelectError errorName={errors?.[name ? name : 'rider_id']} />
        </>
    );
};

export default SelectRiderAll;
