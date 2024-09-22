
import { Controller } from 'react-hook-form';
import ReactSelectError from './ReactSelectError';
import SelectCustom from './SelectCustom';
import { useGetIssueCategorysQuery } from '@/store/api/app/issueManagement/isssueCategoryApiSlice';

const SelectAllIssueCategory = ({
    errors,
    control,
    setState,
    setItem,
    state,
    defaultValue,
    isMarked,
    isDisabled,
    name,
    selectAll
}) => {

    const { data, isLoading } = useGetIssueCategorysQuery()

    const options = data?.data?.map((item) => ({
        value: item.id,
        label: item.name,
    }));

    const options2 = [
        {
            value: "",
            label: "All Category"
        },
        ...(data?.data?.map((item) => ({
            value: item.id,
            label: item.name,
        })) || [])
    ];

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Controller
                name={name || 'issue_category_id'}
                control={control}
                defaultValue={defaultValue}
                render={({ field: { onChange, onBlur, value, ref } }) => (
                    <SelectCustom
                        isMarked={isMarked}
                        defaultValue={defaultValue}
                        options={selectAll ? options2 : options}
                        // options={options}
                        onChange={onChange}
                        setState={setState}
                        setItem={setItem}
                        isDisabled={isDisabled}
                    />
                )}
                rules={{ required: 'Issue Category is required!' }}
            />
            <ReactSelectError errorName={errors?.[name ? name : 'issue_category_id']} />
        </>
    );
};

export default SelectAllIssueCategory;
