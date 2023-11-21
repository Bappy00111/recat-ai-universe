import React from 'react';

const Button = (props) => {
    const {children} = props
    return (
        <div className='text-center mb-5'>
            <button className="btn btn-error text-white">{children}</button>
        </div>
    );
};

export default Button;