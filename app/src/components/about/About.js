import React, { Component } from 'react';
import AboutInfo from './aboutInfo/AboutInfo';
import ContactForm from './contactForm/ContactForm';
import './about.css';

class About extends Component {

    render() {
        return(
            <div className='aboutSection'>
                <AboutInfo />
                <ContactForm />
            </div>
        )
    }

}

export default About