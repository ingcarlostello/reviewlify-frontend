"use client"

// @Toast notification
import toast, { Toaster } from 'react-hot-toast';

const ToastNotification = () => {
    return (
        <Toaster
            position="bottom-center"
            reverseOrder={false}
        />
    );
};

export default ToastNotification;