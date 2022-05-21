import React from 'react';

const SlotDetails = ({ service, setTreatment }) => {
    // console.log(service);
    const { name, slots, price } = service;
    return (
        <div className="card  w-100 bg-base-100 shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-center text-xl text-secondary">{name}</h2>
                <p>
                    {
                        slots.length ?
                            <span>{slots[0]}</span>
                            :
                            <span className='text-red-700'>Try Another day</span>
                    }
                </p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} Available</p>
                <p><small>Price:$ {price}</small></p>
                <div className="text-center">
                    <label
                        onClick={() => setTreatment(service)}
                        disabled={slots.length === 0}
                        className="btn  btn-primary  modal-button bg-gradient-to-r from-secondary to-primary text-white" htmlFor="booking-modal" >book appointment</label>
                </div>
            </div>
        </div>
    );
};

export default SlotDetails;