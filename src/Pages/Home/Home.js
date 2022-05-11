import React from 'react';
import Appointment from './Appointment';
import Banner from './Banner';
import ExceptionalCare from './ExceptionalCare';
import Info from './Info';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <ExceptionalCare></ExceptionalCare>
            <Appointment></Appointment>
        </div>
    );
};

export default Home;