import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Amount = ({ id, data }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [amountToAdd, setAmountToAdd] = useState(0); 
    const [loading, setLoading] = useState(false); 

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const storedAuth = localStorage.getItem('user');
                if (!storedAuth) {
                    throw new Error('User is not authenticated');
                }

                const auth = JSON.parse(storedAuth);
                const accessToken = auth?.auth?.accessToken;

                const response = await fetch(`${import.meta.env.VITE_LOCAL_API_URL}/auth/user`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `${accessToken}`, 
                        'Content-Type': 'application/json',
                    },
                });

                if (!response.ok) {
                    throw new Error(`Error: ${response.status}`);
                }

                const result = await response.json();
                setUser(result.data);
            } catch (error) {
                console.error('Failed to fetch user data:', error);
            }
        };

        fetchUserData();
    }, []);

    const handleButtonClick = () => {
        setShowModal(true); 
    };

    const handleAmountChange = (e) => {
        setAmountToAdd(e.target.value); 
    };

    const handleSubmit = async () => {
        try {
            setLoading(true); 
            const storedAuth = localStorage.getItem('user');
            const auth = JSON.parse(storedAuth);
            const accessToken = auth?.auth?.accessToken;

            const response = await fetch(`${import.meta.env.VITE_LOCAL_API_URL}/amount`, {
                method: 'POST',
                headers: {
                    'Authorization': `${accessToken}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userId: user?.id, 
                    amount: parseFloat(amountToAdd),
                }),
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }

            const result = await response.json();
            console.log('Result:', result);
            window.location.replace(result?.data?.url)
            setShowModal(false); 
        } catch (error) {
            console.error('Failed to add amount:', error);
        } finally {
            setLoading(false); 
        }
    };

    return (
        <>
            <Card title={'Amount'} className='h-screen'>
                <div className='flex flex-col items-center'>
                    <p>Amount: ${user?.amount || 0}</p>
                    <div className="ltr:text-right rtl:text-left space-x-3 rtl:space-x-reverse mt-6">
                        <Button
                            onClick={handleButtonClick}
                            text="Add Amount"
                            className="btn-dark"
                        />
                    </div>
                </div>
            </Card>

            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-4 rounded shadow-md">
                        <h2 className="text-lg font-bold mb-4">Add Amount</h2>
                        <input
                            type="number"
                            className="border p-2 mb-4 w-full"
                            placeholder="Enter amount"
                            value={amountToAdd}
                            onChange={handleAmountChange}
                        />
                        <div className="flex justify-end">
                            <Button onClick={() => setShowModal(false)} className="mr-2">
                                Cancel
                            </Button>
                            <div className="ltr:text-right rtl:text-left space-x-3 rtl:space-x-reverse mt-6">
                                <Button
                                    onClick={handleSubmit} disabled={loading}
                                    text={loading ? 'Adding...' : 'Submit'}
                                    className="btn-dark"
                                />
                            </div>

                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Amount;
