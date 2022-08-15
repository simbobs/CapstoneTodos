import React from 'react'
import Attraction from '../components/Attraction'

const AttractionList = ({ attractions, changeSelectedAttraction, addToUserFavourites, deleteFromUserFavourites, goBackToList, user }) => {

    // Aqib, these are attraction nodes...

    const attractionNodes = attractions.map((attraction, index) => {
        return <Attraction key={index} index={index} user={user} attraction={attraction} attractions={attractions} changeSelectedAttraction={changeSelectedAttraction} addToUserFavourites={addToUserFavourites} deleteFromUserFavourites={deleteFromUserFavourites} goBackToList={goBackToList} />
    })

    return (
        <div className="list-container">
            {attractionNodes}
        </div>
    )
}

export default AttractionList