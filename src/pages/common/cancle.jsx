import React from 'react';
import { useNavigate } from 'react-router-dom'; // Assuming you're using react-router for navigation

const CancelPage = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        // Navigate to home or any other page
        navigate('/user');
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md text-center max-w-md">
                <h1 className="text-2xl font-bold text-yellow-500 mb-4">Transaction Canceled!</h1>
                <p className="text-lg text-gray-700 mb-6">
                    Your transaction was canceled. If this was a mistake, you can try again.
                </p>
                <button
                    onClick={handleGoBack}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
                >
                    Go Back to Home
                </button>
            </div>
        </div>
    );
};

export default CancelPage;
