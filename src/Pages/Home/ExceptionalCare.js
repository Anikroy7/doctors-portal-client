import React from 'react';
import treathment from '../../assets/images/treatment.png'

const ExceptionalCare = () => {
    return (
        <div class="hero min-h-screen px-12">
            <div class="hero-content flex-col lg:flex-row">
                <img src={treathment} class="max-w-sm rounded-lg shadow-2xl" />
                <div className='px-12'>
                    <h1 class="text-4xl font-bold text-accent">Exceptional Dental Care, On Your Terms</h1>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button class="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default ExceptionalCare;