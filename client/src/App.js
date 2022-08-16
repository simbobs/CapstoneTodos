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
import Popup from './components/Popup';
import UserLogin from './components/UserLogin';





// import Request from './helpers/request';

function App() {

  const [popup, setPopup] = useState(true);
  const [locations, setLocations] = useState([])
  const [attractions, setAttractions] = useState([])
  const [selectedAttraction, setSelectedAttraction] = useState(null);
  const [user, setUser] = useState({});
  const [comments, setComments] = useState([]);


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

  const bringBackList = () => {
    setSelectedAttraction(null);

  }

  const addToUserFavourites = (id) => {
    // finding the attraction
    const copyList = [...attractions];

    let selectedList = copyList.filter((attraction) => {
      return attraction["id"] == id
    })

    const selected = selectedList[0]

    const userCopy = { ...user }


    let userList = user.attractions.filter((attraction) => {
      return selected == attraction

    })



    if (userList.length == 1) {
      const index = userCopy.attractions.indexOf(selected)
      console.log("i am the index", index)
      userCopy.attractions.splice(index, 1);
      setUser(userCopy);
      editUser(userCopy);

    } else {
      userCopy.attractions.push(selected)
      setUser(userCopy);
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

        <Navbar selectedAttraction={selectedAttraction} bringBackList={bringBackList} userLoggedIn={userLoggedIn} />

        <div className={`App ${theme}`}>
          <button onClick={toggleTheme}>Toggle Theme</button>
        </div>

        <Routes>
          <Route exact path="/" element={<MainContainer selectedAttraction={selectedAttraction} locations={locations} removeAttraction={removeAttraction} goBackToList={goBackToList} updateAttraction={updateAttraction} comments={comments} user={user} addNewComment={addNewComment} userLoggedIn={userLoggedIn}
            attractions={attractions} filtered={filtered} filter={createFilteredList} changeSelectedAttraction={changeSelectedAttraction} addToUserFavourites={addToUserFavourites} />} />



          <Route path="/add" element={<AddForm locations={locations} onCreate={createAttraction} goBackToList={goBackToList} setSelectedAttraction={setSelectedAttraction} />} />


          <Route path="/fave" element={<AttractionList attractions={user.attractions} changeSelectedAttraction={changeSelectedAttraction} goBackToList={goBackToList} />} />

          <Route path="/edit" element={<EditForm selectedAttraction={selectedAttraction} setSelectedAttraction={setSelectedAttraction} locations={locations} updateAttraction={updateAttraction} />} />

          <Route path="/about" element={<About />}></Route>



        </Routes>
      </Router>

      <Popup trigger={popup} setTrigger={setPopup}>
        <UserLogin setPopup={setPopup} user={user} />
      </Popup>

    </>
  )
}

export default App;
