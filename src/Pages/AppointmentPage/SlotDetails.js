import React from 'react';

const SlotDetails = ({ service }) => {
    // console.log(service);
    const { name, slots } = service;
    return (
        <div class="card w-100 bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 className="card-title text-secondary">{name}</h2>
                <p>
                    {
                        slots.length ?
                            <span>{slots[0]}</span>
                            :
                            <span className='text-red-700'>Try Another day</span>
                    }
                </p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} Available</p>
                <div class="card-actions ">
                    <button disabled={slots.length === 0} className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white">book appointment</button>
                </div>
            </div>
        </div>
    );
};

export default SlotDetails;