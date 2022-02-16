import React from 'react';
import {FacebookFilled, InstagramFilled, MailFilled, PhoneFilled} from '@ant-design/icons'

function Footer(){
    return (
        <div>
            <div className=''>
                <div className='bg-theme py-2 w-full flex justify-center space-x-5'>
                    <a href='www.facebook.com'><FacebookFilled style={{fontSize: '20px',color: 'white'}}/></a>
                    <a href='www.facebook.com'><InstagramFilled style={{fontSize: '20px',color: 'white'}}/></a>
                    <a href='www.facebook.com'><MailFilled style={{fontSize: '20px',color: 'white'}}/></a>
                    <a href='www.facebook.com'><PhoneFilled style={{fontSize: '20px',color: 'white'}}/></a>
                </div>
                <div className='bg-nav py-2 flex justify-center space-x-2 w-full text-white'>
                    <p>Website by</p>
                    <a href='https://www.github.com/kenjigr' className='text-white hover:text-secondary'>Kenji Greene</a>
                </div>
            </div>
        </div>
    )
}

export default Footer;

