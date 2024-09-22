import React from 'react';

const ReturnStatus = ({ status, delivery_type }) => {
    let status_name = "";
    let class_name = "";

    if (status === 26 && delivery_type === 2) {
        status_name = "Partial Delivered Branch Transfer";
        class_name = "  rounded-full  p-1 text-xs text-center text-[#4677FC] border border-[#4677FC] "; 
    } else if (status === 27 && delivery_type === 2) {
        status_name = "Partial Delivered & Branch Transfer Cancel";
        class_name = " rounded-full  p-1 text-xs text-center text-[#F1595C] border border-[#F1595C] "; 
    } else if (status === 28 && delivery_type === 2) {
        status_name = "Partial Delivered Branch & Transfer Complete";
        class_name = " rounded-full  p-1 text-xs text-center text-[#50C793] border border-[#50C793]  "; 
    } else if (status === 29 && delivery_type === 2) {
        status_name = "Partial Delivered Branch & Transfer Reject";
        class_name = " rounded-full  p-1 text-xs text-center text-[#F1595C] border border-[#F1595C] "; 
    } else if (status === 30 && delivery_type === 2) {
        status_name = "Partial Delivered & Return Run Create";
        class_name = " rounded-full  p-1 text-xs text-center text-[#0CE7FA] border border-[#0CE7FA] "; 
    } else if (status === 31 && delivery_type === 2) {
        status_name = "Partial Delivered Branch & Return Run start";
        class_name = " rounded-full  p-1 text-xs text-center text-[#0CE7FA] border border-[#0CE7FA] "; 
    } else if (status === 32 && delivery_type === 2) {
        status_name = "Partial Delivered Branch & Return Run Cancel";
        class_name = " rounded-full  p-1 text-xs text-center text-[#F1595C] border border-[#F1595C] "; 
    } else if (status === 33 && delivery_type === 2) {
        status_name = "Partial Delivered & Return Rider Accept";
        class_name = " rounded-full  p-1 text-xs text-center text-[#0CE7FA] border border-[#0CE7FA] "; 
    } else if (status === 34 && delivery_type === 2) {
        status_name = "Partial Delivered & Return Rider Reject";
        class_name = " rounded-full  p-1 text-xs text-center text-[#F1595C] border border-[#F1595C] "; 
    } else if (status === 35 && delivery_type === 2) {
        status_name = "Partial Delivered & Rider Returned";
        class_name = " rounded-full  p-1 text-xs text-center text-[#0CE7FA] border border-[#0CE7FA] "; 
    } else if (status === 36 && delivery_type === 2) {
        status_name = "Partial Delivered & Returned";
        class_name = " rounded-full  p-1 text-xs text-center text-[#0CE7FA] border border-[#0CE7FA] "; 
    } 
    
    else if (status === 26 && delivery_type === 4) {
        status_name = "Return Transfer";
        class_name = "  rounded-full  p-1 text-xs text-center text-[#4677FC] border border-[#4677FC] "; 
    } else if (status === 27 && delivery_type === 4) {
        status_name = "Return Transfer Cancel";
        class_name = " rounded-full  p-1 text-xs text-center text-[#F1595C] border border-[#F1595C] "; 
    } else if (status === 28 && delivery_type === 4) {
        status_name = "Return Transfer Complete";
        class_name = " rounded-full  p-1 text-xs text-center text-[#50C793] border border-[#50C793]  "; 
    } else if (status === 29 && delivery_type === 4) {
        status_name = "Return Transfer Reject";
        class_name = " rounded-full  p-1 text-xs text-center text-[#F1595C] border border-[#F1595C] "; 
    } else if (status === 30 && delivery_type === 4) {
        status_name = "Return Run Create";
        class_name = " rounded-full  p-1 text-xs text-center text-[#0CE7FA] border border-[#0CE7FA] "; 
    } else if (status === 31 && delivery_type === 4) {
        status_name = "Return Run start";
        class_name = " rounded-full  p-1 text-xs text-center text-[#0CE7FA] border border-[#0CE7FA] "; 
    } else if (status === 32 && delivery_type === 4) {
        status_name = "Return Run Cancel";
        class_name = " rounded-full  p-1 text-xs text-center text-[#F1595C] border border-[#F1595C] "; 
    } else if (status === 33 && delivery_type === 4) {
        status_name = "Return Run Rider Accept";
        class_name = " rounded-full  p-1 text-xs text-center text-[#0CE7FA] border border-[#0CE7FA] "; 
    } else if (status === 34 && delivery_type === 4) {
        status_name = "Return Run Rider Reject";
        class_name = " rounded-full  p-1 text-xs text-center text-[#F1595C] border border-[#F1595C] "; 
    } else if (status === 35 && delivery_type === 4) {
        status_name = "Return Run Complete";
        class_name = " rounded-full  p-1 text-xs text-center text-[#50C793] border border-[#50C793]  "; 
    } else if (status === 36 && delivery_type === 4) {
        status_name = "Return Complete";
        class_name = " rounded-full  p-1 text-xs text-center text-[#50C793] border border-[#50C793]  "; 
    } else {
        null
    }

    return (
        <div className={` ${class_name}`}>
            <p className="">{status_name}</p>
        </div>
    );
};

export default ReturnStatus;

