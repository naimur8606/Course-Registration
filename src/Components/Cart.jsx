import React from 'react';

const Cart = ({creditRemaining, creditHour, price, markCourses}) => {
    return (
        <div className='bg-[#FFFF] p-3 mb-5 rounded-lg space-y-2 text-center lg:text-left'>
            <h4 className='text-[#2f80ed] text-[18px] font-bold border-b-2'>{creditRemaining===20? "You can take max ":"Credit Hour Remaining " }
            ${creditRemaining} hr
             </h4>
            <h3 className='text-xl font-bold'>Course Name</h3>
            <ul className='border-b-2 pb-5 list-decimal list-inside'>
                {
                    markCourses.map( course => <li className='text-[#999898]'>{course.title}</li>)
                }
            </ul>
            <p className='border-b-2 text-[#494949] font-semibold'>Total Credit Hour : {creditHour}</p>
            <p className='text-[#494949] font-semibold'>Total Price : {price} USD</p>
        </div>
    );
};

export default Cart;