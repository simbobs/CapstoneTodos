
import React from 'react';
import AttractionList from '../containers/AttractionList';




const Filter = (({filtered, attractions, locations, filter}) => {

  


    //this loops over our locations
  const locationNodes = locations.map((location, index) => {
        return <option  key={index}  value={index}>{location.city}</option>
      
    })


//this handles the select location list
  const handleChange = (event) => {

        const index = event.target.value;

        const selectedLocation = locations[index];
        const filteredList = selectedLocation.attractions;

        //function to set state of filtered at top level
        filter(filteredList);
        
        
      
    }


//this function updates the filtered list if it exists
  const handleSelect = (event) => {
    
  const filteredListCopy = [...filtered];
    let newList = filteredListCopy.filter((item) => {
    return item[event.target.name] === Boolean(event.target.value);
  })

  filter(newList)

};



  







    return(
        <>

        {/* this filters by location */}
        <h2>Filter By Location</h2>
        <select defaultValue="select-location" onChange={handleChange}>
            <option disabled value="select-location">pick a location</option>
            {locationNodes}
        </select>

        <h2>Filter By Individual Needs</h2>

    
        {/* this filters by checkbox*/}
        <label>Indoor Venue</label>
        <input type="checkbox" name="isIndoors" onChange={handleSelect} value="true"></input>

        <label>Wheelchair accessible</label>
        <input type="checkbox" name="isWheelchairAccessible" onChange={handleSelect} value="true"></input>

        <label>Epilepsy Friendly</label>
        <input type="checkbox" name="isEpilepsyFriendly" onChange={handleSelect} value="true"></input>

        <label>Quiet Room</label>
        <input type="checkbox" name="hasQuietRoom" onChange={handleSelect} value="true"></input>

        <label>Lift</label>
        <input type="checkbox" name="hasLift" onChange={handleSelect} value="true"></input>

        <label>Parking</label>
        <input type="checkbox" name="hasParking" onChange={handleSelect} value="true"></input>

        <label>Noise Cancelling Headphones available</label>
        <input type="checkbox" name="hasHeadphones" onChange={handleSelect} value="true"></input>

        <label>BSL signers on premises</label>
        <input type="checkbox" name="hasBSLSigner" onChange={handleSelect} value="true"></input>

        <label>Makaton signers on premises</label>
        <input type="checkbox" name="hasMakatonSigner" onChange={handleSelect} value="true"></input>

        <label>disabled toilets</label>
        <input type="checkbox" name="hasDisabledToilets" onChange={handleSelect} value="true"></input>

        <label>no loud noises</label>
        <input type="checkbox" name="isLoud" onChange={handleSelect} value="false"></input>
        
        <label>calm venue</label>
        <input type="checkbox" name="isBusy" onChange={handleSelect} value="false"></input>

       

        {filtered ? <AttractionList attractions={filtered} /> : null}

    
       </>
    )
       
    
  
    })




export default Filter;
