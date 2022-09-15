
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({ price }) => {
    const stripe = useStripe()
    const [cardError, setCardError] = useState('');
    const elements = useElements()
    const [clientSecret, setClientSecret] = useState('')
    useEffect(() => {
        if (price) {
            fetch('http://localhost:5000/create-payment-intent', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',

                    'authorization': `bearer ${localStorage.getItem('access-token')}`

                },
                body: JSON.stringify({ price })
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data?.clientSecret) {
                        setClientSecret(data.clientSecret)
                    }
                })
        }
    }, [price])
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        setCardError(error?.message || '')
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-primary btn-xs mt-5 px-5' type="submit" disabled={!stripe || clientSecret}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className='text-red-600'>{cardError}</p>
            }
        </>
    );
};

export default CheckoutForm;