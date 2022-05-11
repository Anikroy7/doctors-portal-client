import React from 'react';
import bg from './../../assets/images/appointment.jpg'

const ContactUs = () => {
    return (
        <section className='mt-24' style={{
            backgroundImage: `url(${bg})`
        }}>
            <div className='text-center p-9 text-white'>
                <h4 className='text-secondary font-semibold text-xl'>Conatact Us</h4>
                <h3 className='text-3xl'>Stay Connected With Us</h3>
                <input type="email" required placeholder="Type your email" class="input w-full max-w-xs mt-6" /><br />
                <input type="text" required placeholder="Subject" class="input w-full max-w-xs mt-3 " /><br />
                <textarea class="textarea w-full h-24 mt-4 max-w-xs" placeholder="Bio"></textarea>
                <div>
                    <button class="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white mt-4">Submit</button>
                </div>
            </div>
        </section>
    );
};
export default ContactUs;