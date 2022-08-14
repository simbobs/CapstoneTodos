import React from 'react'
import Attraction from '../components/Attraction'

const AttractionList = ({ attractions, changeSelectedAttraction, addToUserFavourites, goBackToList }) => {

    // Aqib, these are attraction nodes...

    const attractionNodes = attractions.map((attraction, index) => {
        return <Attraction key={index} index={index} attraction={attraction} changeSelectedAttraction={changeSelectedAttraction} addToUserFavourites={addToUserFavourites} goBackToList={goBackToList} />
    })

    return (
        <div className="list-container">
            {attractionNodes}
        </div>
    )
}

export default AttractionList