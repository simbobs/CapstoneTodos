import React from 'react'
import Attraction from '../components/Attraction'


const AttractionList = ({ filtered, attractions, changeSelectedAttraction, addToUserFavourites, deleteFromUserFavourites, user, goBackToList }) => {


    // Aqib, these are attraction nodes...

    const attractionNodes = attractions.map((attraction, index) => {
        return <Attraction key={index} index={index} user={user} attraction={attraction} attractions={attractions} changeSelectedAttraction={changeSelectedAttraction} addToUserFavourites={addToUserFavourites} deleteFromUserFavourites={deleteFromUserFavourites} goBackToList={goBackToList} />
    })

    return (

        //this handles the list to filter
    //     user ? 
    //     <div className="list-container">
    //     {attractionNodes}

    // </div> 
    // : user.attractions.length === 0 ?

    // <p> you have no favourites yet</p>
    // :
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