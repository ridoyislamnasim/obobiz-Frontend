import { Controller } from 'react-hook-form';
import ReactSelectError from './ReactSelectError';
import SelectCustom from './SelectCustom';

const SelectIssueStatus = ({
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

    // const options = data?.data?.map((item) => ({
    // 	value: item.id,
    // 	label: item.name,
    // }));
    const options = [
        {
            value: '',
            label: 'All Issues',
        },
        {
            value: 'pending',
            label: 'Pending',
        },
        {
            value: 'assigned',
            label: 'Assigned',
        },
        {
            value: 'solved',
            label: 'Solved',
        },
        {
            value: 'closed',
            label: 'Closed',
        },

    ]

    // if (isLoading) {
    //     return <div>Loading...</div>;
    // }

    return (
        <>
            <Controller
                name={name || 'issue_status'}
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
                rules={{ required: 'Service Area is required!' }}
            />
            <ReactSelectError errorName={errors?.[name ? name : 'issue_status']} />
        </>
    );
};

export default SelectIssueStatus;
