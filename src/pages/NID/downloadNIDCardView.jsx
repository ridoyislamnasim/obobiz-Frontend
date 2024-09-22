
import envConfig from '@/configs/envConfig';
import React from 'react';
import logo from '@/assets/images/logo/gov_log_png.png';
import Barcode from './barcode';

const DownloadNIDCardView = ({ nidData }) => {
  return (
    <div className='w-[0px] h-[0px] overflow-auto'>
    <div className="w-[1280px] h-[1208px] flex items-center flex-col mx-auto border p-4 " id="nidCard">
    <div className="h-[250px] w-[460px] border mb-5">
        <div className="text-center grid grid-cols-12 mb-2 border-b-2">
          <div className='col-span-2 flex items-center'>
            <img src={logo} alt="Profile" className="w-full h-auto" />
          </div>
          <div className='col-span-10 flex-row justify-center pb-2'>
            <div className="font-bold text-[16px]">গণপ্রজাতন্ত্রী বাাংলাদেশ সরকার</div>
            <div className="text-green-500 text-[14px]">Government of the People's Republic of Bangladesh</div>
            <div ><span className="text-red-600 text-[16px]">National ID Card</span>/ জাতীয় পিরচয় পত্র
            </div>
          </div>
        </div>
        <div className="grid grid-cols-10 gap-4">
          {/* Left Side with Photo */}
          <div className="col-span-3  p-2">
            <img src={envConfig.apiUrl + nidData?.photo} alt="Profile" className="w-[200px] h-[105px] pb-3" />
            <img src={envConfig.apiUrl + nidData?.signature} alt="Signature" className="w-[200px] h-[20px]" />
          </div>
          <div className='col-span-7'>
            <p>নাম: <strong>{nidData?.name_bangla}</strong></p>
            <p>Name: <strong>{nidData?.name_english}</strong></p>
            <p>পিতা: <strong>{nidData?.father_name}</strong></p>
            <p>মাতা: <strong>{nidData?.mother_name}</strong></p>
            <p>Date of Birth: <span className="text-red-500">{nidData?.date_of_dirth?.split('T')[0]}</span></p>
            <p>ID No: <span className="text-red-500">{nidData?.nid_number}</span></p>
          </div>
        </div>
      </div>
      <div className="h-[250px] w-[460px] border text-[11px]">
        <div className='border p-2 text-[12px] '>
          <span>এই কার্ডটি গণপ্রজাতন্ত্রী বাংলাদেশ সরকারের সম্পত্তি। কার্ডটি ব্যবহারকারী ব্যতীত অন্য কোথাও পাওয়া গেলে নিকটস্থ পোস্ট অফিসে জমা দেবার জন্য অনুরোধ করা হলো।</span>
        </div>
        <div className='flex border flex-col p-2'>
          <div className='pb-5'>
            <span> ঠিকানা:  {nidData?.address}</span>
          </div>
          <div className=' flex flex-row '>
            <div className='pr-20'>রক্তের গ্রুপ/Blood Group: {nidData?.blood_group} </div>
            <div>জন্মস্থান:  </div>
          </div>

        </div>
        
        <div className="  p-2 pt-8 flex justify-between">
         <div>প্রদানকারী কর্তৃপক্ষের স্বাক্ষর</div>
          <p> প্রদানের তারিখ:  {nidData?.issue_date?.split('T')[0]}</p> 

        </div>
        <div>
        <Barcode value="16787ghto99778987544689" />
        </div>
      </div>

      
    </div>
    </div>
  );
};

export default DownloadNIDCardView;
