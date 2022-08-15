import React from 'react'
import { useState } from 'react'
import { editUser } from '../services/services';
import '../static/Attraction.css'

const Attraction = ({ attraction, changeSelectedAttraction, addToUserFavourites, index }) => {


    // Changes selectedAttraction state

    const handleClick = (event) => {
        const id = event.target.value;
        console.log(index);
        changeSelectedAttraction(id);
    }

    // Adds to favourites state

    const handleFavourite = (event) => {
        const index = event.target.value;
        addToUserFavourites(index);
        console.log(event.target.value)

    }

    return (
        <div className="individual-item">
            <img src={attraction.image} alt={attraction.name} width="280px" height="180px" />
            <div className="button-group">

                <li onClick={handleClick} value={attraction.id}> {attraction.name}</li>
                <br>

                </br>
                <br></br>
                <button onClick={handleFavourite} value={attraction.id}>Add to Faves</button>
            </div>
        </div>
    )
}

export default Attraction