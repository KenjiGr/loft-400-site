import React from "react";
import {NavLink} from 'react-router-dom'

function Home(){
    return (
        <div className="backdrop-blur-sm mx-5">
            <div className="mx-auto my-12 flex flex-wrap">
                <div className="bg-title p-40 w-full justify-center">
                    <h1 className="">Loft at 400</h1>
                </div>
                <div className="flex">
                        <div className="w-45 p-5">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3278.2297621238936!2d-77.43323308480427!3d34.74980458809443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89a911b526bfaa5d%3A0x25c24d256ccba39b!2sLoft%20Bridal%20Bar!5e0!3m2!1sen!2sus!4v1644992020936!5m2!1sen!2sus" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" title='google maps'></iframe>
                        </div>
                    <div>
                        <div className="flex flex-wrap">
                            <NavLink to='/services' className=''><img src='https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2211&q=80' className="w-45 p-3" alt="filler"/></NavLink>
                            <NavLink to='/gallery'><img src='https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2211&q=80' className="w-45 p-3" alt="filler"/></NavLink>
                            <NavLink to='/prices'><img src='https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2211&q=80' className="w-50 p-5" alt="filler"/></NavLink>
                            <NavLink to='/about'><img src='https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2211&q=80' className="w-50 p-5" alt="filler"/></NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home