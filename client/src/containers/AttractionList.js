import React from 'react'
import Attraction from '../components/Attraction'

const AttractionList = ({ attractions, changeSelectedAttraction, addToFavourites, goBackToList }) => {

    // Aqib, these are attraction nodes...

    const attractionNodes = attractions.map((attraction, index) => {
        return <Attraction key={index} index={index} attraction={attraction} changeSelectedAttraction={changeSelectedAttraction} addToFavourites={addToFavourites} goBackToList={goBackToList} />
    })

    return (
        <div className="list-container">
            {attractionNodes}

        </div>
        
    )
}

export default AttractionList