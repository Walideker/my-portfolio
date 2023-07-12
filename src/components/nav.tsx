import React from 'react'
import { Link } from 'react-router-dom'
import Home from './home'
import './css/nav.css'




function nav() {
    return (
        <div>
            <div className='container'>
                <nav className='navbar '>
                    <Link to="/home" className='navbar-brand logo'><label>walideker<span>.dev</span></label></Link>
                    <ul>
                        <li> <Link to="/home" className='nav-link'>home</Link></li>
                        <li><Link to="/about" className='nav-link'>about</Link></li>
                        <li><Link to="/contact" className='nav-link'>contact</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default nav
