import AuthLayout from '@/layout/AuthLayout';
import Layout from '@/layout/Layout';

import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Singup from '@/pages/auth/singup';
import NIDForm from '@/pages/NID/nid';
import Amount from '@/pages/amount/amount';
import SuccessPage from '@/pages/common/success';
import CancelPage from '@/pages/common/cancle';
import FailPage from '@/pages/common/fail';


const Login = lazy(() => import('@/pages/auth/login'));

const router = createBrowserRouter([
	{
		path: '',
		// errorElement: <Error />,
		children: [
			{
				path: '',
				element: <AuthLayout />,
				children: [
					{
						path: 'login',
						element: <Login />,
					},
					{
						path: 'singup',
						element: <Singup />,
					},
				],
			},

			/*---------------user-------------- */
			{
				path: 'user',
				element: <Layout type="user" />,
				children: [
					{
						path: '',
						element: <NIDForm />,
					},
					{
						path: 'success',
						element: <SuccessPage />,
					},
					{
						path: 'cancle',
						element: <CancelPage />,
					},
					{
						path: 'fail',
						element: <FailPage />,
					},


					{
						path: 'amount',
						children: [
							{
								path: '',
								element: <Amount />,
							},
							// {
							// 	path: 'new',
							// 	element: <BatchAdd />,
							// },
							// {
							// 	path: ':id',
							// 	children: [
							// 		{
							// 			path: '',
							// 			element: <BatchView />,
							// 		},
							// 		{
							// 			path: 'edit',
							// 			element: <BatchEdit />,
							// 		},
							// 	],
							// },
						],
					},
					
					
					


				],
			},

		],
	},
]);

export default router;
