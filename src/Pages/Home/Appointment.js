import React from 'react';
import bg from '../../assets/images/appointment.jpg'
import doctor from '../../assets/images/doctor.png'


const Appointment = () => {
    return (
        <section className="flex items-center justify-center text-white px-12 p-4" style={{
            backgroundImage: `url(${bg})`
        }}>
            <div className='flex-1 hidden lg:block'>
                <img className=' mt-[-80px]' src={doctor} alt="" />
            </div>
            <div className='px-12 w-100 flex-1'>
                <h5 className='text-secondary text-xl font-bold mb-3'>Appointment</h5>

                <h1 className='mb-3 text-4xl'>Make An Appointment Today</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius dolorum cupiditate ipsum qui itaque dignissimos ducimus veritatis earum aliquam nulla totam officiis libero praesentium quibusdam neque necessitatibus natus, aspernatur vero!</p>
                <button class="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white mt-4">Get Started</button>
            </div>
        </section>
    );
};

export default Appointment;

/* 
 
         */