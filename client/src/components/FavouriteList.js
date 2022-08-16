import React from 'react'
import Attraction from '../components/Attraction'

const FavouriteList = ({ attractions, changeSelectedAttraction, goBackToList }) => {

    // Aqib, these are attraction nodes...

    const attractionNodes = attractions.map((attraction, index) => {
        return <Attraction key={index} index={index} attraction={attraction} changeSelectedAttraction={changeSelectedAttraction}  goBackToList={goBackToList} />
    })

    return (

        //this handles the list to filter

        user.attractions ?

        <div className="list-container">
            {attractionNodes}
        </div> :
        <p> no favourites </p>


        
    )
}

export default FavouriteList;