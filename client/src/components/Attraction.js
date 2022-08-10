import React from 'react'
import '../static/Attraction.css'

const Attraction = ({ attraction, changeSelectedAttraction, addToFavourites, index }) => {

    // Changes selectedAttraction state

    const handleClick = (event) => {
        const index = event.target.value;
        changeSelectedAttraction(index);
    }

    // Adds to favourites state

    const handleFavourite = () => {

    }

    return (
        <div className="individual-item">
            <img src={attraction.image} alt={attraction.name} width="280px" height="180px" />
            <div className="button-group">
                <li onClick={handleClick}> {attraction.name}</li>
                <button onClick={handleFavourite}>Add to Faves</button>
            </div>
        </div>
    )
}

export default Attraction