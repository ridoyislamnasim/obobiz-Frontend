import Button from '@/components/ui/Button';
import Textinput from '@/components/ui/Textinput';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import { GoEye } from "react-icons/go";
import { GoEyeClosed } from "react-icons/go";

// Yup validation schema
const schema = yup
	.object({
		name: yup.string().required('Name is Required'),
		email: yup.string()
			.test('email-or-id', 'Invalid email or ID', (value) => {
				const isEmail = /\S+@\S+\.\S+/.test(value);
				return isEmail;
			})
			.required('Email is required'),
		password: yup.string().required('Password is Required'),
	})
	.required();

const SignupForm = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [showPassword, setShowPassword] = useState(false);

	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = async (data) => {
		try {
			const isEmail = /\S+@\S+\.\S+/.test(data.email);
			
			const requestData = {
				name: data.name,
				...(isEmail ? { email: data.email } : {}),
				password: data.password
			};
			const response = await fetch(`${import.meta.env.VITE_LOCAL_API_URL}/auth/user/singup`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(requestData),
			});
			const result = await response.json();

			if (!response.ok || result.status !== 'success') {
				throw new Error(result.message || 'Invalid Credentials');
			}
			navigate(`/login`);
			toast.success('Login Successful');
		} catch (error) {
			toast.error(error.message);
		}
	};

	const [checked, setChecked] = useState(false);

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="space-y-4 "
			autoComplete="true"
		>
			<Textinput
				name="name"
				label="Name"
				type="text"
				register={register}
				error={errors.name}
				className="h-[48px]"
				placeholder="Enter your name"
			/>
			<Textinput
				name="email"
				label="Email"
				type="text"
				register={register}
				error={errors.email}
				className="h-[48px]"
				placeholder="Enter your Email"
			/>
			<div className='relative'>
				<Textinput
					name="password"
					label="Password"
					type={showPassword ? 'text' : 'password'}
					register={register}
					error={errors.password}
					className="h-[48px]"
					placeholder="Enter your password"
				/>
				<div
					className="absolute right-3 top-12 cursor-pointer"
					onClick={() => setShowPassword(!showPassword)}
				>
					{showPassword ? <GoEyeClosed /> : <GoEye />}
				</div>
			</div>

			<Button
				type="submit"
				text="Sign up"
				className="btn btn-dark block w-full text-center"
			/>
		</form>
	);
};

export default SignupForm;
