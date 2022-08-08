import React from 'react'

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
        <li>
            <p>{attraction.name}</p>
            <p>{attraction.description}</p>
            <img src={attraction.image} alt={attraction.name} width="100px" />
            <button onClick={handleClick} value={index}>Select</button>
            <button onClick={handleFavourite}>Add to Faves</button>
        </li>
    )
}

export default Attraction