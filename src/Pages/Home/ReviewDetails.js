import React from 'react';

const ReviewDetails = ({ review }) => {
    const { name, image, description, country } = review;
    return (
        <section className='shadow-xl p-6'>
            <div>
                <p className='font-semibold'>{description}</p>
            </div>

            <div class="mt-6 avatar flex items-center w-100 justify-evenly">
                <div class="w-14 mt-6 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={image} alt="" />
                </div>
                <divc className='mt-2'>
                    <h3 className='font-bold'>{name}</h3>
                    <h3 className='font-bold'>{country}</h3>
                </divc>
            </div>
        </section>
    );
};

export default ReviewDetails;