import { list } from 'postcss';
import React from 'react';

const Modal = ({ singelData }) => {
    console.log(singelData.data);

    if (!singelData || !singelData.data) {
        // Handle the case where the data is undefined
        // You might want to return a default state or loading state
        return null;
    }
    const { image_link, description, integrations, features } = singelData.data;
    console.log(integrations);

    return (
        <>
            <dialog id="my_modal_4" className="modal">
                <div className="modal-box w-11/12 max-w-5xl ">
                    <div className="card lg:card-side bg-base-100 gap-5 ">
                       
                        <div  className="card-body border-2 border-orange-200 rounded-xl">
                            <h2 className="card-title">{description?description:'not found'}</h2>
                            <div className='flex justify-between'>
                                <div>
                                    <h1 className='text-xl font-bold'>Features</h1>
                                    {
                                        Object.values(features || {}).map(value => <li>{value.feature_name}</li>)
                                    }
                                </div>
                                <div>
                                    <h1 className='text-xl font-bold'>Integrations</h1>
                                    
                                       {
                                        integrations && integrations.map((p) =><li>{p ? p : 'not found'}</li>)
                                       }
                                    
                                </div>
                            </div>                     
                        </div>
                        <figure><img  src={image_link && image_link[0]} alt="Album" /></figure>
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