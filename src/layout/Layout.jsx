
import Header from '@/components/partials/header';
import { logOut } from '@/store/api/auth/authSlice';
import Cookies from 'js-cookie';
import {  useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const Layout = ({ type }) => {
	const { isAuth, auth } = useSelector((state) => state.auth);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		const accessToken = Cookies.get('accessToken');
		console.log("auth?.user",auth?.user.role);
		console.log("accessToken",accessToken);
		console.log("auth?.user",isAuth);
		if (!isAuth || !accessToken) {
			navigate('/login');
			dispatch(logOut());
		}
	}, [isAuth, navigate]);


	return (
		<>

			<ToastContainer />
			<Header  />
			{<Outlet />}
			
		</>
	);
};

export default Layout;
