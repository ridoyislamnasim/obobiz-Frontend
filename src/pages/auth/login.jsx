
import { Link } from 'react-router-dom';
import LoginForm from './common/login-form';



const login = () => {

	return (
		<div className="loginwrapper">
			<div className="lg-inner-column">
				<div className="right-column relative">
					<div className="inner-content h-full flex flex-col bg-white dark:bg-slate-800">
						<div className="auth-box h-full flex flex-col justify-center">
							<div className="text-center 2xl:mb-10 mb-4">
								<h4 className="font-medium">Sign in</h4>
								<div className="text-slate-500 text-base">
								okobiz
								</div>
							</div>
							<LoginForm />
							<div className="relative border-b-[#9AA2AF] border-opacity-[16%] border-b pt-6">
								<div className="absolute inline-block bg-white dark:bg-slate-800 dark:text-slate-400 left-1/2 top-1/2 transform -translate-x-1/2 px-4 min-w-max text-sm text-slate-500 font-normal">
									Or continue with
								</div>
							</div>
							<div className="max-w-[242px] mx-auto mt-8 w-full">
							</div>
							<div className="md:max-w-[345px] mx-auto font-normal text-slate-500 dark:text-slate-400 mt-1 uppercase text-sm">
								Don’t have an account?{' '}
								<Link
									to="/singup"
									className="text-slate-900 dark:text-white font-medium hover:underline"
								>
									Sign up
								</Link>
							</div>
						</div>
						<div className="auth-footer text-center">
							Copyright 2024, Okobiz All Rights Reserved.
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default login;
