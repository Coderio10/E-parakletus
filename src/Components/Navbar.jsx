import React from 'react';
import { Link } from "react-router-dom"
import image1 from "../images/logo.svg" 
import '../CSS/Navbar.css';
import { CiSearch, CiMenuBurger, CiShop } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";
import { MdOutlineStoreMallDirectory } from "react-icons/md"
import { useState } from "react"; 

const NavBar = () => {

    const {data, setData} = useState(false)
    const {menu, setMenu} = useState(false)

    const inputHandler = () => {
        setData(!data)
    }

    const menuHandler = () => {
        setMenu(!menu)
    }
  
    return (
      <div className='Nav'>
        {/* <div className="header-content">
            <div className="header-div">
                <div className='search-section'>
                    <input type='text' placeholder='Search Here...' />
                    <CiSearch className='search-icon-input' />
                    <TfiClose onClick={inputHandler} className='search-icon'/>
                </div>
                <div className={data ? "header" : ""} > 
                    <div className="navbar_main">
                        <div onClick={inputHandler}>
                            <div>
                                <CiSearch className='search-icon-1' />
                            </div>
                            <CiMenuBurger onClick={menuHandler} />
                        </div>
                        <div>
                            <img src={image1} className='heading_logo' alt="" />
                        </div>
                        <div className='bad_search'>
                            <CiSearch onClick={inputHandler} className='search-icon-2' />
                            <CiShop />
                        </div>
                    </div>
                </div>
            </div> */}
        {/* </div> */}
        <div className="nav-menu">
            <Link className="link" to="/">Home</Link>
            <Link className="link" to="/contact">Contact</Link>
            <Link className="link" to="/privacy">Privacy</Link>
            <Link className="link" to="/login">Login</Link>
            <Link className="link" to="/signup">Signup</Link>
        </div>
        <div className={ menu ? "sidebar2" : "sidebar1"}>
            <Link className="sidebar_link" to="/">Home</Link>
            <Link className="sidebar_link" to="/contact">Contact</Link>
            <Link className="sidebar_link" to="/privacy">Privacy</Link>
            <Link className="sidebar_link" to="/login">Login</Link>
            <Link className="sidebar_link" to="/signup">Signup</Link>
        </div>
      </div>
    )
}

export default NavBar