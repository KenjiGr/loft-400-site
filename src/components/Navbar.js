import React from 'react'
import {NavLink} from 'react-router-dom'
import './Navbar.css'

function Nav(){
    return (
        <div>
            <nav className='bg-nav  container flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full'>
                <div className='text-lg font-bold'>Loft 400</div>
                <div className="hidden md:flex space-x-12 items-center">
                    <NavLink to='/' className={({isActive}) => "main-nav" + (isActive ? " main-nav-active" : "")}>Home</NavLink>
                    <NavLink to='/about' className={({isActive}) => "main-nav" + (isActive ? " main-nav-active" : "")} >About</NavLink>
                    <NavLink to='/services' className={({isActive}) => "main-nav" + (isActive ? " main-nav-active" : "")} >Services</NavLink>
                    <NavLink to='/prices' className={({isActive}) => "main-nav" + (isActive ? " main-nav-active" : "")} >Prices</NavLink>
                    <NavLink to='/gallery' className={({isActive}) => "main-nav" + (isActive ? " main-nav-active" : "")} >Gallery</NavLink>
                    <NavLink to='/contact' className={({isActive}) => "main-nav" + (isActive ? " main-nav-active" : "")} >Contact</NavLink>
            </div>
            </nav>
        </div>
    )
}

export default Nav