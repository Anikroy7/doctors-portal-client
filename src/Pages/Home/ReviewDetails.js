import React from 'react';

const ReviewDetails = ({ review }) => {
    const { name, image, description, country } = review;
    return (
        <section className='shadow-xl p-6 rounded-lg'>
            <div>
                <p className='font-semibold'>{description}</p>
            </div>

            <div className="mt-6  flex items-center w-100 justify-evenly">
                <div className="w-14 rounded-full ring ring-primary">
                    <img src={image} alt="" />
                </div>
                <div className=''>
                    <h3 className='font-bold'>{name}</h3>
                    <h3 className='font-bold'>{country}</h3>
                </div>
            </div>
        </section>
    );
};

export default ReviewDetails;