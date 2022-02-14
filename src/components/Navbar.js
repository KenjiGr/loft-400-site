import React from 'react';
import {NavLink} from 'react-router-dom';
import './Navbar.css';

function Nav(){
    return (
        <div>
            <nav className='bg-nav container flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 max-w-full '>
                <div className='text-lg text-white font-bold m-5'>Loft 400</div>
                <div className="hidden md:flex items-center">
                    <NavLink to='/' className={({isActive}) => "main-nav" + (isActive ? " main-nav-active" : "")}>Home</NavLink>
                    <NavLink to='/about' className={({isActive}) => "main-nav" + (isActive ? " main-nav-active" : "")} >About</NavLink>
                    <NavLink to='/services' className={({isActive}) => "main-nav" + (isActive ? " main-nav-active" : "")} >Services</NavLink>
                    <NavLink to='/prices' className={({isActive}) => "main-nav" + (isActive ? " main-nav-active" : "")} >Prices</NavLink>
                    <NavLink to='/gallery' className={({isActive}) => "main-nav" + (isActive ? " main-nav-active" : "")} >Gallery</NavLink>
                    <NavLink to='/contact' className={({isActive}) => "main-nav" + (isActive ? " main-nav-active" : "")} >Contact</NavLink>
                </div>
                <div class="md:hidden">
                <svg width="26" height="18" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 17.5H0.25V14.6667H13V17.5ZM25.75 10.4167H0.25V7.58333H25.75V10.4167ZM25.75 3.33333H13V0.5H25.75V3.33333Z" fill="white"></path>
                </svg>
            </div>
            </nav>
        </div>
    )
}

export default Nav