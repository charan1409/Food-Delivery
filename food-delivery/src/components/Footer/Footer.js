import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <div className='footer '>
                <div className='site'>
                    <h2>Express Delivery</h2>
                    <p>Integer maximus accumsan nunc, sit amet tempor lectus facilisis eu. Cras vel elit felis. Vestibulum convallis ipsum id aliquam varius.</p>
                </div>
                <div className='site'>
                    <h2>Explore</h2>
                    <p> <NavLink to="/home" className='font-bold text-xl mx-4 text-white'>Home</NavLink></p>
                    <p>  <NavLink to="/order" className='font-bold text-xl mx-4 text-white'>Order</NavLink></p>
                </div>
                <div className='site'>
                    <h2>Contact info</h2>
                    <p><i className="fas fa-map-marker-alt pr-2 text-primary text-xl"></i>Our location:</p>
                    <p> Indian Institute of Information Technology, Sricity</p>
                </div>
                <div className='site'>
                    <h2>Privacy Policy</h2>
                    <p>A Privacy Policy is a statement or a legal document that states how a company or website collects, handles and processes data of its customers and visitors. </p>
                </div>
            </div>
        </div >
    );
};

export default Footer;