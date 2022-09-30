import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Tosta = () => {
    const showToastMessage = () => {
        toast.success('Activity Complete !', {
            position: toast.POSITION.TOP_RIGHT
        });
    };

    return (
        <div>
            <button onClick={showToastMessage} type="button" className="btn btn-primary cent mt-3 me-3 mb-5">Activity Complete</button>
            <ToastContainer />
        </div>
    );
};

export default Tosta;