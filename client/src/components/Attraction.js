import React from 'react'
import { useState } from 'react'
import { editUser } from '../services/services';
import '../static/Attraction.css'

const Attraction = ({ attraction, attractions, user, changeSelectedAttraction, addToUserFavourites, index, deleteFromUserFavourites }) => {

    // const [inFaves, setInFaves] = useState(false);


    // Changes selectedAttraction state

    const handleClick = (event) => {
        const id = event.target.value;
        // console.log(index);
        changeSelectedAttraction(id);
    }

    // Adds to favourites state

    const handleFavourite = (event) => {
        const id = event.target.value;

        addToUserFavourites(id);

    }

    return (

        <>
        

        <div className='attractions-block'>
            <div className="individual-item">
                <img id="list-photo" src={attraction.image} alt={attraction.name} width="280px" height="180px" />
                <p id="name">{attraction.name}</p>
            </div>
                
            <div id='button-group'>
                <button className='buttons-detail' onClick={handleClick} value={attraction.id}> Tell Me More</button>&nbsp;&nbsp;&nbsp;&nbsp;
                <button className='buttons-detail' onClick={handleFavourite} value={attraction.id}>Favourite</button>
            </div>

        </div>
        </>
    )
}

export default Attraction