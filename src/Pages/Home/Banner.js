import React from 'react'
import chair from '../../assets/images/chair.png'
import bgChair from '../../assets/images/bg.png'
const Banner = () => {
    return (
        <div className="hero min-h-screen px-12" style={{
            backgroundImage: `url(${bgChair})`
        }}>
            <div className="hero-content flex-col lg:flex-row-reverse" >
                <img data-aos="fade-left"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000" src={chair} className="max-w-sm rounded-lg shadow-2xl" alt='imgape' />
                <div data-aos="fade-right"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000">
                    <h1 className="text-4xl font-bold"
                    >Yours New Smile Starts Here</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white">Get Started</button>
                </div>
            </div>
        </div >
    )
}


export default Banner;