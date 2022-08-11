
import React from 'react';
import AttractionList from '../containers/AttractionList';


const Filter = (({filtered, attractions, locations, filter}) => {


    //this loops over our locations
    const locationNodes = locations.map((location, index) => {
        return <option  key={index}  value={index}>{location.city}</option>
      
    })




    const handleChange = (event) => {
        console.log(event.target.value);

        const index = event.target.value;

        const selectedLocation = locations[index];
        const filteredList = selectedLocation.attractions;

        //another function to set filtered
        filter(filteredList);
      
    }






    return(
        <>

        {/* this filters by location */}
        <h2>Filter By Location</h2>
        <select defaultValue="select-location" onChange={handleChange}>
            <option disabled value="select-location">pick a location</option>
            {locationNodes}
        </select>
      
      {/* this filters by checkbox*/}
      

        {filtered ? <AttractionList attractions={filtered} /> : null}

        </>
    )


  
})

export default Filter;
