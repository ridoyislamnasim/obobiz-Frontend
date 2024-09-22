import { Controller } from 'react-hook-form';
import ReactSelectError from './ReactSelectError';
import SelectCustom from './SelectCustom';

const SelectTerm = ({
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
            value: 'T1',
            label: 'T1',
        },
        {
            value: 'T2',
            label: 'T2',
        },
    ]

    // if (isLoading) {
    //     return <div>Loading...</div>;
    // }

    return (
        <>
            <Controller
                name={name || 'Term'}
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
                rules={{ required: 'Term is required!' }}
            />
            <ReactSelectError errorName={errors?.[name ? name : 'Term']} />
        </>
    );
};

export default SelectTerm;
