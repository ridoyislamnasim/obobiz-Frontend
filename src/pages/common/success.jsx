import { handleAmount } from '@/store/amount';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // Assuming you're using react-router for navigation

const SuccessPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const storedAuth = localStorage.getItem('user');
    if (!storedAuth) {
        throw new Error('User is not authenticated');
    }
    const authis = JSON.parse(storedAuth);
    const accessToken = authis?.auth?.accessToken;

    const handleGoBack = () => {
        // Navigate to home or any other page
        navigate('/user');
    };

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_LOCAL_API_URL}/auth/user`, {
                    method: 'GET',
                    headers: {
                        Authorization: `${accessToken}`, 
                    },
                });
    
                if (!response.ok) {
                    throw new Error(`Error: ${response.status}`);
                }
    
                const result = await response.json();
                const fetchedBalance = result?.data?.amount;
                await dispatch(handleAmount(fetchedBalance -100));
    
            } catch (error) {
                console.error('Failed to fetch user data:', error);
            }
        };
        fetchUserData();
    }, [accessToken]);
    


    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md text-center max-w-md">
                <h1 className="text-2xl font-bold text-green-500 mb-4">Transaction Successful!</h1>
                <p className="text-lg text-gray-700 mb-6">
                    Thank you for your payment. Your transaction was completed successfully.
                </p>
                <button
                    onClick={handleGoBack}
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
                >
                    Go Back to Home
                </button>
            </div>
        </div>
    );
};

export default SuccessPage;
