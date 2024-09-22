import { useUpdateBatchStatusMutation } from '@/store/api/app/settings/batch/batchApiSlice';
import { useUpdateCourseStatusMutation } from '@/store/api/app/settings/course/courseApiSlice';
import { useUpdateDesignationStatusMutation } from '@/store/api/app/settings/designation/designationApiSlice';
import { useUpdateExamDateStatusMutation } from '@/store/api/app/settings/examSlot/examSlotApiSlice';
import { useUpdateRoomStatusMutation } from '@/store/api/app/settings/room/roomApiSlice';
import { useUpdateSectionStatusMutation } from '@/store/api/app/settings/section/sectionApiSlice';
import { useUpdateSemesterStatusMutation } from '@/store/api/app/settings/semester/semesterApiSlice';
import { useUpdateSlotStatusMutation } from '@/store/api/app/settings/slot/slotApiSlice';
import { useUpdateTeacherStatusMutation } from '@/store/api/app/teacher/teacherApiSlice';
import { useUpdateTIFStatusMutation } from '@/store/api/app/teacher/tifApiSlice';

import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

const Status = ({ id, status }) => {
	const { pathname } = useLocation();
	const pathArray = pathname.split('/');
console.log("status id ", id);
	let hook = null;

	if (pathArray.includes('batch')) {
		hook = useUpdateBatchStatusMutation;
	} else if (pathArray.includes('designation')) {
		hook = useUpdateDesignationStatusMutation;
	} else if (pathArray.includes('slot')) {
		hook = useUpdateSlotStatusMutation;
	} else if (pathArray.includes('exam-date')) {
		hook = useUpdateExamDateStatusMutation;
	} else if (pathArray.includes('rooms')) {
		hook = useUpdateRoomStatusMutation;
	} else if (pathArray.includes('course')) {
		hook = useUpdateCourseStatusMutation;
	} else if (pathArray.includes('section')) {
		hook = useUpdateSectionStatusMutation;
	} else if (pathArray.includes('semester')) {
		hook = useUpdateSemesterStatusMutation;
	} else if (pathArray.includes('applications-users')) {
		hook = useUpdateTeacherStatusMutation;
	} else if (pathArray.includes('tif')) {
		hook = useUpdateTIFStatusMutation;
	} 

	const [updateStatus, { isLoading, isError, error, isSuccess }] = hook
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

	const handleToggleStatus = async () => {
		try {
			const newStatus = status ? false : true;

			await updateStatus({
				id,
				status: newStatus,
			});

			toast.success('Status updated successfully');
		} catch (error) {
			console.log(error);
			toast.error('Failed to update status');
		}
	};

	return (
		<span className="block w-full">
			<span
				onClick={handleToggleStatus}
				className={` inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 cursor-pointer ${status
					? 'text-success-500 bg-success-500'
					: 'text-danger-500 bg-danger-500'
					} 
       `}
			>
				{status ? 'Active' : 'Inactive'}
			</span>
		</span>
	);
};

export default Status;
