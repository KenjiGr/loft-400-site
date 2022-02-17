import React from "react";
import {ScissorOutlined} from '@ant-design/icons';

function About(){
    return (
        <div>
            <div className="flex flex-wrap w-100">
                <div className="bg-white w-50">
                    <h1>About Us</h1>
                    <p>With a high regard for detail and use of traditional barbering methods Sean Sands, at The Loft 400, takes pride in providing a premier-level of service for all who walk through the door. Whether you need a quick cleanup, precision fade, straight razor shave or a beard trim, Sean is the barber for you. He uses only the best in today's men's grooming tools and products leaving you feeling clean and confident. So, come down for a Cut & Shave, have a drink, and stay a while!</p>
                    <button className="bg-secondary rounded-2xl p-2 text-md">Contact Us</button>
                </div>
                <div>
                    <div>
                        <h2>Sean Sands</h2>
                        <h3>Hair & Beard Stylist</h3>
                    </div>
                    <img src="" alt=""/>
                    <img src="" alt=""/>
                </div>
            </div>
            <div>
                <div>
                    <h2>Opening Hours</h2>
                    <div>
                        <ul>
                            <li>Monday</li>
                            <li>Tuesday</li>
                            <li>Wednesday</li>
                            <li>Thursday</li>
                            <li>Friday</li>
                            <li>Saturday</li>
                            <li>Sunday</li>
                        </ul>
                        <ul>
                            <li>9am - 6pm</li>
                            <li>9am - 6pm</li>
                            <li>9am - 6pm</li>
                            <li>9am - 6pm</li>
                            <li>9am - 6pm</li>
                            <li>9am - 6pm</li>
                            <li>9am - 6pm</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h2>Sean Sands</h2>
                    <h3>Hair & Beard Stylist</h3>
                </div>
                <img src="" alt="" />
                <div>
                    <h1>Services</h1>
                    <ScissorOutlined/>
                    <h2>Haircuts</h2>
                </div>
            </div>
        </div>
    )
}

export default About