import { format } from 'date-fns';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import BokkingModal from './BokkingModal';
import SlotDetails from './SlotDetails';



const AvailableAppointment = ({ date }) => {



    const [treatment, setTreatment] = useState(null);
    const formattedDate = format(date, 'PP')

    const { data: services, loading, refetch } = useQuery(['available', formattedDate], () => fetch(`http://localhost:5000/available?date=${formattedDate}`)
        .then(res => res.json())
    )
    if (loading) {
        return <Loading></Loading>
    }


    return (
        <section className='mt-24 px-12'>
            <h3 className='text-secondary text-xl  text-center'>Available Appointments On : {format(date, 'PP')}</h3>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 mt-16'>
                {
                    services?.map(service => <SlotDetails
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></SlotDetails>)
                }
            </div>
            {treatment && <BokkingModal
                date={date}
                treatment={treatment}
                setTreatment={setTreatment}
                refetch={refetch}
            ></BokkingModal>}
        </section>
    );
};

export default AvailableAppointment;