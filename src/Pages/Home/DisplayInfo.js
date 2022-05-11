import React from 'react';
import '../../Pages/Home/DisplayInfo.css'

const DisplayInfo = ({ detail }) => {
    console.log(detail);
    const { name, image, description } = detail;
    return (
        <div className='detail-container bg-gradient-to-r from-secondary to-primary flex items-center justify-evenly'>
            <div className='ml-2'>
                <img src={image} alt="" />
            </div>
            <div className='px-2'>
                <h5 className='font-bold mb-3'>{name}</h5>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default DisplayInfo;