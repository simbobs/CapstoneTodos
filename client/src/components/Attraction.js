import React, {useState} from 'react'
import '../static/Attraction.css'



const Attraction = ({ attraction, changeSelectedAttraction, addToFavourites, index }) => {

    // Changes selectedAttraction state

    const handleClick = (event) => {
        const index = event.target.value;
        changeSelectedAttraction(index);
    }

    // Adds to favourites state

    const handleFavourite = (event) => {
        const index = event.target.value;
        addToFavourites(index);
        console.log(event.target.value)


    }


    return (
        <div className="individual-item">
            <img src={attraction.image} alt={attraction.name} width="280px" height="180px" />
            <div className="button-group">

                <li onClick={handleClick}> {attraction.name}</li>
                <br>

                </br>
                <br></br>
                <button onClick={handleFavourite} value={index}>Add to Faves</button>
            </div>
        </div>
    )
}

export default Attraction