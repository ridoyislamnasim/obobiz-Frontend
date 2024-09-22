import { Controller } from 'react-hook-form';
import ReactSelectError from './ReactSelectError';
import SelectCustom from './SelectCustom';

const SelectOffDay = ({
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
            value: 'Saturday',
            label: 'Saturday',
        },
        {
            value: 'Sunday',
            label: 'Sunday',
        },
        {
            value: 'Monday',
            label: 'Monday',
        },
        {
            value: 'Tuesday',
            label: 'Tuesday',
        },
        {
            value: 'Wednesday',
            label: 'Wednesday',
        },
        {
            value: 'Thursday',
            label: 'Thursday',
        },
        {
            value: 'Friday',
            label: 'Friday',
        },
    ]

    // if (isLoading) {
    //     return <div>Loading...</div>;
    // }
console.log("defaultValue is ", defaultValue);
    return (
        <>
            <Controller
                name={name || 'Off Day'}
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
                        isMulti={true}
                    />
                )}
                // rules={{ required: 'Off Day required!' }}
            />
            <ReactSelectError errorName={errors?.[name ? name : 'Off Day']} />
        </>
    );
};

export default SelectOffDay;
