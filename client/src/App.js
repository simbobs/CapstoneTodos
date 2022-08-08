import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import AttractionDetail from './components/AttractionDetail';
import AttractionList from './containers/AttractionList';

function App() {

  const [selectedAttraction, setSelectedAttraction] = useState(null);
  const [favourites, setFavourites] = useState([]);

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

  const attractions = [{
    name: "codeclan",
    location: "Glasgow",
    description: "where dreams come to die",
    address: "clockwise",
    adult_entry_price: 10.50,
    opening_hours: "10.5",
    image: "https://images.unsplash.com/photo-1611915387288-fd8d2f5f928b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"

  },

  {
    name: "codeclan",
    location: "Glasgow",
    description: "where dreams come to die",
    address: "clockwise",
    adult_entry_price: 10.50,
    opening_hours: "10.5",
    image: "https://images.unsplash.com/photo-1611915387288-fd8d2f5f928b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"

  }
  ]

  return (
    <>
      <Navbar />

      {selectedAttraction ? <AttractionDetail attraction={selectedAttraction} goBackToList={goBackToList} /> : <AttractionList attractions={attractions} changeSelectedAttraction={changeSelectedAttraction} addToFavourites={addToFavourites} goBackToList={goBackToList} />}

    </>
  );
}

export default App;
