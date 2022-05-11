import React from 'react';
import tooth1 from '../../assets/images/cavity.png'
import tooth2 from '../../assets/images/fluoride.png'
import tooth3 from '../../assets/images/whitening.png'
import ServiceCard from './ServiceCard';
const Services = () => {
    const serviceDetails = [
        {
            name: 'Fluoride Treatment', description: 'If you have any theeth problem your can solved it by cheak our chember or visit our website'
        },
        {
            name: 'Cavify Fillings', description: 'Cavity probelms is a biggest problem in our world ,we provied this treathment'
        },
        {
            name: 'Teeth Whitenting', description: 'We ensure that of you need the best performence you can cheak out our chember'
        }
    ]
    return (
        <section className='mt-24'>
            <h4 className='text-center text-secondary font-bold'>OUR SERVICES</h4>
            <h2 className='text-center text-2xl mt-4'>Services We Provide</h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-12'>
                <ServiceCard
                    img={tooth2}
                    name={serviceDetails[0].name}
                    description={serviceDetails[0].description}
                ></ServiceCard>
                <ServiceCard
                    img={tooth1} name={serviceDetails[1].name}
                    description={serviceDetails[1].description}
                ></ServiceCard>
                <ServiceCard
                    img={tooth3} name={serviceDetails[2].name}
                    description={serviceDetails[2].description}
                ></ServiceCard>
            </div>
        </section>
    );
};

export default Services;