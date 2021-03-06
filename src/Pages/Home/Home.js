import React from 'react';
import Footer from '../Shared/Footer';
import Appointment from './Appointment';
import Banner from './Banner';
import ContactUs from './ContactUs';
import ExceptionalCare from './ExceptionalCare';
import Info from './Info';
import Services from './Services';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <ExceptionalCare></ExceptionalCare>
            <Appointment></Appointment>
            <Testimonial></Testimonial>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;