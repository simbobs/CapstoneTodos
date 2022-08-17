import React from 'react'
import '../static/Navbar.css'
import { Link } from 'react-router-dom';


const Navbar = ({ goBackToList, selectedAttraction }) => {


    const handleClick = () => {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }

    const handleBack = () => {

        if (selectedAttraction) {
            goBackToList();

        }

    }

    return (
        <>
            <nav className="topnav" id="myTopnav">


                <Link id='todos' to="/home" onClick={handleBack}>Todos</Link>

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