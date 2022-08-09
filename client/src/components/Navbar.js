import React from 'react'
import '../static/Navbar.css'

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
                <a href="#">Add attraction</a> 
                <a href="#">Favourites list</a>
                <a href="javascript:void(0);" className="icon" onClick={handleClick}>
                    <i className="fa fa-bars"></i>
                </a>
            </nav>

        </>
    )
}

export default Navbar