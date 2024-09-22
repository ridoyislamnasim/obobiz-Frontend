import Loading from '@/components/Loading';
import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const AuthLayout = () => {
	const { isAuth, auth } = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { pathname } = useLocation();
	const pathArray = pathname.split('/');


	useEffect(() => {
		if (!isAuth) {
			navigate('/login');
		} else { 

			if ([].includes()) {
				navigate(`/`);
			} else {
				dispatch({ type: 'LOGOUT' });
				navigate('/login');
			}
		}
	}, [isAuth, navigate]);

	return (
		<>
			<Suspense fallback={<Loading />}>
				<ToastContainer />
				{<Outlet />}
			</Suspense>
		</>
	);
};

export default AuthLayout;
