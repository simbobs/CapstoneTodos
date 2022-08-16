import React, { useState } from 'react'
import { postAttraction } from '../services/services.js'
import "../static/form.css"
import { useNavigate } from 'react-router-dom';


const AddForm = ({ locations, onCreate, setSelectedAttraction }) => {

    const navigate = useNavigate();

    const [attraction, setAttraction] = useState({
        name: "",
        description: "",
        address: "",
        adultEntryPrice: 0.0,
        childEntryPrice: 0.0,
        concessionEntryPrice: 0.0,
        freeEntryForCarers: false,
        openingHours: "",
        isIndoors: false,
        image: "",
        location: null,
        attractionType: ""

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
        console.log(tempFormData);
        postAttraction(tempFormData).then((data) => {
            onCreate(data)
        })
        setAttraction({
            name: "",
            description: "",
            address: "",
            adultEntryPrice: 0.0,
            childEntryPrice: 0.0,
            concessionEntryPrice: 0.0,
            freeEntryForCarers: false,
            openingHours: "",
            isIndoors: false,
            image: "",
            location: null,
            attractionType: ""

        });

        setSelectedAttraction(null);
        navigate("/");



    }



    const locationOptions = locations.map((location, index) => {
        return <option key={index} value={index}>{location.city}</option>

    })

    return (
        <>
            <form className="form" onSubmit={handleSubmit}>
                <input id='form-name' type="text" placeholder="Name" name="name" onChange={handleChange} value={attraction.name} />
                <select id='form-select' name="location" onChange={handleLocation} defaultValue="select-location">
                    <option disabled value="select-location">Select a City</option>
                    {locationOptions}

                </select>
                <textarea id='form-description' placeholder="Description" name="description" onChange={handleChange} value={attraction.description} />
                <select id='form-type' name="attractionType" onChange={handleChange} defaultValue="select-attraction-type">
                    <option disabled value="select-category">Select A Category</option>
                    <option value="MUSEUM">Museum</option>
                    <option value="PARK">Park</option>
                    <option value="SAFARI_PARK">Safari Park</option>
                    <option value="ZOO">Zoo</option>
                    <option value="ENTERTAINMENT">Entertainment</option>
                    <option value="HISTORICAL">Historical</option>
                    <option value="NATIONAL_TRUST">National Trust</option>
                    <option value="VISITOR_CENTRE">Visitor Centre</option>
                    <option value="CASTLE">Castle</option>

                </select>
                <textarea id='address' placeholder="Address" name="address" onChange={handleChange} value={attraction.address} />
                <input id='form-hours' type="text" placeholder="Opening Hours" name="openingHours" onChange={handleChange} value={attraction.openingHours} />
                <input id='image-form' type="text" placeholder="Image Url" name="image" onChange={handleChange} value={attraction.image} />
                <input id='adult-price-form' type="float" placeholder="Adult Price" name="adultEntryPrice" onChange={handleChange} />
                <input id='child-price-form' type="float" placeholder="Child Price" name="childEntryPrice" onChange={handleChange} />
                <input id='concession-price-form' type="float" placeholder="Concession Price" name="concessionEntryPrice" onChange={handleChange} />
                <label>Free Entry For Carers</label>
                <input type="checkbox" name="freeEntryForCarers" onChange={handleChange} value="true"></input>
                <label>Indoor Venue</label>
                <input type="checkbox" name="isIndoors" onChange={handleChange} value="true"></input>


                <button className='add-button' type="submit">Add Attraction</button>
















            </form>
        </>

    )
}

export default AddForm