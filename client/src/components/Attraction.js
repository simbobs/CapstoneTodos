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
            <h2>{attraction.name}</h2>
            <div className="button-group">
                <button onClick={handleClick} value={index}>Select</button>
                <button onClick={handleFavourite}>Add to Faves</button>
            </div>
        </div>
    )
}

export default Attraction