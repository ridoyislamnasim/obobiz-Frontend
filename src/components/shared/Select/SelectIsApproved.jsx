import { Controller } from 'react-hook-form';
import ReactSelectError from './ReactSelectError';
import SelectCustom from './SelectCustom';

const SelectIsApproved = ({
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
 defaultValue = String(defaultValue);
    const options = [
        {
            value: 'true',
            label: 'Approved',
        },
        {
            value: 'false',
            label: 'No Approved',
        },
    ]

    // if (isLoading) {
    //     return <div>Loading...</div>;
    // }

    return (
        <>
            <Controller
                name={name || 'Profile Approved'}
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
                rules={{ required: 'Profile Approved fild required!' }}
            />
            <ReactSelectError errorName={errors?.[name ? name : 'Profile Approved']} />
        </>
    );
};

export default SelectIsApproved;
