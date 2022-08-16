import React, {useEffect, useState} from 'react';
import AttractionList from './AttractionList';
import AttractionDetail from '../components/AttractionDetail'


const FavouriteList = ({favourites, selectedAttraction, changeSelectedAttraction, goBackToList, addToUserFavourites, locations, user, comments, updateAttraction, addNewComment, removeAttraction}) => {

// const [favourites, setFavourites] = useState([]);


// useEffect(() => {
//     getUser().then(user => setFavourites(user[0].attractions))
//   },[])

   

return(
    selectedAttraction ? <AttractionDetail attraction={selectedAttraction} locations={locations} removeAttraction={removeAttraction} goBackToList={goBackToList} updateAttraction={updateAttraction} comments={comments} user={user} addNewComment={addNewComment} />
    :

    favourites.length > 0 ?
<AttractionList attractions={favourites} changeSelectedAttraction={changeSelectedAttraction} goBackToList={goBackToList} addToUserFavourites={addToUserFavourites} />:

<p> you have no favourites yet</p>
)



  
}

export default FavouriteList;