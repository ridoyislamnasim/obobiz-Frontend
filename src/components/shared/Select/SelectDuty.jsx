import { Controller } from 'react-hook-form';
import ReactSelectError from './ReactSelectError';
import SelectCustom from './SelectCustom';

const SelectDuty = ({
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
            label: 'On',
        },
        {
            value: 'false',
            label: 'Off',
        },
    ]

    // if (isLoading) {
    //     return <div>Loading...</div>;
    // }

    return (
        <>
            <Controller
                name={name || 'Duty'}
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
                rules={{ required: 'Duty fild required!' }}
            />
            <ReactSelectError errorName={errors?.[name ? name : 'Duty']} />
        </>
    );
};

export default SelectDuty;
