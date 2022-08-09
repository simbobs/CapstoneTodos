import React, { useState } from 'react'

const EditForm = ({ locations, selectedAttraction, updateAttraction }) => {

    const [attraction, setAttraction] = useState({
        id: selectedAttraction.id,
        name: selectedAttraction.name,
        description: selectedAttraction.description,
        address: selectedAttraction.address,
        adultEntryPrice: selectedAttraction.adultEntryPrice,
        childEntryPrice: selectedAttraction.childEntryPrice,
        concessionEntryPrice: selectedAttraction.concessionEntryPrice,
        freeEntryForCarers: selectedAttraction.freeEntryForCarers,
        openingHours: selectedAttraction.openingHours,
        busRoutes: selectedAttraction.busRoutes,
        hasQuietRoom: selectedAttraction.hasQuietRoom,
        hasLift: selectedAttraction.hasLift,
        hasParking: selectedAttraction.hasParking,
        indoors: selectedAttraction.indoors,
        image: selectedAttraction.image,
        location: selectedAttraction.location,
        attractionType: selectedAttraction.attractionType,
        hasHeadphones: selectedAttraction.hasHeadphones,
        hasDisabledToilets: selectedAttraction.hasDisabledToilets,
        hasBSLSigner: selectedAttraction.hasBSLSigner,
        hasMakatonSigner: selectedAttraction.hasMakatonSigner,
        wheelchairAccessible: selectedAttraction.wheelchairAccessible,
        epilepsyFriendly: selectedAttraction.epilepsyFriendly,
        busy: selectedAttraction.busy,
        loud: selectedAttraction.loud



    })

    const handleChange = (event) => {

        let objectKey = event.target.name;
        let copiedAttraction = { ...attraction };
        copiedAttraction[objectKey] = event.target.value;
        setAttraction(copiedAttraction);

    }

    const handleLocation = (event) => {
        console.log(event.target)
        const index = event.target.value;
        const selectedLocation = locations[index];
        let copiedAttraction = { ...attraction };
        copiedAttraction["location"] = selectedLocation
        setAttraction(copiedAttraction)
    }

    const handleSubmit = (event) => {
        console.log("we clicked submit");

        event.preventDefault();

        const tempFormData = attraction;
        updateAttraction(tempFormData)
        // .then((data) => {
        //     onCreate(data)
        // })



    }



    const locationOptions = locations.map((location, index) => {
        return <option key={index} value={index}>{location.city}</option>

    })

    return (

        <>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" name="name" onChange={handleChange} value={attraction.name} />
                <textarea placeholder="Description" name="description" onChange={handleChange} value={attraction.description} />
                <textarea placeholder="Address" name="address" onChange={handleChange} value={attraction.address} />
                <input type="float" placeholder="Adult Price" name="adultEntryPrice" onChange={handleChange} value={attraction.adultEntryPrice} />
                <input type="float" placeholder="Child Price" name="childEntryPrice" onChange={handleChange} value={attraction.childEntryPrice} />
                <input type="float" placeholder="Concession Price" name="concessionEntryPrice" onChange={handleChange} value={attraction.concessionEntryPrice} />

                <label>Free Entry for Carers?</label>
                {selectedAttraction.freeEntryForCarers ? <input type="checkbox" checked name="freeEntryForCarers" onChange={handleChange} value="true"></input> :
                    <input type="checkbox" name="freeEntryForCarers" onChange={handleChange} value="true"></input>}

                <input type="text" placeholder="Opening Hours" name="openingHours" onChange={handleChange} value={attraction.openingHours} />
                <label>Indoor Venue?</label>
                {selectedAttraction.isIndoors ? <input type="checkbox" checked name="isIndoors" onChange={handleChange} value="true"></input> :
                    <input type="checkbox" name="isIndoors" onChange={handleChange} value="true"></input>}

                <input type="text" placeholder="Image Url" name="image" onChange={handleChange} value={attraction.image} />
                <select name="location" onChange={handleLocation} defaultValue="select-location">
                    <option disabled value="select-location">Select a City</option>
                    {locationOptions}

                </select>


                <button type="submit">Add</button>


            </form>

            {/* this needs the checkboxes to be fixed so that they can be edited
will also need to do logic on server side to get the enum data. loop over enum and see if what is being returned is the same as the enum type */}

        </>


    )

}

export default EditForm;
