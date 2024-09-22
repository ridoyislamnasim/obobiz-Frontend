
import { Controller } from 'react-hook-form';
import SelectCustom from './SelectCustom';
import ReactSelectError from './ReactSelectError';

const SelectRiderRunReconcilitionStatus = ({ name,  errors, control, setState, defaultValue }) => {
    const options = [
        {
            value: 7,
            label: 'Run Complete',
        },
        {
            value: 5,
            label: 'Run Reject',
        },
    ];

    return (
        <>
            <Controller
                name={name || 'status'}
                control={control}
                defaultValue={defaultValue}
                render={({ field: { onChange, onBlur, value, ref } }) => (
                    <SelectCustom
                        defaultValue={defaultValue}
                        options={options}
                        onChange={onChange}
                        setState={setState}
                    />
                )}
                // rules={{ required: 'Select Status is required' }}
            />
            <ReactSelectError errorName={errors?.[name ? name : 'status']} />
        </>
    );
};

export default SelectRiderRunReconcilitionStatus;
