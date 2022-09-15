import React from 'react';
import treathment from '../../assets/images/treatment.png'

const ExceptionalCare = () => {
    return (
        <div className="hero min-h-screen px-12">
            <div className="hero-content flex-col lg:flex-row">
                <img src={treathment} className="max-w-sm rounded-lg shadow-2xl" alt='imaged' data-aos="fade-right"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000" />
                <div data-aos="fade-left"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000" className='px-12'>
                    <h1 className="text-4xl font-bold text-accent">Exceptional Dental Care, On Your Terms</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default ExceptionalCare;