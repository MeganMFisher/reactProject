import React from 'react';
import './contactForm.css';

export default function ContactForm() {

return (
        <div className='contactFormSection'>
                <h1>Contact Us</h1>
            <div className='contactUsBox'>
                <input placeholder='Firstname'/>
                <input placeholder='Lastname'/>
                <input placeholder='Email Address'/>
                <input placeholder='Phone Number'/>
                <input placeholder='Comment'/>
            </div>
        </div>
)

}