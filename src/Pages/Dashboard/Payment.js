import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';

const Payment = () => {
    const { id } = useParams()
    const url = `http://localhost:5000/booking/${id}`
    console.log(url);
    const { data: appointment, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `bearer ${localStorage.getItem('access-token')}`
        }

    }).then(res => res.json()))
    console.log(appointment);
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>

            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title text-xl text-secondary">Hello {appointment.patientName},</h2>
                    <p>Please pay for : {appointment.treatement}</p>
                    <p><small>Your appointment <span className='text-red-500'>{appointment.date}</span> at <span className='text-orange-400'>{appointment.slot}</span></small></p>

                    <p>Please pay : ${appointment.price} for treatement</p>

                </div>
            </div>
        </div>
    );
};

export default Payment;