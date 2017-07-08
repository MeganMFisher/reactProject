import React from 'react';
import './contactForm.css';

export default function ContactForm() {

    function handleChange(event) {
        console.log(event.target.value)
    }

return (
        <div className='contactFormSection'>
                <h1>Contact Us</h1>
            <div className='contactUsBox'>
                <input placeholder='Firstname' onChange={handleChange}/>
                <input placeholder='Lastname'/>
                <input placeholder='Email Address'/>
                <input placeholder='Phone Number'/>
                <input placeholder='Comment'/>
            </div>
                <button>SUBMIT</button>
        </div>
)

}