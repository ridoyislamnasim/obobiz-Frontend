import { Controller } from 'react-hook-form';
import ReactSelectError from './ReactSelectError';
import SelectCustom from './SelectCustom';

const SelectRole = ({
    errors,
    control,
    setState,
    setItem,
    state,
    defaultValue,
    isMarked,
    isDisabled,
    name,
    userType,
}) => {
    let options= [];
if(userType == 'super-admin'){
     options = [
        {
            value: 'super-admin',
            label: 'super admin',
        },
        {
            value: 'administrator',
            label: 'administrator',
        },
        {
            value: 'co-administrator',
            label: 'co administrator',
        },
        {
            value: 'teacher',
            label: 'teacher',
        },
    ]
}else if(userType == 'administrator'){
    options = [
        {
            value: 'administrator',
            label: 'administrator',
        },
        {
            value: 'co-administrator',
            label: 'co administrator',
        },
        {
            value: 'teacher',
            label: 'teacher',
        },
    ]
}
    
    // if (isLoading) {
    //     return <div>Loading...</div>;
    // }

    return (
        <>
            <Controller
                name={name || 'Role'}
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
                rules={{ required: 'Role is required!' }}
            />
            <ReactSelectError errorName={errors?.[name ? name : 'Role']} />
        </>
    );
};

export default SelectRole;
