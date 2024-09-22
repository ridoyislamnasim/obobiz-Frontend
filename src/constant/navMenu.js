const navMenu = (user_type, type, branch_id) => [
	{
		isHeadr: true,
		title: 'menu',
	},
	//enum: ['super-admin', 'co-administrator', 'administrator', 'teacher',],
	// For Admin
	...(type === 'super-admin'
		?
		[
			{title: 'Settings',
			icon: 'carbon:delivery-parcel',
			child: [
				{
					childtitle: 'faculty',
					childlink: '/super-admin/faculty',
				},
				{
					childtitle: 'Department',
					childlink: '/super-admin/departments',
				},
			]
			},
			{
				title: 'Applications Users',
				icon: 'iconoir:profile-circle',
				link: '/super-admin/applications-users',
			},
			{
				title: 'Profile',
				icon: 'heroicons-outline:home',
				link: '/super-admin/profile',
			},
		]
		: []),

	// For administrator
	...(type === 'administrator'
		? [

			{
				title: 'Settings',
				icon: 'carbon:delivery-parcel',
				child: [
					{
						childtitle: 'Semester',
						childlink: '/administrator/semester',
					},
					{
						childtitle: "Teacher's Information",
						childlink: '/administrator/tif',
					},
					{
						childtitle: 'ERP Section Information',
						childlink: '/administrator/required-erp-section-information',
					},
					{
						childtitle: 'Batch',
						childlink: '/administrator/batch',
					},
					{
						childtitle: 'Designation',
						childlink: '/administrator/designation',
					},
					{
						childtitle: 'Slot',
						childlink: '/administrator/slot',
					},
					{
						childtitle: 'Exam Date',
						childlink: '/administrator/exam-date',
					},
					{
						childtitle: 'Room Criteria',
						childlink: '/administrator/room-criteria',
					},

					{
						childtitle: 'Rooms',
						childlink: '/administrator/rooms',
					},
					{
						childtitle: 'Course',
						childlink: '/administrator/course',
					},
					{
						childtitle: 'Section',
						childlink: '/administrator/section',
					},
					{
						childtitle: 'Center Room',
						childlink: '/administrator/center-room',
					},


				],
			},
			{
				title: 'Applications Users',
				icon: 'heroicons-outline:home',
				// link: '/administrator/applications-users',
				child: [
					{
						childtitle: 'Applications Users',
						childlink: '/administrator/applications-users',
					},
				]
			},
			{
				title: 'Routine',
				icon: 'heroicons-outline:home',
				child: [
					{
						childtitle: 'Routine sort',
						childlink: '/administrator/routine-sort',
					},
					{
						childtitle: 'Routine',
						childlink: '/administrator/routine',
					},
				]
				// link: '/administrator/routine',
			},
			{
				title: 'Seat Plan',
				icon: 'heroicons-outline:home',
				link: '/administrator/seat-plan',
			},
			{
				title: 'Invigilator Need',
				icon: 'heroicons-outline:home',
				link: '/administrator/invigilator-need',
			},
			{
				title: 'Duty',
				icon: 'heroicons-outline:home',
				child: [
					{
						childtitle: 'Duty Plan',
						childlink: '/administrator/duty-plan',
					},
					{
						childtitle: 'Invigilator Attendance',
						childlink: '/administrator/invigilator-attendance',
					},
				]
				// link: '/administrator/routine',
			},
			{
				title: 'Publish',
				icon: 'heroicons-outline:home',
				link: '/administrator/publish',
			},
			{
				title: 'Profile',
				icon: 'heroicons-outline:home',
				link: '/administrator/profile',
			},
		]

		: []),
			// For co-administrator
	...(type === 'co-administrator'
		? [
			{
				title: 'Settings',
				icon: 'carbon:delivery-parcel',
				child: [
					
					{
						childtitle: 'Batch',
						childlink: '/co-administrator/batch',
					},
					{
						childtitle: 'Designation',
						childlink: '/co-administrator/designation',
					},
					{
						childtitle: 'Slot',
						childlink: '/co-administrator/slot',
					},
					{
						childtitle: 'Exam Date',
						childlink: '/co-administrator/exam-date',
					},

					{
						childtitle: 'Rooms',
						childlink: '/co-administrator/rooms',
					},
					{
						childtitle: 'Course',
						childlink: '/co-administrator/course',
					},
					{
						childtitle: 'Section',
						childlink: '/co-administrator/section',
					},
					{
						childtitle: 'Semester',
						childlink: '/co-administrator/semester',
					},


				],
			},
			{
				title: 'Profile',
				icon: 'heroicons-outline:home',
				link: '/co-administrator/profile',
			},

		]

		: []),

			// For Teacher
	...(type === 'teacher' 
		? [
			
			{
				title: 'Profile',
				icon: 'heroicons-outline:home',
				link: '/teacher/profile',
			},
			{
				title: 'My Room',
				icon: 'heroicons-outline:home',
				link: '/teacher/my-room',
			},
			{
				title: 'Routine',
				icon: 'heroicons-outline:home',
				link: '/teacher/routine',
			},
			{
				title: 'Seat Plan',
				icon: 'heroicons-outline:home',
				link: '/teacher/seat-plan',
			},
			{
				title: 'Duty',
				icon: 'heroicons-outline:home',
				child: [
					{
						childtitle: 'My Duty',
						childlink: '/teacher/my-duty',
					},
					{
						childtitle: 'Duty Plan',
						childlink: '/teacher/duty-plan',
					},
					{
						childtitle: 'Invigilator Attendance',
						childlink: '/teacher/invigilator-attendance',
					},
				]
				// link: '/teacher/routine',
			},

		]

		: []),
		...(type === 'student' 
			? [
				
				{
					title: 'Profile',
					icon: 'heroicons-outline:home',
					link: '/student/profile',
				},
				{
					title: 'My Room',
					icon: 'heroicons-outline:home',
					link: '/teacher/my-room',
				},
				{
					title: 'Routine',
					icon: 'heroicons-outline:home',
					link: '/teacher/routine',
				},
				{
					title: 'Seat Plan',
					icon: 'heroicons-outline:home',
					link: '/teacher/seat-plan',
				},
				{
					title: 'Duty',
					icon: 'heroicons-outline:home',
					child: [
						{
							childtitle: 'My Duty',
							childlink: '/teacher/my-duty',
						},
						{
							childtitle: 'Duty Plan',
							childlink: '/teacher/duty-plan',
						},
						{
							childtitle: 'Invigilator Attendance',
							childlink: '/teacher/invigilator-attendance',
						},
					]
					// link: '/teacher/routine',
				},
	
			]
	
			: []),









	// {
	// 	title: 'Multi Level',
	// 	icon: 'heroicons:share',
	// 	link: '#',
	// 	child: [
	// 		{
	// 			childtitle: 'Level 1.1',
	// 			childlink: '/admin/level',
	// 		},
	// 		{
	// 			childtitle: 'Level 1.2',
	// 			childlink: 'Level-1',
	// 			multi_menu: [
	// 				{
	// 					multiTitle: 'Level 2.1',
	// 					multiLink: '/admin/level2',
	// 				},
	// 				{
	// 					multiTitle: 'Level 2.2',
	// 					multiLink: 'Level-2.3',
	// 				},
	// 			],
	// 		},
	// 	],
	// },
];

export default navMenu;
