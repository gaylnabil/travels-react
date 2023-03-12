import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAfrica } from '@fortawesome/free-solid-svg-icons';
const NavBar = () =>{
    return (
        <nav>
            <ul className="nav--title">
                <li className='nav--icon'><FontAwesomeIcon icon={faEarthAfrica} /></li>
                <li><a className="nav--home" href="/">Travel Planing</a></li>
            </ul>
        </nav>
    )
}

export default NavBar;
