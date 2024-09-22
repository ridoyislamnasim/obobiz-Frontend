import { Controller } from 'react-hook-form';
import SelectCustom from './SelectCustom';
import ReactSelectError from './ReactSelectError';

const SelectReceivedBranchTransferStatus = ({ name,  errors, control, setState, defaultValue }) => {
    const options = [
        {
            value: 3,
            label: 'Transfer Received ',
        },
        {
            value: 4,
            label: 'Transfer Reject',
        },
    ];

    return (
        <>
            <Controller
                name={name || 'delivery_branch_transfer_status'}
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
            <ReactSelectError errorName={errors?.[name ? name : 'delivery_branch_transfer_status']} />
        </>
    );
};

export default SelectReceivedBranchTransferStatus;
