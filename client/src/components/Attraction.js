import React from 'react'
import { useState } from 'react'
import { editUser } from '../services/services';
import '../static/Attraction.css'

const Attraction = ({ attraction, attractions, user, changeSelectedAttraction, addToUserFavourites, index, deleteFromUserFavourites }) => {

    // const [inFaves, setInFaves] = useState(false);


    // Changes selectedAttraction state

    const handleClick = (event) => {
        const index = event.target.value;
        console.log(index);
        changeSelectedAttraction(index);
    }

    // Adds to favourites state

    const handleFavourite = (event) => {
        const index = event.target.value;
        const attraction = attractions[index]
        const userAttractions = user.attractions
        if (userAttractions.includes(attraction)) {
            deleteFromUserFavourites(attraction);
        } else {
            addToUserFavourites(attraction);
        }



    }

    return (
        <div className="individual-item">
            <img src={attraction.image} alt={attraction.name} width="280px" height="180px" />
            <div className="button-group">

                <li onClick={handleClick} value={index}> {attraction.name}</li>
                <br>

                </br>
                <br></br>
                <button onClick={handleFavourite} value={index}>Favourite</button>
            </div>
        </div>
    )
}

export default Attraction