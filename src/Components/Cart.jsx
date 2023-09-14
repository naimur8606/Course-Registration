import React from 'react';

const Cart = () => {
    return (
        <div className='bg-[#FFFF] p-3 mb-5 rounded-lg space-y-2 text-center lg:text-left'>
            <h4 className='text-[#2f80ed] text-[18px] font-bold border-b-2'>Credit Hour Remaining 7 hr</h4>
            <h3 className='text-xl font-bold'>Course Name</h3>
            <ul className='border-b-2'>
                <li>1. Introduction to c programming</li>
            </ul>
            <p className='border-b-2'>Total Credit Hour : 13</p>
            <p>Total Price : 48000 USD</p>
        </div>
    );
};

export default Cart;