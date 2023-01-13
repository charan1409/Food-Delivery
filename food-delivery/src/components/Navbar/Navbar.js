import React,{ useContext,useState,useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { foodstore } from '../../App';
import './navbar.css';

const Navbar = () => {
    const {cart} = useContext(foodstore);
    const [length,setLength] = useState(0)
    useEffect(()=>{
        setLength(cart.length)
    },[cart])
    return (
        <div className='nav-bar'>
            <div className="nav-items">
                <div className='logo'>
                    <Link to='/home' >Express Delivery</Link>
                </div>
                <div className='nav-link'>
                    <NavLink to="/home" >Home</NavLink>
                    <NavLink to="/order" >Order</NavLink>
                    <NavLink to="/manageOrder">My Cart<span className='count-number'>{length}</span></NavLink>
                </div>
            </div>
        </div >
    );
};

export default Navbar;