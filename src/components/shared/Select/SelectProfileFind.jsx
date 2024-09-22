import { Controller } from 'react-hook-form';
import ReactSelectError from './ReactSelectError';
import SelectCustom from './SelectCustom';

const SelectProfileFind = ({
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
    defaultValue = String(defaultValue)
    const options = [
        {
            value: 'true',
            label: 'Find Profile',
        },
        {
            value: 'false',
            label: 'No Profile',
        },
    ]
    console.log('def--0',typeof options[0].value)

   

    // if (isLoading) {
    //     return <div>Loading...</div>;
    // }

    return (
        <>
            <Controller
                name={name || 'profile_find'}
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
                rules={{ required: 'Profile fild required!' }}
            />
            <ReactSelectError errorName={errors?.[name ? name : 'profile_find']} />
        </>
    );
};

export default SelectProfileFind;
