import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import AttractionDetail from './components/AttractionDetail';
import AttractionList from './containers/AttractionList';
import {getAttractions} from './services/services.js'

function App() {

  const [attractions, setAttractions] = useState([])
  const [selectedAttraction, setSelectedAttraction] = useState(null);
  const [favourites, setFavourites] = useState([]);

  // renders info on application load
  useEffect(() => {
    getAttractions()
    .then(attractions => setAttractions(attractions))
    
  })

  const changeSelectedAttraction = (index) => {
    const attraction = attractions[index];
    setSelectedAttraction(attraction);
  }

  const addToFavourites = (attraction) => {
    const copyList = [...favourites];
    copyList.push(attraction);
    setFavourites(copyList);
  }

  const goBackToList = () => {
    setSelectedAttraction(null);
  }

  

  return (
    <>
      <Navbar />

      {selectedAttraction ? <AttractionDetail attraction={selectedAttraction} goBackToList={goBackToList} /> : <AttractionList attractions={attractions} changeSelectedAttraction={changeSelectedAttraction} addToFavourites={addToFavourites} goBackToList={goBackToList} />}

    </>
  );
}

export default App;
