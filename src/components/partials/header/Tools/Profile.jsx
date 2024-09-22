import Dropdown from '@/components/ui/Dropdown';
import Icon from '@/components/ui/Icon';
import { Menu } from '@headlessui/react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import UserAvatar from '@/assets/images/all-img/user.png';
import { logOut } from '@/store/api/auth/authSlice';
import { useSelector } from 'react-redux';
import envConfig from '@/configs/envConfig';

const profileLabel = (auth) => {
	console.log("auth?.user?.user_info?.name,", auth?.user?.user_info?.name)
	return (
		<div className="flex items-center">
			<div className="flex-1 ltr:mr-[10px] rtl:ml-[10px]">
				<div className="lg:h-8 lg:w-8 h-7 w-7 rounded-full">
					<img
						src={auth?.user?.image ? envConfig.apiUrl + auth?.user?.image : UserAvatar}
						alt=""
						className="block w-full h-full object-cover rounded-full"
					/>
				</div>
			</div>
			<div className="flex-none text-slate-600 dark:text-white text-sm font-normal items-center lg:flex hidden overflow-hidden text-ellipsis whitespace-nowrap">
				<span className="overflow-hidden text-ellipsis whitespace-nowrap w-[85px] block">
					{auth?.user?.name}
				</span>
				<span className="text-base inline-block ltr:ml-[10px] rtl:mr-[10px]">
					<Icon icon="heroicons-outline:chevron-down"></Icon>
				</span>
			</div>
		</div>
	);
};

const Profile = () => {
	const { isAuth, auth } = useSelector((state) => state.auth);
	const type = auth?.user.role;
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleLogout = () => {
		// Clear user data from local storage
		dispatch(logOut());
	};

	const ProfileMenu = [
		{
			label: 'Profile',
			icon: 'heroicons-outline:user',
// 'super-admin', 'co-administrator', 'administrator', 'teacher',
			action: () => {
				if (type === 'super-admin') {
					navigate('/super-admin/profile')
				} else if (type === 'co-administrator') {
					navigate('/co-administrator/profile')
				} else if (type === 'administrator') {
					navigate('/administrator/profile')
				} else if (type === 'teacher') {
					navigate('/teacher/profile')
				}
			},
		},
		// {
		//   label: "Chat",
		//   icon: "heroicons-outline:chat",
		//   action: () => {
		//     console.log("chat");
		//   },
		// },
		// {
		//   label: "Email",
		//   icon: "heroicons-outline:mail",
		//   action: () => {
		//     console.log("email");
		//   },
		// },
		// {
		//   label: "Todo",
		//   icon: "heroicons-outline:clipboard-check",
		//   action: () => {
		//     console.log("todo");
		//   },
		// },
		// {
		//   label: "Settings",
		//   icon: "heroicons-outline:cog",
		//   action: () => {
		//     console.log("settings");
		//   },
		// },
		// {
		//   label: "Price",
		//   icon: "heroicons-outline:credit-card",
		//   action: () => {
		//     console.log("price");
		//   },
		// },
		// {
		//   label: "Faq",
		//   icon: "heroicons-outline:information-circle",
		//   action: () => {
		//     console.log("faq");
		//   },
		// },
		{
			label: 'Logout',
			icon: 'heroicons-outline:login',
			action: handleLogout,
		},
	];

	return (
		<Dropdown label={profileLabel(auth)} classMenuItems="w-[180px] top-[58px]">
			{ProfileMenu.map((item, index) => (
				<Menu.Item key={index}>
					{({ active }) => (
						<div
							onClick={() => item.action()}
							className={`${active
								? 'bg-slate-100 text-slate-900 dark:bg-slate-600 dark:text-slate-300 dark:bg-opacity-50'
								: 'text-slate-600 dark:text-slate-300'
								} block     ${item.hasDivider
									? 'border-t border-slate-100 dark:border-slate-700'
									: ''
								}`}
						>
							<div className={`block cursor-pointer px-4 py-2`}>
								<div className="flex items-center">
									<span className="block text-xl ltr:mr-3 rtl:ml-3">
										<Icon icon={item.icon} />
									</span>
									<span className="block text-sm">{item.label}</span>
								</div>
							</div>

						</div>
					)}
				</Menu.Item>
			))}
		</Dropdown>
	);
};

export default Profile;
