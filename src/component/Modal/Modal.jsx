import React from 'react';

const Modal = ({ singelData }) => {
    console.log(singelData.data);

    if (!singelData || !singelData.data) {
        // Handle the case where the data is undefined
        // You might want to return a default state or loading state
        return null;
    }
    const { tool_name, image_link, description, integrations, features } = singelData.data;
    console.log(tool_name);

    return (
        <>
            <dialog id="my_modal_4" className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <div className="card lg:card-side bg-base-100">
                        <figure><img  src={image_link && image_link[0]} alt="Album" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{description?description:'not found'}</h2>
                            <p>Click the button to listen on Spotiwhy app.</p>                      
                        </div>
                    </div>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    );
};

export default Modal;