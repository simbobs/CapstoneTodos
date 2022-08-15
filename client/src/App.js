import React, { useState, useEffect, useNavigate } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import AttractionDetail from './components/AttractionDetail';
import AttractionList from './containers/AttractionList';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { getAttractions, getLocations, editAttraction } from './services/services.js'
import AddForm from './components/AddForm';
import EditForm from './components/EditForm';
import About from './components/About';
import Filter from './components/Filter';
// import './darkMode.css'

// import Request from './helpers/request';

function App() {

  const [locations, setLocations] = useState([])
  const [attractions, setAttractions] = useState([])
  const [selectedAttraction, setSelectedAttraction] = useState(null);
  const [favourites, setFavourites] = useState([]);

  //this is our filtered list state
  const [filtered, setFiltered] = useState([])

  // state for light-dark-mode
  const [theme, setTheme] = useState(
    localStorage.getItem('theme')|| 'light')

  // renders info on application load
  useEffect(() => {
    getAttractions()

      .then(attractions => setAttractions(attractions))
  }, [])

  useEffect(() => {
    getLocations()
      .then(locations => setLocations(locations))
  }, [])

  // use effect for light dark mode
  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = theme;
  }, [theme])

  // const getAttractions = () => {
  //   const request = new Request()
  //   request.get("/api/attractions")
  //   .then((attractions)=> {setAttractions(attractions)})

  // }

  const changeSelectedAttraction = (index) => {
    const attraction = attractions[index];
    setSelectedAttraction(attraction);
  }

  const addToFavourites = (index) => {
    // const copyAttractions = [...attractions];
    const attraction = attractions[index];
    console.log(attraction)
    const copyFavourites = [...favourites, attraction];
    setFavourites(copyFavourites);
    console.log(favourites.length)
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

  const updateAttraction = (editedAttraction) => {
    editAttraction(editedAttraction);
    const updatedAttractionsList = attractions.findIndex(attraction => attraction.id === editedAttraction.id);
    const updatedAttractions = [...attractions];
    updatedAttractions[updatedAttractionsList] = editedAttraction;
    setAttractions(updatedAttractions);

  }

  //this updates our filter list
  const createFilteredList = (list) => {
    setFiltered(list);
    
  }

  const toggleTheme = () => {
    
    if (theme === 'light') {
      setTheme ('dark');
    } else {
      setTheme ('light');
    }
  }

  return (
    <>
  
      <Router>
        <Navbar setSelectedAttraction={setSelectedAttraction} />

        <div className={`App ${theme}`}>
          <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
        <Routes>
          <Route exact path="/" element={selectedAttraction ? <AttractionDetail attraction={selectedAttraction} locations={locations} removeAttraction={removeAttraction} goBackToList={goBackToList} updateAttraction={updateAttraction} /> : <AttractionList attractions={attractions} changeSelectedAttraction={changeSelectedAttraction} addToFavourites={addToFavourites} goBackToList={goBackToList} />} />
          <Route path="/add" element={<AddForm locations={locations} onCreate={createAttraction} goBackToList={goBackToList} setSelectedAttraction={setSelectedAttraction} />} />


          <Route path="/fave" element={<AttractionList attractions={favourites} changeSelectedAttraction={changeSelectedAttraction} goBackToList={goBackToList} />} />

          <Route path="/edit" element={<EditForm selectedAttraction={selectedAttraction} setSelectedAttraction={setSelectedAttraction} locations={locations} updateAttraction={updateAttraction} />} />

          <Route path="/about" element={<About />}></Route>


          <Route path="/filter" element={<Filter locations={locations} attractions={attractions} filtered={filtered} filter={createFilteredList} />} />

        </Routes>
      </Router>

    </>
  )
}

export default App;
