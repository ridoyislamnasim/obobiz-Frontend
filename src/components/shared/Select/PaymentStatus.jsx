import React from 'react';

const PaymentStatus = ({ status, payment_type, delivery_type }) => {
    let status_name = "";
    let class_name = "";

    console.log("status", status);
    console.log("payment_type", payment_type);
    console.log("delivery_type", delivery_type);

    if (status >= 25 && (delivery_type === 1 || delivery_type === 2 || delivery_type === 4) && payment_type) {
        if (payment_type === 1) {
            status_name = "Branch Payment Request";
            class_name = " rounded-full  p-1 text-xs text-center text-[#4677FC] border border-[#4677FC] "; 
        } else if (payment_type === 2) {
            status_name = "Accounts Accept Payment";
            class_name = " rounded-full  p-1 text-xs text-center text-[#50C793] border border-[#50C793] "; 
        } else if (payment_type === 3) {
            status_name = "Accounts Reject Payment";
            class_name = " rounded-full  p-1 text-xs text-center text-[#F1595C] border border-[#F1595C] "; 
        } else if (payment_type === 4) {
            status_name = "Accounts Payment Request";
            class_name = " rounded-full  p-1 text-xs text-center text-[#0CE7FA] border border-[#0CE7FA] "; 
        } else if (payment_type === 5) {
            status_name = " Accounts Payment Done";
            class_name = "  rounded-full  p-1 text-xs text-center text-[#50C793] border border-[#50C793] "; 
        } else if (payment_type === 6) {
            status_name = "Merchant Payment Reject";
            class_name = " rounded-full  p-1 text-xs text-center text-[#F1595C] border border-[#F1595C] "; 
        } else {
            null
        }
    }

    return (
        <div className={` ${class_name}`}>
            <p className="">{status_name}</p>
        </div>
    );
};

export default PaymentStatus;


