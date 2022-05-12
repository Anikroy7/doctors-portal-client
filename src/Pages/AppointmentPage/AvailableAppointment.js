import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import SlotDetails from './SlotDetails';



const AvailableAppointment = ({ date }) => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    // console.log(services);

    return (
        <section className='mt-24 px-12'>
            <h3 className='text-secondary text-xl  text-center'>Available Appointments On : {format(date, 'PP')}</h3>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 mt-16'>
                {
                    services.map(service => <SlotDetails
                        key={service._id}
                        service={service}
                    ></SlotDetails>)
                }
            </div>
        </section>
    );
};

export default AvailableAppointment;