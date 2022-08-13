
import React from 'react';
import AttractionList from '../../containers/AttractionList';




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

    //this v confusing but we see if this works

    // const handleSelect = (event) => {
    //     const filteredCopy =[...filtered];

    //     const name = event.target.name;

        
    //     const newList = filteredCopy.filter((item) => {
    //         let keyValue;
    //         const keys = Object.keys(item);

    //         keys.filter((key) => {
    //             if (key === name){
    //                 keyValue = item[key];
                    
    //             } 
    //         });
    //         console.log("this is the keyvalue", keyValue)

    //         if (keyValue === event.target.value){
    //             return item;
    //         }

    //     })

    //     filter(newList);
      
    // }


  const handleSelect = (event) => {
  const filteredListCopy = [...filtered];
  let accessibilityList;
  console.log("calling name a level up", event.target.name)
  const eventName = event.target.name;
  const eventValue = event.target.value;

  const item = filteredListCopy[0]
  console.log("this is the item", item)
  const newItem = item[event.target.value];

  let newList = filteredListCopy.filter((item) => {

    // console.log("this name",item[event.target.name]) -- this effin works
    
    return item[event.target.name] === Boolean(event.target.value);
  });

  filter(newList)

}

  




    //   const keys = Object.keys(item);
    //   console.log("this is the key at index 4", keys[7])
    //   console.log("this is the event.target.name", event.target.name)
    //   console.log("this is the event.target.value", event.target.value)
    //   console.log("this is the value at item[name]", item[name])
    //   console.log("type of value", typeof(event.target.value))
        // console.log("key", keys[16])
      
      
//console.log and see if both conditions are being seeing





    

  

  
// using this as reference
//   if (keys[0]=== name && item[name] == event.target.value){
//     console.log(item);
// } else if (keys[1]=== name && item[name] == event.target.value){
//   console.log(item)
// } else if (keys[2]=== name && item[name] == event.target.value){
//   console.log(item)
// } else if (keys[3]=== name && item[name] == event.target.value){
//   console.log(item)
// } else if (keys[4]=== name && item[name] == event.target.value){
//   console.log(item)
// } else if (keys[5]=== name && item[name] == event.target.value){
//   console.log(item)
// } else if (keys[6]=== name && item[name] == event.target.value){
//   console.log(item)
// } else if (keys[7]=== name && item[name] == event.target.value){
//   console.log(item)
// } else if (keys[8]=== name && item[name] == event.target.value){
//   console.log(item)
// } else if (keys[9]=== name && item[name] == event.target.value){
//   console.log(item)
// } else if (keys[10]=== name && item[name] == event.target.value){
//   console.log(item)
// } else if (keys[11]=== name && item[name] == event.target.value){
//   console.log(item)
// } else if (keys[12]=== name && item[name] == event.target.value){
//   console.log(item)
// } else if (keys[13]=== name && item[name] == event.target.value){
//   console.log(item)
// } else if (keys[14]=== name && item[name] == event.target.value){
//   console.log(item)
// } else if (keys[15]=== name && item[name] == event.target.value){
//   console.log(item)
// } else {
//   return false;
// }





    return(
        <>

        {/* this filters by location */}
        <h2>Filter By Location</h2>
        <select defaultValue="select-location" onChange={handleChange}>
            <option disabled value="select-location">pick a location</option>
            {locationNodes}
        </select>

        <h2>Filter By Individual Needs</h2>

        <label>Indoor Venue?</label>
        <input type="checkbox" name="isIndoors" onChange={handleSelect} value="true"></input>
        {/* <select defaultName="selected" defaultValue="select-needs" onChange={handleSelect} >
            <option value="select-needs">accessibility needs</option>
            <option name="freeEntryForCarers" value="true">Is Free For Carers</option>
            <option name="isIndoors" value="true">Is Indoors</option>
            <option name="hasQuietRoom" value="true">Has A Quiet Room</option>
            
        </select> */}
      
      {/* this filters by checkbox*/}


        {filtered ? <AttractionList attractions={filtered} /> : null}

    
       </>
    )
       

  
    })



export default Filter;
