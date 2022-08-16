import React from 'react'
import '../static/Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = (changeSelectedAttraction) => {

    const handleClick = () => {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }

    // const handleBack = () => {
    //     changeSelectedAttraction(null);
    //     console.log("I clicked the span")
    // }

    return (
        <>
            <nav className="topnav" id="myTopnav">

                <Link to="/">Todos</Link>
                <Link to="/add">Add attraction</Link>

                <Link to="/fave">Favourites List</Link>


                <Link to="/about">About</Link>
                <a href="#" className="icon" onClick={handleClick}>
                    <i className="fa fa-bars"></i>
                </a>

            </nav>

        </>
    )
}

export default Navbar