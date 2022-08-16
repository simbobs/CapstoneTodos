import React from 'react';
import Filter from '../components/Filter';
import AttractionDetail from '../components/AttractionDetail';
import UserLogin from '../components/UserLogin';

const MainContainer = ({ comments, user, addNewComment, locations, attractions, changeSelectedAttraction, addToUserFavourites, filtered, filter, selectedAttraction, updateAttraction, removeAttraction, goBackToList }) => {


  return (
    <>

      {selectedAttraction ? <AttractionDetail attraction={selectedAttraction} locations={locations} removeAttraction={removeAttraction} goBackToList={goBackToList} updateAttraction={updateAttraction} comments={comments} user={user} addNewComment={addNewComment} /> :
        <Filter locations={locations} attractions={attractions} filtered={filtered} filter={filter} changeSelectedAttraction={changeSelectedAttraction} addToUserFavourites={addToUserFavourites} goBackToList={goBackToList} />}

    </>
  )

}

export default MainContainer;