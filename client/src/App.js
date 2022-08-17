import React, { useState, useEffect, useNavigate } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import AttractionList from './containers/AttractionList';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { getAttractions, getLocations, editAttraction, getUser, editUser, getComments } from './services/services.js'
import AddForm from './components/AddForm';
import EditForm from './components/EditForm';
import About from './components/About';
import MainContainer from './containers/MainContainer';

import FavouriteList from './containers/FavouriteList';

import UserLogin from './components/UserLogin';






// import Request from './helpers/request';

function App() {

  const [popup, setPopup] = useState(true);
  const [locations, setLocations] = useState([])
  const [attractions, setAttractions] = useState([])
  const [selectedAttraction, setSelectedAttraction] = useState(null);
  const [user, setUser] = useState({});
  const [comments, setComments] = useState([]);

  const [favourites, setFavourites] = useState([])
  console.log("faves",favourites)



  //this is our filtered list state - needs to be set to null for logic to work
  const [filtered, setFiltered] = useState(null)



  // state for light-dark-mode
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'light')

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


  useEffect(() => {
    getUser().then(user => setUser(user[0]));
  }, [])

  // useEffect(() => {
  //   getUser().then(user => setFavourites(user[0].attractions));
  // }, [])

  // .then(user => setFavourites(user.attractions))

  useEffect(() => {
    getComments()
      .then(data => setComments(data))
  }, [])

  // This function needs to called every time you go back to the home page because the popup state must be set to false otherwise the user log in screen shows

  const userLoggedIn = () => {
    setPopup(false);
  }




  const changeSelectedAttraction = (id) => {
    const copyList = [...attractions];

    let selectedList = copyList.filter((attraction) => {
      return attraction["id"] == id
    })

    const selected = selectedList[0]

    setSelectedAttraction(selected);
  }

  const addToUserFavourites = (id) => {
    // finding the attraction
    const copyList = [...attractions];

    let selectedList = copyList.filter((attraction) => {
      return attraction["id"] == parseInt(id)
    })

    const selected = selectedList[0]

    const faveCopy = [... favourites]
    const userCopy = { ...user }


    let searchUserList = faveCopy.filter((attraction) => {
      return attraction["id"] == parseInt(id)

    })



    if (searchUserList.length == 1) {
      const index = faveCopy.indexOf(selected)
      console.log("i am the index", index)
      faveCopy.splice(index, 1);
      setFavourites(faveCopy)
      setUser(userCopy["attractions"] = faveCopy);
      editUser(userCopy);

    } else {
      faveCopy.push(selected)
      setFavourites(faveCopy)
      setUser(userCopy["attractions"] = faveCopy);
      editUser(userCopy);
      console.log("you got else baby")

    }



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

  const toggleTheme = () => {

    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  return (
    <>

      <Router>


        <Navbar selectedAttraction={selectedAttraction} goBackToList={goBackToList} />


        <div className={`App ${theme}`}>
          <button id='light-dark-toggle-button' onClick={toggleTheme}>Switch to{`   ${theme}`}</button>
        </div>

        <Routes>
          <Route path="/" element={<UserLogin setPopup={setPopup} user={user} />} />
          <Route exact path="/home" element={<MainContainer selectedAttraction={selectedAttraction} locations={locations} removeAttraction={removeAttraction} goBackToList={goBackToList} updateAttraction={updateAttraction} comments={comments} user={user} addNewComment={addNewComment} userLoggedIn={userLoggedIn}
            attractions={attractions} filtered={filtered} filter={createFilteredList} changeSelectedAttraction={changeSelectedAttraction} addToUserFavourites={addToUserFavourites} />} />



          <Route path="/add" element={<AddForm locations={locations} onCreate={createAttraction} goBackToList={goBackToList} setSelectedAttraction={setSelectedAttraction} />} />


          <Route path="/fave" element={<FavouriteList favourites={favourites} selectedAttraction={selectedAttraction} changeSelectedAttraction={changeSelectedAttraction} goBackToList={goBackToList} addToUserFavourites={addToUserFavourites} updateAttraction={updateAttraction} comments={comments} user={user} addNewComment={addNewComment} />} />

          <Route path="/edit" element={<EditForm selectedAttraction={selectedAttraction} setSelectedAttraction={setSelectedAttraction} locations={locations} updateAttraction={updateAttraction} />} />

          <Route path="/about" element={<About />}></Route>



        </Routes>
      </Router>

      {/* <Popup trigger={popup} setTrigger={setPopup}>
        <UserLogin setPopup={setPopup} user={user} />
      </Popup> */}

    </>
  )
}

export default App;
