import React, {useRef} from "react";
import {Form, Input, Button} from 'antd'
import emailjs from "@emailjs/browser";

function Contact(){
    const form = useRef();
    
    const sendEmail = (e) => {
        // e.preventDefault();
        console.log('test')
    
        emailjs.sendForm('service_zfqnwk4', 'template_40tay7b', form.current, 'user_D2JyN78hwr4vOrMBJY7r7')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
    };
    
    return (
        <div className="flex flex-row">
            <div>
                <img src="" alt=""/>
                <div className="flex flex-col bg-white">
                    <h1 className="text-secondary underline underline-offset-4 decoration-secondary">Contact Info</h1>
                    <h1 className="text-secondary">Phone</h1>
                    <p className="text-black">910 546 1139</p>
                    <h1 className="text-secondary">Email</h1>
                    <p className="text-black">loft400@gmail.com</p>
                    <h1 className="text-secondary">Address</h1>
                    <p className="text-black">400 st, Jacksonville - NC</p>
                </div>
            </div>
            <div>
                <form ref={form} onSubmit={sendEmail} id="contact-form">
                    <label label='Name' name='from_name' type='text'>
                        <input placeholder="Name" required></input>
                    </label>
                    <label label='Email' name='email' type='email'>
                        <input placeholder="Email" required></input>
                    </label>
                    <label label='Subject' name='subject' type='text'>
                        <input placeholder="Subject" required></input>
                    </label>
                    <label label='Message' name='message' type='text'>
                        <input placeholder="Message" required></input>
                    </label>
                    <label>
                        <input type="submit" value='Send'></input>
                    </label>
                </form>
            </div>
        </div>
    )
}

export default Contact