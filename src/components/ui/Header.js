import React from 'react'
import logo from '../../img/logo.png'

const Header = () => {
    return (
        <>
        <div className="center">
            <img src={logo} alt="marvel logo"/>
        </div>
        <div class="topnav">
            <a class="active" href="#home">Characters</a>
            <a href="#about">Comics</a>
            <a href="#contact">Stories</a>
            {/* <input type="text" placeholder="Search.."/> */}
        </div> 
        </>
    )
}

export default Header
