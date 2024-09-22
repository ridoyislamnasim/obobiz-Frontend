import Button from '@/components/ui/Button';
import Textinput from '@/components/ui/Textinput';
import { setUser } from '@/store/api/auth/authSlice';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import { GoEye } from "react-icons/go";
import { GoEyeClosed } from "react-icons/go";
import { handleAmount } from '@/store/amount';

const schema = yup
  .object({
    email: yup
      .string()
      .test('email-or-id', 'Invalid email', (value) => {
        const isEmail = /\S+@\S+\.\S+/.test(value);
        const isPhoneNumber = /^\d{9}$|^\d{3}-\d{2}-\d{5}$/.test(value); 
        return isEmail || isPhoneNumber;
      })
      .required('Email is required'),
    password: yup.string().required('Password is Required'),
  })
  .required();

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false); 

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      setIsLoading(true); 
      const isEmail = /\S+@\S+\.\S+/.test(data.email);
      const isPhoneNumber = /^\d{9}$|^\d{3}-\d{2}-\d{5}$/.test(data.email);

      const requestData = {
        ...(isEmail ? { email: data.email } : {}),
        password: data.password,
      };

      const response = await fetch(`${import.meta.env.VITE_LOCAL_API_URL}/auth/user/singin`, {
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

      const loggedInUser = {
        accessToken: result.data.accessToken,
        refreshToken: result.data.refreshToken,
        user: result.data.user,
      };
      await dispatch(setUser(loggedInUser));
      await dispatch(handleAmount(result.data.user.amount));
      

      toast.success('Login Successful');
      navigate(`/user`);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false); 
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" autoComplete="true">
      <Textinput
        name="email"
        label="Email"
        type="text"
        register={register}
        error={errors.email}
        className="h-[48px]"
        placeholder="Enter your Email"
      />
      <div className="relative">
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
      <div className="flex justify-between">
        <div></div>
        <Link
          to="/forgot-password"
          className="text-sm text-slate-800 dark:text-slate-400 leading-6 font-medium"
        >
          Forgot Password?
        </Link>
      </div>

      <Button
        type="submit"
        text="Sign in"
        className="btn btn-dark block w-full text-center"
        isLoading={isLoading} 
      />
    </form>
  );
};

export default LoginForm;
