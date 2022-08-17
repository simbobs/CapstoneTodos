
import React, { useState } from 'react';
import AttractionList from '../containers/AttractionList';
import '../static/Filter.css'


// USE THIS FILE

const Filter = (({ filtered, filter, attractions, locations, changeSelectedAttraction, addToUserFavourites, goBackToList }) => {

  const [checked, setChecked] = useState(null)


  //this loops over our locations
  const locationNodes = locations.map((location, index) => {
    return <option key={index} value={index}>{location.city}</option>

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

    if (filtered == null) {
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
    // Unsure if I still need this. If not- need to delete checked={checked} on checkboxes and state
    // setChecked(false);

  }

    // function for dropdown with checkboxes
//       var checkList = document.getElementById('list1');
//     checkList.getElementsByClassName('items')[0].onclick = function(evt) {
//       if (checkList.classList.contains('visible'))
//         checkList.classList.remove('visible');
//       else
//         checkList.classList.add('visible');
// }
// const checkList = document.getElementById('list1');
// console.log(checkList.getElementsByClassName('anchor')[0]);


  //lou - this is inside a form so I can use the reset button on all the entries
  return (
    <>
      <form className='filter-bits-n-bobs'>
        {/* this filters by location */}
        <span><h2 id='location-filter-heading'>Filter By Location</h2>
        <select id='location-dropdown' defaultValue="select-location" onChange={handleChange}>
          <option disabled value="select-location">Choose a Location</option>
          {locationNodes}
        </select></span>


        {/* this was/is the dropdown with checkboxes */}
        {/* <div id="list1" className="dropdown-check-list" tabindex="100">
            <span className="anchor">Filter By Individual Needs</span>
            <ul className="items">
              <li><input type="checkbox" name="isIndoors" checked={checked} onChange={handleSelect} value="true"></input>Indoor Venue </li>
              <li><input type="checkbox" name="isWheelchairAccessible" checked={checked} onChange={handleSelect} value="true"></input>Wheelchair Accessible</li>
              <li><input type="checkbox" name="isEpilepsyFriendly" checked={checked} onChange={handleSelect} value="true"></input>Epilepsy Friendly</li>
              <li><input type="checkbox" name="hasQuietRoom" checked={checked} onChange={handleSelect} value="true"></input>Quiet Room </li>
              <li><input type="checkbox" name="hasLift" checked={checked} onChange={handleSelect} value="true"></input>Lift</li>
              <li><input type="checkbox" name="hasParking" checked={checked} onChange={handleSelect} value="true"></input>Parking</li>
              <li><input type="checkbox" name="hasHeadphones" checked={checked} onChange={handleSelect} value="true"></input>Noise Cancelling Headphones Available </li>
              <li><input type="checkbox" name="hasBSLSigner" checked={checked} onChange={handleSelect} value="true"></input>BSL Signers On Premises</li>
              <li><input type="checkbox" name="hasMakatonSigner" checked={checked} onChange={handleSelect} value="true"></input>Makaton Signers On Premises</li>
              <li><input type="checkbox" name="hasDisabledToilets" checked={checked} onChange={handleSelect} value="true"></input>Disabled Toilets</li>
            </ul>
        </div>}

        


        {/* this filters by checkbox*/}
        <h2 id='accessibility-filter-heading'>Filter By Individual Needs</h2>
            <div id='checkbox-css'>
              <label>Indoor Venue</label>
              <input type="checkbox" name="isIndoors" checked={checked} onChange={handleSelect} value="true"></input>&nbsp;&nbsp;&nbsp;
              <label>Wheelchair Accessible</label>
              <input type="checkbox" name="isWheelchairAccessible" checked={checked} onChange={handleSelect} value="true"></input>&nbsp;&nbsp;&nbsp;
              <label>Lift</label>
              <input type="checkbox" name="hasLift" checked={checked} onChange={handleSelect} value="true"></input>
              <br></br>
              <label>Epilepsy Friendly</label>
              <input type="checkbox" name="isEpilepsyFriendly" checked={checked} onChange={handleSelect} value="true"></input>&nbsp;&nbsp;&nbsp;&nbsp;

              <label>Quiet Room</label>
              <input type="checkbox" name="hasQuietRoom" checked={checked} onChange={handleSelect} value="true"></input>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

              <label>Parking</label>
              <input type="checkbox" name="hasParking" checked={checked} onChange={handleSelect} value="true"></input>
              <br></br>
              <label>Noise Cancelling Headphones Available</label>
              <input type="checkbox" name="hasHeadphones" checked={checked} onChange={handleSelect} value="true"></input>
              <br></br>

              <label>BSL Signers on Premises</label>
              <input type="checkbox" name="hasBSLSigner" checked={checked} onChange={handleSelect} value="true"></input>&nbsp;&nbsp;&nbsp;

              <label>Disabled Toilets</label>
              <input type="checkbox" name="hasDisabledToilets" checked={checked} onChange={handleSelect} value="true"></input>

              <label>Makaton Signers on Premises</label>
              <input type="checkbox" name="hasMakatonSigner" checked={checked} onChange={handleSelect} value="true"></input>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <br></br>
            
              <button type="reset" onClick={handleRefresh}>Clear All </button>
            </div>
      </form>


      {filtered ? <AttractionList attractions={filtered} filtered={filtered} changeSelectedAttraction={changeSelectedAttraction} addToUserFavourites={addToUserFavourites} goBackToList={goBackToList} />
        :
        <AttractionList attractions={attractions} filtered={filtered} changeSelectedAttraction={changeSelectedAttraction} addToUserFavourites={addToUserFavourites} goBackToList={goBackToList} />
      }






    </>
  )



})



export default Filter;
