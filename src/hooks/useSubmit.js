import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const useSubmit = (id, hook, redirect) => {
	const navigate = useNavigate();

	const {
		register,
		unregister,
		control,
		formState: { errors },
		reset,
		handleSubmit,
		watch,
	} = useForm();
	console.log(`	hook`, hook)

	const [submit, { isLoading, isSuccess, isError, error }] = hook();

	const onSubmit = async (preparedData) => {
	console.log(`	preparedData`, preparedData)

		try {
			const  data  = await (id
				? submit({ id, data: preparedData })
				: submit(preparedData));
				console.log(`	data`, data)
			if (data?.error?.data?.status == 'error') {
				throw new Error(data?.error?.data?.message );
			}
			// if (data?.status !== 'success') {	
			// 	throw new Error(data?.message);
			// }
			reset();
			if (redirect !== false) {
				navigate(redirect ? redirect : -1);
			}
			toast.success(data?.data?.message);
		} catch (error) {
			console.log(error);
			toast.error(error?.message || 'Something went wrong!');
		}
	};

	return {
		register,
		unregister,
		control,
		errors,
		reset,
		handleSubmit,
		watch,
		onSubmit,
		isLoading,
	};
};

export default useSubmit;
