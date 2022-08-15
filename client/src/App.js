import React, { useState, useEffect, useNavigate } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import AttractionDetail from './components/AttractionDetail';
import AttractionList from './containers/AttractionList';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { getAttractions, getLocations, editAttraction, getUser, editUser, getComments } from './services/services.js'
import AddForm from './components/AddForm';
import EditForm from './components/EditForm';
import About from './components/About';
import Filter from './components/filterComponents/Filter';

// import Request from './helpers/request';

function App() {

  const [locations, setLocations] = useState([])
  const [attractions, setAttractions] = useState([])
  const [selectedAttraction, setSelectedAttraction] = useState(null);
  const [user, setUser] = useState({});
  const [comments, setComments] = useState([]);

  //this is our filtered list state - needs to be set to null for logic to work
  const [filtered, setFiltered] = useState(null)

  // renders info on application load
  useEffect(() => {
    getAttractions()

      .then(attractions => setAttractions(attractions))
  }, [])


  useEffect(() => {
    getLocations()
      .then(locations => setLocations(locations))
  }, [])

  useEffect(() => {
    getUser().then(user => setUser(user[0]));
  })

  useEffect(() => {
    getComments()
      .then(data => setComments(data))
  })


  const changeSelectedAttraction = (index) => {
    const attraction = attractions[index];
    setSelectedAttraction(attraction);
  }

  const addToUserFavourites = (index) => {
    // finding the attraction
    const attraction = attractions[index];
    const userCopy = { ...user }
    userCopy.attractions.push(attraction)
    setUser(userCopy);
    editUser(userCopy)
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
  // This adds a new comment to state for the front end
  const addNewComment = (comment) => {
    const commentsCopy = [...comments];
    commentsCopy.push(comment);
    setComments(commentsCopy);
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

  return (
    <>
      <Router>
        <Navbar setSelectedAttraction={setSelectedAttraction} />
        <Routes>
          <Route exact path="/" element={selectedAttraction ? <AttractionDetail attraction={selectedAttraction} locations={locations} removeAttraction={removeAttraction} goBackToList={goBackToList} updateAttraction={updateAttraction} comments={comments} user={user} addNewComment={addNewComment} /> : 
          <Filter locations={locations} attractions={attractions} filtered={filtered} filter={createFilteredList} changeSelectedAttraction={changeSelectedAttraction} addToUserFavourites={addToUserFavourites} goBackToList={goBackToList} />} />
    
          <Route path="/add" element={<AddForm locations={locations} onCreate={createAttraction} goBackToList={goBackToList} setSelectedAttraction={setSelectedAttraction} />} />


          <Route path="/fave" element={<AttractionList attractions={user.attractions} changeSelectedAttraction={changeSelectedAttraction} goBackToList={goBackToList} />} />

          <Route path="/edit" element={<EditForm selectedAttraction={selectedAttraction} setSelectedAttraction={setSelectedAttraction} locations={locations} updateAttraction={updateAttraction} />} />

          <Route path="/about" element={<About />}></Route>


          {/* <Route path="/filter" element={} /> */}

        </Routes>
      </Router>

    </>
  )
}

export default App;
