import React from 'react';
import bg from '../../assets/images/footer.png'

const Footer = () => {
    return (
        <footer style={{
            backgroundImage: `url(${bg})`
        }} class="footer p-10 " >

            <div>
                <span class="footer-title uppercase">Services</span>
                <a class="link link-hover">Branding</a>
                <a class="link link-hover">Design</a>
                <a class="link link-hover">Marketing</a>
                <a class="link link-hover">Advertisement</a>
            </div>
            <div>
                <span class="footer-title uppercase">Oral Health</span>
                <a class="link link-hover">About us</a>
                <a class="link link-hover">Contact</a>
                <a class="link link-hover">Jobs</a>
                <a class="link link-hover">Press kit</a>
            </div>
            <div>
                <span class="footer-title uppercase">Our address</span>
                <a class="link link-hover">New York - 101010 Hudson</a>

            </div>
        </footer >
    );
};

export default Footer;