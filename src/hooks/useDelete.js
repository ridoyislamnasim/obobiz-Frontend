import { useDeleteRoutineMutation } from '@/store/api/app/routine/routineApiSlice';
import { useDeleteBatchMutation } from '@/store/api/app/settings/batch/batchApiSlice';
import { useDeleteCenterRoomMutation } from '@/store/api/app/settings/centerRoom/centerRoomApiSlice';
import { useDeleteCourseMutation } from '@/store/api/app/settings/course/courseApiSlice';
import { useDeleteDepartmentMutation } from '@/store/api/app/settings/department/departmentApiSlice';
import { useDeleteDesignationMutation } from '@/store/api/app/settings/designation/designationApiSlice';
import { useDeleteExamDateMutation } from '@/store/api/app/settings/examSlot/examSlotApiSlice';
import { useDeleteFacultyMutation } from '@/store/api/app/settings/faculty/facultyApiSlice';
import { useDeleteRoomMutation } from '@/store/api/app/settings/room/roomApiSlice';
import { useDeleteRoomCriteriaMutation } from '@/store/api/app/settings/roomCriteria/roomCriteriaApiSlice';
import { useDeleteSectionMutation } from '@/store/api/app/settings/section/sectionApiSlice';
import { useDeleteSemesterMutation } from '@/store/api/app/settings/semester/semesterApiSlice';
import { useDeleteSlotMutation } from '@/store/api/app/settings/slot/slotApiSlice';
import { useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const useDelete = () => {
	const { pathname } = useLocation();
	const pathArray = pathname.split('/');
	console.log(pathArray);

	let hook = null;

	if (pathArray.includes('faculty')) {
		hook = useDeleteFacultyMutation;
	}
	else if (pathArray.includes('departments')) {
		hook = useDeleteDepartmentMutation;
	}
	else if (pathArray.includes('batch')) {
		hook = useDeleteBatchMutation;
	}
	else if (pathArray.includes('designation')) {
		hook = useDeleteDesignationMutation;
	}
	else if (pathArray.includes('slot')) {
		hook = useDeleteSlotMutation;
	}
	else if (pathArray.includes('exam-date')) {
		hook = useDeleteExamDateMutation;
	}
	else if (pathArray.includes('course')) {
		hook = useDeleteCourseMutation;
	}
	else if (pathArray.includes('rooms')) {
		hook = useDeleteRoomMutation;
	}
	else if (pathArray.includes('section')) {
		hook = useDeleteSectionMutation;
	}
	else if (pathArray.includes('semester')) {
		hook = useDeleteSemesterMutation;
	}else if (pathArray.includes('routine')) {
		hook = useDeleteRoutineMutation;
	}else if (pathArray.includes('room-criteria')) {
		hook = useDeleteRoomCriteriaMutation;
	}else if (pathArray.includes('center-room')) {
		hook = useDeleteCenterRoomMutation;
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

	const handleDelete = async (id) => {
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
		handleDelete,
	};
};

export default useDelete;
