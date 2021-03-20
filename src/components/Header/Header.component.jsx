import React from 'react'
import './Header.style.css'
import { faSearch, faBars, faUser, faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@ npm install --save @fortawesome/react-fontawesome'

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
{/* <nav>
<ul>
    <li><a href="#top"><FontAwesomeIcon icon={faBars} /></a></li>
    <div>
        <li>
            <input placeholder="Search" type="search"></input>
            <span ><FontAwesomeIcon icon={faSearch} /></span>
        </li>
    </div>
    <div className="items">
        <li>darkmode</li>
        <li>perfil</li>
    </div>
</ul>

</nav> */}


// <div>
// <input placeholder="Search"></input>
// </div>
// <div className="buttons">
// <div>
//     <label className="switch">
//         <input type="checkbox" />
//         <span className="slider round"></span>
//     </label>
// </div>
// <div ><a className="userIcon"><img width="16px" src="/user.png" /></a></div>
// </div>