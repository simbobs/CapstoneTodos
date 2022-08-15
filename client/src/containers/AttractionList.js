import React from 'react'
import Attraction from '../components/Attraction'

const AttractionList = ({ filtered, attractions, changeSelectedAttraction, addToUserFavourites, goBackToList }) => {

    // Aqib, these are attraction nodes...

    const attractionNodes = attractions.map((attraction, index) => {
        return <Attraction key={index} index={index} attraction={attraction} changeSelectedAttraction={changeSelectedAttraction} addToUserFavourites={addToUserFavourites} goBackToList={goBackToList} />
    })

    return (

        //this handles the list to filter

        filtered && filtered.length > 0 ?
        <div className="list-container">
            {attractionNodes}
        </div> 
        : filtered == null ?
        <div className="list-container">
            {attractionNodes}
        </div> 
        : <div>  
                <h2>no results matching your search were found </h2>
        </div>

        
    )
}

export default AttractionList