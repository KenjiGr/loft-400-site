import React from 'react';
import Nav from './Navbar';
import {FacebookFilled, InstagramFilled} from '@ant-design/icons'

function Header(){
    return (
        <div>
            <div className=' bg-black flex justify-between items-center h-10'>
                <div className='py-2 mx-4 text-white'>
                    <span className='mx-2'>loft400@gmail.com</span>
                    <span className='mx-2'>910-478-8914</span>
                </div>
                <div className='py-2 flex justify-between mx-3 space-x-2'>
                    <a href='facebook.com'>
                        <FacebookFilled style={{fontSize: '20px',color: 'white'}}/>
                    </a>
                    <a href='instagram.com'>
                        <InstagramFilled style={{fontSize: '20px', color: 'white'}}/>
                    </a>
                </div>
            </div>
            <Nav/>
        </div>
    )
}

export default Header;