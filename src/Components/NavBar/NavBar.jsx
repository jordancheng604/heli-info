import React from 'react'
import { NavLink } from "react-router-dom";
import './NavBar.scss';
import logo from '../../logoChinook2.svg';

export default function NavBar() {
    return (
        <div>
            <header className="header">
            <div className='header__logo'>
            <NavLink to='/Chinook' className="HeliLogo">
            <img src={logo} alt='Heli-Info Logo' className='header__logoImage'/>
            </NavLink>
            </div>
            
            <div className="header__rightSide">
            <NavLink to='/About' activeClassName="header__active">
            <button className="header__About">About</button>
            </NavLink>
            <NavLink to='/Contact' activeClassName="header__active">
            <button className="header__Contact">Contact</button>
            </NavLink>
            <NavLink to='/Chinook' activeClassName="header__active"

            isActive={(match, location)=>{
                if(!match || !location.pathname === "/"){
                    return false;
                }if(location.pathname === "/" || location.pathname === `/Chinook` || location.pathname === `/Cyclone` || location.pathname === `/Griffon` || location.pathname === `/Cormorant` || location.pathname === `/JetRanger`){return true;}
            }}
            >


            <button className="header__Home" >Home</button>
            </NavLink>
            <NavLink to='/Storymode' activeClassName="header__active">
            <button className="header__StoryMode" >StoryMode</button>
            </NavLink>
            </div>
            </header>
        </div>
    )
}
