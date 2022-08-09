import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import AttractionDetail from './components/AttractionDetail';
import AttractionList from './containers/AttractionList';

import { getAttractions, getLocations } from './services/services.js'
import AddForm from './components/AddForm';

// import Request from './helpers/request';

function App() {

  const [locations, setLocations] = useState([])
  const [attractions, setAttractions] = useState([])
  const [selectedAttraction, setSelectedAttraction] = useState(null);
  const [favourites, setFavourites] = useState([]);

  // renders info on application load
  useEffect(() => {
    getAttractions()
      .then(attractions => setAttractions(attractions))


  }, [])

  useEffect(() => {
    getLocations()
      .then(locations => setLocations(locations))


  }, [])




  // const getAttractions = () => {
  //   const request = new Request()
  //   request.get("/api/attractions")
  //   .then((attractions)=> {setAttractions(attractions)})

  // }

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



  // using state to see if our form works
  const createAttraction = (attraction) => {
    const attractionsCopy = [...attractions]
    attractionsCopy.push(attraction)
    setAttractions(attractionsCopy);
  }

  // this removes an attraction from the front end

  const removeAttraction = (id) => {
    const temp = [...attractions]
    const indexToDelete = temp.map(attraction => attraction.id).indexOf(id);
    temp.splice(indexToDelete, 1);
    setAttractions(temp);

  }




  return (
    <>
      <Navbar />

      <AddForm locations={locations} onCreate={createAttraction} />

      {selectedAttraction ? <AttractionDetail selectedAttraction={selectedAttraction} locations={locations}  removeAttraction={removeAttraction} goBackToList={goBackToList} /> : <AttractionList attractions={attractions} changeSelectedAttraction={changeSelectedAttraction} addToFavourites={addToFavourites} goBackToList={goBackToList} />}

    </>
  );
}

export default App;
