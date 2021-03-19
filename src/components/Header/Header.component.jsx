import React from 'react'
import './Header.style.css'

const Header = () => {
    return (
        <div className="TopNavBar">
            <div>
                <a><img width="16px" src="/lista.svg" /></a>
                <input placeholder="Search"></input>
            </div>
            <div className="buttons">
                <div>
                    <label className="switch">
                        <input type="checkbox" />
                        <span className="slider round"></span>
                    </label>
                </div>
                <div ><a className="userIcon"><img width="16px" src="/user.png"/></a></div>
            </div>

        </div>
    )
}

export default Header
