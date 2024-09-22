import { Controller } from 'react-hook-form';
import ReactSelectError from './ReactSelectError';
import SelectCustom from './SelectCustom';

const SelectRoomType = ({
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
            value: 'Simple Room',
            label: 'Simple Room',
        },
        {
            value: 'Big Room',
            label: 'Big Room',
        },
        {
            value: 'Lab Room',
            label: 'Lab Room',
        },
    ]

    // if (isLoading) {
    //     return <div>Loading...</div>;
    // }

    return (
        <>
            <Controller
                name={name || 'RoomType'}
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
                rules={{ required: 'RoomType is required!' }}
            />
            <ReactSelectError errorName={errors?.[name ? name : 'RoomType']} />
        </>
    );
};

export default SelectRoomType;
