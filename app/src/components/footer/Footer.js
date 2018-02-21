import React, { Component } from 'react';
import './footer.css';

// var FontAwesome = require('react-fontawesome');

class Footer extends Component {
    render() {
        return (
            <div className='footerSection'>
                <div className='socialMediaBox'>
                    <div><i className="fa fa-twitter fa-2x" aria-hidden="true" ></i></div>
                    <div><i className="fa fa-instagram fa-2x" aria-hidden="true"></i>
</div>
                    <div><i className="fa fa-facebook fa-2x" aria-hidden="true"></i>
</div>
                </div>
            </div>
        )
    }
}

export default Footer;