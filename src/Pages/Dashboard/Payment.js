import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe('pk_test_51L1qwxD4PFFI7RawB9Gf0codBg6vO7MkSnnQtQIPySVa6xUG5t3Gfywq69zQvRVbAm4t667sjHMC9sl5HlwO1BPr00uvEMj931');
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
            <div class="card w-96 bg-base-100 shadow-xl mt-10">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm
                            key={appointment._id}
                            price={appointment.price}
                        />
                    </Elements>

                </div>
            </div>

        </div>
    );
};

export default Payment;