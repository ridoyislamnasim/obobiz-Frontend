import { Controller } from 'react-hook-form';
import ReactSelectError from './ReactSelectError';
import SelectCustom from './SelectCustom';

const SelectLevel = ({
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
            value: 'L1',
            label: 'L1',
        },
        {
            value: 'L2',
            label: 'L2',
        },
        {
            value: 'L3',
            label: 'L3',
        },
        {
            value: 'L4',
            label: 'L4',
        },

    ]

    // if (isLoading) {
    //     return <div>Loading...</div>;
    // }

    return (
        <>
            <Controller
                name={name || 'Level'}
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
                rules={{ required: 'Level is required!' }}
            />
            <ReactSelectError errorName={errors?.[name ? name : 'Level']} />
        </>
    );
};

export default SelectLevel;
