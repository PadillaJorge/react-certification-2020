import React from 'react'
import './Header.style.css'
import { faSearch, faBars, faUser, faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = () => {
    return (
        <div >
            <div className="NavBar">
                <div>
                    <a href="#top"><FontAwesomeIcon icon={faBars} /></a>
                </div>
                <div className="search">
                    <input placeholder="Search" type="search"></input>
                    <span ><FontAwesomeIcon icon={faSearch} /></span>
                </div>
                <div>
                    <a className ="items" href="items"><FontAwesomeIcon icon={faMoon} /></a>
                    <a className="items" href="#top"><FontAwesomeIcon icon={faUser} /> </a>
                </div>
            </div>
        </div>
    )
}
export default Header