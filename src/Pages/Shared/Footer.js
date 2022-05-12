import React from 'react';
import bg from '../../assets/images/footer.png'

const Footer = () => {
    return (
        <footer className=" px-10 mt-10" style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: 'cover'
        }} >
            <div className='footer'>

                <div>
                    <span className="footer-title uppercase">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title uppercase">Oral Health</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title uppercase">Our address</span>
                    <a className="link link-hover">New York - 101010 Hudson</a>

                </div>
            </div>
            <footer className="footer-center pt-4 mt-4 text-base-content">
                <div>
                    <p>Copyright © 2022 - All right reserved by Doctor's portal</p>
                </div>
            </footer>
        </footer >
    );
};

export default Footer;