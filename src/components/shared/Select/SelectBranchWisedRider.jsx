import { Controller } from 'react-hook-form';
import ReactSelectError from './ReactSelectError';
import SelectCustom from './SelectCustom';
import { useGetRidersByBranchIdQuery, useGetRidersQuery } from '@/store/api/app/Team/Rider/riderApiSlice';
import { useSelector } from 'react-redux';

const SelectBranchWisedRider = ({
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

	const { isAuth, auth } = useSelector((state) => state.auth);

	const { data, isLoading } = useGetRidersByBranchIdQuery(auth.user.user_info.branch_id)

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
				name={name || 'rider_id'}
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
				rules={{ required: 'Rider is required!' }}
			/>
			<ReactSelectError errorName={errors?.[name ? name : 'rider_id']} />
		</>
	);
};

export default SelectBranchWisedRider;
