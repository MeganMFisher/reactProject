import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './header.css';

class Header extends Component {

    render(){
        return (
            <div className='navBar'>
                <div>
                    <Link to='/' className='links'>Home</Link>
                    <Link to='/store' className='links'>Store</Link>
                    <Link to='/about' className='links'>About</Link>
                </div>
                
            </div>
        )
    }

}

export default Header