import React from 'react';
import bg from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import ReviewDetails from './ReviewDetails';

const Testimonial = () => {
    const reviews = [
        { id: 1, name: 'Winson Herry', image: 'https://i.ibb.co/RgHVkMn/people1.png', country: 'Carlifonia', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto totam excepturi, corporis a nulla tenetur? Iusto fugit commodi, tempora fugiat nobis non quae expedita dolorum officia eos a facilis quibusdam?' },
        {
            id: 2, name: 'Angel Luiago', image: 'https://i.ibb.co/xSP5Vxh/people2.png', country: 'New York', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto totam excepturi, corporis a nulla tenetur? Iusto fugit commodi, tempora fugiat nobis non quae expedita dolorum officia eos a facilis quibusdam?'
        },
        {
            id: 3, name: "Lucy Deoan", image: 'https://i.ibb.co/frcPrZz/people3.png', country: 'Las Vegas', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto totam excepturi, corporis a nulla tenetur? Iusto fugit commodi, tempora fugiat nobis non quae expedita dolorum officia eos a facilis quibusdam?'
        }

    ]
    return (
        <section className='mt-24 px-14'>
            <div style={{
                backgroundImage: `url(${bg})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center-top'
            }}>
                <h3 className='text-xl font-bold text-secondary mb-5'>Testimonial</h3>
                <h3 className='text-4xl'>What Our Patient Says</h3>
            </div>
            <div className='mt-11 grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-5'>
                {
                    reviews.map(review => <ReviewDetails

                        key={review.id}
                        review={review}
                    ></ReviewDetails>)
                }
            </div>
        </section >
    );
};

export default Testimonial;