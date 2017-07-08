import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './header.css';

class Header extends Component {

    render(){
        return (
            <div className='navBar'>
                <div>
                    <Link to='/'>Home</Link>
                    <Link to='/store'>Store</Link>
                    <Link to='/about'>About</Link>
                </div>
                
            </div>
        )
    }

}

export default Header