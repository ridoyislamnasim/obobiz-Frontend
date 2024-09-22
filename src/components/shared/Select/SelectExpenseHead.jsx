
import { Controller } from 'react-hook-form';
import ReactSelectError from './ReactSelectError';
import SelectCustom from './SelectCustom';
import { useGetExpenseHeadsQuery } from '@/store/api/app/accountsPanel/Income&expense/expenseHead/expenseHeadApiSlice';

const SelectExpenseHead = ({
    errors,
    control,
    setState,
    setItem,
    state,
    defaultValue,
    isMarked,
    isDisabled,
    name,
    expenseHeadId,
}) => {


    const { data, isLoading } = useGetExpenseHeadsQuery(expenseHeadId)

    const options = data?.data?.map((item) => ({
        value: item.id,
        label: item.name,
    }));

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Controller
                name={name || 'expense_head_id'}
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
                rules={{ required: 'Expense Head is required!' }}
            />
            <ReactSelectError errorName={errors?.[name ? name : 'expense_head_id']} />
        </>
    );
};

export default SelectExpenseHead;
