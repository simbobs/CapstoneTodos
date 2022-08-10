import React from 'react'
import '../static/Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {

    const handleClick = () => {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }

    return (
        <>
            <nav className="topnav" id="myTopnav">

                <a href="#" className="logo">Todos</a>
                <Link to="/add">Add attraction</Link>
                <a href="#">Favourites list</a>
                <Link to="/about">About</Link>
                <a href="javascript:void(0);" className="icon" onClick={handleClick}>
                    <i className="fa fa-bars"></i>
                </a>
            </nav>

        </>
    )
}

export default Navbar