import React from 'react';
import DisplayInfo from './DisplayInfo';



const Info = () => {
    const details = [
        { id: 1, image: 'https://i.ibb.co/jwNkJ2x/phone-svg.png', name: 'Opening Hours', description: '10am to 8pm withour friday' },
        {
            id: 2, image: 'https://i.ibb.co/f0x7dBf/marker-svg.png', name: 'Visit Our Location', description: 'Brooklyn ,NY 10036, United States'
        },
        {
            id: 3, image: 'https://i.ibb.co/x1hMHYd/clock-svg.png', name: 'Contact us now', description: '+00213567898'
        }
    ]
    return (
        <div className=' lg:flex md:flex px-10'>
            {
                details.map(detail => <DisplayInfo
                    detail={detail}
                    key={detail.id}
                ></DisplayInfo>)
            }
        </div>

    );
};

export default Info;