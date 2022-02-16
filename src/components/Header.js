import React from 'react';
import Nav from './Navbar';

function Header(){
    return (
        <div>
            <div className=' bg-black flex justify-between items-center h-10'>
                <div className='py-2 mx-4 text-white'>
                    <span className='mx-2'>loft400@gmail.com</span>
                    <span className='mx-2'>910-478-8914</span>
                </div>
                <div className='py-2 flex justify-between mx-3'>
                    <a href='#'>
                        <img src="https://img.icons8.com/ios-glyphs/30/ffffff/facebook-new.png"/>
                    </a>
                    <a href='#'>
                        <img src="https://img.icons8.com/ios-glyphs/30/ffffff/instagram-new.png"/>
                    </a>
                </div>
            </div>
            <Nav/>
        </div>
    )
}

export default Header;