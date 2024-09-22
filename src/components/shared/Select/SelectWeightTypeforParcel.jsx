import { useGetWeightPackagesQuery } from '@/store/api/app/Parcel/createParcelApiSlice';
import { Controller } from 'react-hook-form';
import ReactSelectError from './ReactSelectError';
import SelectCustom from './SelectCustom';
import { useGetWeightTypesQuery } from '@/store/api/app/ApplicationSetting/weightPackagesApiSlice';

const SelectWeightTypeforParcel = ({
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

    const { data, isLoading } = useGetWeightTypesQuery()
    // console.log("data", data)

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
                name={name || 'weight_package_id'}
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
                rules={{ required: 'weight_package_id is required!' }}
            />
            <ReactSelectError errorName={errors?.[name ? name : 'weight_package_id']} />
        </>
    );
};

export default SelectWeightTypeforParcel;
