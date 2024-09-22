import Button from '@/components/ui/Button';
import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;  

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-lg w-auto max-h-[90vh] overflow-auto">
                {children}
                <div className="ltr:text-right rtl:text-left space-x-3 rtl:space-x-reverse mt-6">
                        <Button
                            onClick={onClose}
                            text="Close"
                            className="btn-dark"
                        />
                    </div>
            </div>
        </div>
    );
};

export default Modal;
