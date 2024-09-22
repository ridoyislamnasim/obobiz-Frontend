import { Controller } from 'react-hook-form';
import SelectCustom from './SelectCustom';
import ReactSelectError from './ReactSelectError';

const SelectDeliveryTypeForRiderDeliveryCompleteParcelConfirm = ({ name, errors, control, setState, defaultValue }) => {
    const options = [
        {
            value: 0,
            label: 'Select Delivery Type',
        },
        {
            value: 21,
            label: 'Complete Delivery',
        },
        {
            value: 22,
            label: 'Partial Delivery',
        },
        {
            value: 23,
            label: 'Reshedule Delivery',
        },
        {
            value: 24,
            label: 'Return Delivery',
        },
    ];

    return (
        <>
            <Controller
                name={name || 'delivery_type'}
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
                // rules={{ required: 'Select Delivery Type is required' }}
            />
            <ReactSelectError errorName={errors?.[name ? name : 'delivery_type']} />
        </>
    );
};

export default SelectDeliveryTypeForRiderDeliveryCompleteParcelConfirm;
