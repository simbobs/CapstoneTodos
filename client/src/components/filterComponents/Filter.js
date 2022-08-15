
import React, {useState} from 'react';
import AttractionList from '../../containers/AttractionList';




const Filter = (({filtered, attractions, locations, filter}) => {

  const [checked, setChecked] = useState(null)


    //this loops over our locations
    const locationNodes = locations.map((location, index) => {
        return <option  key={index}  value={index}>{location.city}</option>
      
    })


    // this handles the location list
    const handleChange = (event) => {
        const index = event.target.value;
        const selectedLocation = locations[index];
        const filteredList = selectedLocation.attractions;

        //another function to set filtered
        filter(filteredList);
      
    }





// this handles the checkboxes and updates the filter list
const handleSelect = (event) => {

    let listCopy;

    if (filtered.length == 0){
  listCopy = [...attractions]
  console.log("this is our list first statement", listCopy)
} else {
  listCopy = [...filtered] 
  console.log("this is if the filter", listCopy)
}
  let newList = listCopy.filter((item) => {
  return item[event.target.name] === Boolean(event.target.value);
  });

  filter(newList)

}

//this is the onClick for the clear filter button
const handleRefresh = () => {
  filter(null);
  setChecked(false);
  
}


    return(
        <>

        {/* this filters by location */}
        <h2>Filter By Location</h2>
        <select defaultValue="select-location" onChange={handleChange}>
            <option disabled value="select-location">pick a location</option>
            {locationNodes}
        </select>

        <h2>Filter By Individual Needs</h2>

        <label>Indoor Venue</label>
        <input type="checkbox" name="isIndoors" checked={checked} onChange={handleSelect} value="true"></input>

        <label>Wheelchair accessible</label>
        <input type="checkbox" name="isWheelchairAccessible" checked={checked}  onChange={handleSelect} value="true"></input>

        <label>Epilepsy Friendly</label>
        <input type="checkbox" name="isEpilepsyFriendly" checked={checked} onChange={handleSelect} value="true"></input>

        <label>Quiet Room</label>
        <input type="checkbox" name="hasQuietRoom" checked={checked} onChange={handleSelect} value="true"></input>

        <label>Lift</label>
        <input type="checkbox" name="hasLift"  checked={checked} onChange={handleSelect} value="true"></input>

        <label>Parking</label>
        <input type="checkbox" name="hasParking" checked={checked} onChange={handleSelect} value="true"></input>

        <label>Noise Cancelling Headphones available</label>
        <input type="checkbox" name="hasHeadphones" checked={checked} onChange={handleSelect} value="true"></input>

        <label>BSL signers on premises</label>
        <input type="checkbox" name="hasBSLSigner" checked={checked} onChange={handleSelect} value="true"></input>

        <label>Makaton signers on premises</label>
        <input type="checkbox" name="hasMakatonSigner" checked={checked} onChange={handleSelect} value="true"></input>

        <label>disabled toilets</label>
        <input type="checkbox" name="hasDisabledToilets" checked={checked} onChange={handleSelect} value="true"></input>

      {/* this filters by checkbox*/}

        <button onClick={handleRefresh}>clear filters </button>


        {filtered ? <AttractionList attractions={filtered} /> : null}

    
       </>
    )
       

  
    })



export default Filter;
