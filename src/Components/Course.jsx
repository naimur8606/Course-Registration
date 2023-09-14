import React from 'react';

const Course = ({course, cartControl}) => {
    const {cover, title, credit, description, price} = course;
    return (
        <div className='p-4 bg-[#FFFF] rounded-lg space-y-2'>
            <img className='w-full h-[160px] rounded-lg' src={cover} alt="" />
            <h2 className='text-xl font-semibold'>{title}</h2>
            <p className='text-base text-[#999898]'>{description}</p>
            <div className='flex justify-between'>
                <div className='flex  items-center'>
                    <span className='flex text-3xl mr-2'>$</span>
                    <p className='text-[18px] text-[#999898]'>Price: {price}</p>
                </div>
                <div className='flex items-center'>
                    <img className='w-6 mr-2' src="./book.png" alt="" />
                    <p className='text-[18px] text-[#999898]'>Credit: {credit}hr</p>
                </div>
            </div>
            <button onClick={()=> cartControl(course)} className='bg-[#2F80ED] text-white text-xl font-semibold w-full rounded-lg py-2'>Select</button>
        </div>
    );
};

export default Course;