import { useDeleteFacultyMutation } from '@/store/api/app/settings/faculty/facultyApiSlice';
import { useDeleteSelectedTIFMutation } from '@/store/api/app/teacher/tifApiSlice';
import { useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const useSelectedDelete = () => {
	const { pathname } = useLocation();
	const pathArray = pathname.split('/');
	console.log(pathArray);

	let hook = null;

	if (pathArray.includes('faculty')) {
		hook = useDeleteFacultyMutation;
	}
	else if (pathArray.includes('tif')) {
		hook = useDeleteSelectedTIFMutation;
	}

	

	const [deleteRecord, { isLoading, isError, error, isSuccess }] = hook
		? hook()
		: [
			() => { },
			{
				isLoading: false,
				isError: false,
				error: null,
				isSuccess: false,
			},
		];

	const handleSelectedDelete = async (id) => {
		console.log("Delete id", id);
		console.log(pathArray);
		withReactContent(Swal)
			.fire({
				title: 'Are you sure?',
				text: 'You will not be able to recover this record!',
				icon: 'warning',
				showCancelButton: true,
				confirmButtonText: 'Yes, delete it!',
				cancelButtonText: 'No, cancel!',
			})
			.then(async (result) => {
				if (result.isConfirmed) {
					// Delete the record
					try {
						await deleteRecord(id);

						if (isError) {
							throw new Error(error?.message || 'Something went wrong!');
						}

						Swal.fire('Deleted!', 'Your record has been deleted.', 'success');
					} catch (error) {
						console.log(error);
						Swal.fire('Failed!', 'Failed to delete the record.', 'error');
					}
				}
			});
	};

	return {
		handleSelectedDelete,
	};
};

export default useSelectedDelete;
