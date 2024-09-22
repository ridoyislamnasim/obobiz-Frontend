import { useForm } from 'react-hook-form';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Fileinput from '@/components/ui/Fileinput';
import Textinput from '@/components/ui/Textinput';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Modal from './mode';
import NIDDownload from './nidDownload';
import { useDispatch } from 'react-redux';
import { handleAmount } from '@/store/amount';
import { useState } from 'react';

const NIDForm = () => {
    const dispatch = useDispatch();
    const [balance, setBalance] = useState(0);  // Balance state
    const [nidData, setNidData] = useState(null);  // Balance state
    const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

    const storedAuth = localStorage.getItem('user');
    if (!storedAuth) {
        throw new Error('User is not authenticated');
    }
    const authis = JSON.parse(storedAuth);
    const accessToken = authis?.auth?.accessToken;
    const navigate = useNavigate();


    const {
        register,
        handleSubmit,
        control,
        watch,
        formState: { errors },
    } = useForm();

    const handleFormSubmit = async (data) => {
        console.log("data", data);
        let fetchedBalance = 0; 
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
            fetchedBalance = result?.data?.amount;
            console.log("Fetched balance:", fetchedBalance);
            setBalance(fetchedBalance);

        } catch (error) {
            console.error('Failed to fetch user data:', error);
        } 

        if (fetchedBalance < 100) {
            toast.success('Insufficient balance. Please top-up your account.');
            navigate('/user/amount');
            return;
        }

        const formData = new FormData();
        const keys = Object.keys(data);
        keys.forEach((key) => {
            if (key === 'photo' || key === 'signature') {
                if (data[key]) {
                    formData.append(key, data[key][0]); 
                }
            } else {
                formData.append(key, data[key]); 
            }
        });

        try {
            const response = await fetch(`${import.meta.env.VITE_LOCAL_API_URL}/nid`, {
                method: 'POST',
                headers: {
                    Authorization: `${accessToken}`, 
                },
                body: formData,
            });

            const result = await response.json();
            if (response.ok) { 
                toast.success('NID Created Successfully!');
                setNidData(result?.data[0]);
                await dispatch(handleAmount(fetchedBalance -100));
                setIsModalOpen(true);  
            } else {
                toast.success(result.message || 'Something went wrong. Please try again.');
               
            }
        } catch (error) {
            toast.error(error.message || 'Something went wrong. Please try again');
        }
    };


    return (
        <form onSubmit={handleSubmit(handleFormSubmit)}>
            <Card title={'Create NID'}>
                <Card className=" lg:px-20 sm:px-0 px-5 lg:py-10 sm:py-0 ">

                    <div className="grid grid-cols-1 gap-5 mb-5">
                        <label htmlFor="photo" className="text-[15px] text-[rgb(71 85 105)] mb-2">
                            Photo
                        </label>
                        <Fileinput
                            selectedFile={watch('photo')?.[0]}
                            name={'photo'}
                            preview={true}
                            control={control}
                            required={true}
                            error={errors?.photo}

                        />
                    </div>
                    <div className="grid grid-cols-1 gap-5 mb-5">
                        <label htmlFor="signature" className="text-[15px] text-[rgb(71 85 105)] mb-2">
                            Signature
                        </label>
                        <Fileinput
                            selectedFile={watch('signature')?.[0]}
                            name={'signature'}
                            preview={true}
                            control={control}
                            error={errors?.signature}
                            required={true}

                        />
                    </div>
                    <div className="grid grid-cols-1 gap-5 mb-5">
                        <Textinput
                            register={register}
                            label="Name Bangla"
                            type="text"
                            placeholder="Name Bangla"
                            name="name_bangla"
                            required={true}
                            error={errors?.name_bangla}
                        />
                    </div>
                    <div className="grid grid-cols-1 gap-5 mb-5">
                        <Textinput
                            register={register}
                            label="Name English"
                            type="text"
                            placeholder="Name English"
                            name="name_english"
                            required={true}
                            error={errors?.name_english}
                        />
                    </div>
                    <div className="grid grid-cols-1 gap-5 mb-5">
                        <Textinput
                            register={register}
                            label="Father's Name"
                            type="text"
                            placeholder="Father's Name"
                            name="father_name"
                            required={true}
                            error={errors?.father_name}
                        />
                    </div>
                    <div className="grid grid-cols-1 gap-5 mb-5">
                        <Textinput
                            register={register}
                            label="Mother's Name"
                            type="text"
                            placeholder="Mother's Name"
                            name="mother_name"
                            required={true}
                            error={errors?.mother_name}
                        />
                    </div>
                    <div className="grid grid-cols-1 gap-5 mb-5">
                        <Textinput
                            register={register}
                            label="Date of Birth"
                            type="date"
                            placeholder="Date of Birth"
                            name="date_of_dirth"
                            required={true}
                            error={errors?.date_of_dirth}
                        />
                    </div>
                    <div className="grid grid-cols-1 gap-5 mb-5">
                        <Textinput
                            register={register}
                            label="NID Number"
                            type="number"
                            placeholder="NID Number"
                            name="nid_number"
                            required={true}
                            error={errors?.nid_number}
                        />
                    </div>
                    <div className="grid grid-cols-1 gap-5 mb-5">
                        <Textinput
                            register={register}
                            label="Address"
                            type="text"
                            placeholder="Address"
                            name="address"
                            required={true}
                            error={errors?.address}
                        />
                    </div>
                    <div className="grid grid-cols-1 gap-5 mb-5">
                        <Textinput
                            register={register}
                            label="Blood Group"
                            type="text"
                            placeholder="Blood Group"
                            name="blood_group"
                            required={true}
                            error={errors?.blood_group}
                        />
                    </div>
                    <div className="grid grid-cols-1 gap-5 mb-5">
                        <Textinput
                            register={register}
                            label="Issue Date"
                            type="date"
                            placeholder="Issue Date"
                            name="issue_date"
                            required={true}
                            error={errors?.issue_date}
                        />
                    </div>

                    <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                        <h3 className="text-lg font-bold">NID Created Successfully!</h3>
                        <p>You can now download the NID as a PDF.</p>
                        <div className="mt-6">
                            <NIDDownload nidData={nidData} />
                            
                        </div>
                    </Modal>


                    <div className="ltr:text-right rtl:text-left space-x-3 rtl:space-x-reverse mt-6">
                        <Button
                            type="submit"
                            text="Save"
                            className="btn-dark"
                        />
                    </div>
                </Card>
            </Card>
        </form>
    );
};

export default NIDForm;
