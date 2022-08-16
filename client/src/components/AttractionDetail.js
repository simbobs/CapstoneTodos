import React from 'react'
import styled, { css } from 'styled-components';
import { deleteAttraction, editAttraction } from '../services/services';
import { Link } from 'react-router-dom'

import '../static/AttractionDetail.css'


import CommentList from '../containers/CommentList';

import { useState } from 'react';
// import StarRatings from './react-star-ratings';


import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import'leaflet/dist/leaflet.css';


const Button = styled.button`
background: transparent;
border-radius: 3px;
border: 2px solid palevioletred;
color: palevioletred;
margin: 0 1em;
padding: 0.25em 1em;

${props =>
        props.primary &&
        css`
  background: palevioletred;
  color: white;
`};
`


const SelectedAttraction = ({ removeAttraction, attraction, goBackToList, locations, updateAttraction, comments, user, addNewComment }) => {



    const findAverageRating = () => {
        const filteredComments = comments.filter(comment => comment.attraction.id == attraction.id);

        let averageRating = filteredComments.reduce((acc, current) => (acc + current.rating), 0) / filteredComments.length;

        if (!averageRating) {
            averageRating = 3.5;
        }

        return averageRating;
    }

    const stars = findAverageRating();


    const handleDelete = () => {
        deleteAttraction(attraction.id).then(() => {
            removeAttraction(attraction.id);
        }).then(() => {
            goBackToList();
        })

    }

    const busList = attraction.busRoutes.map((bus) => {
        return <ul>{bus}</ul>

    })



    return (

        <>
            

            <div className='attraction-info'>


                <div class="vl"></div>

                
                <iframe className='image' width='350px' height='200px'
                    id="pic" src={attraction.image}
                    marginwidth="0" marginheight="0" frameborder="0" vspace="0" hspace="0">
                </iframe>
                <h1 className='detail-header'> {attraction.name}</h1>
                <p className='attraction-type'>{attraction.attractionType}  |  {stars} stars out of 5</p>

                <p id='desc'>{attraction.description}</p>
                <hr className='line' />
                <p id='opening-hours'><b>OPENING HOURS:&nbsp;&nbsp;</b>{attraction.openingHours}</p>
                <hr className='line' />

                <p id='entry-heading'>ENTRY PRICES:</p>
                <p id='prices'>Adult: £{attraction.adultEntryPrice}&nbsp;  &nbsp; Child: £{attraction.childEntryPrice}</p>
                {/* <p> <b>Child:</b> £{attraction.childEntryPrice}</p> */}
                <p id='concession-price'>Concession: £{attraction.concessionEntryPrice}</p>

                    {attraction.freeEntryForCarers ? <b>Free for Carers</b> : null}
                    <hr className='line' />
                
                <div>
                    <p>{attraction.isIndoors ? <b>Indoor Facilities</b> : null}</p>
                    <hr className='line' />
                </div>

                <p> <b>Address:</b> {attraction.address}</p>

                <div>
                    <p>{attraction.isBusy ? <b> Currently is Busy</b> : <b> Currently is Quiet</b>} </p>
                </div>


                <p> <b>Bus Routes:</b>{busList}</p>



            </div>
            <div>
                {attraction.wheelchairAccessible ? <b>Wheelchair Accessible</b> : null}
            </div>
            <div>
                {attraction.epilepsyFriendly ? <b>Epilepsy Friendly</b> : null}
            </div>
            <div>
                {attraction.hasQuietRoom ? <b>Has A Quiet Room</b> : null}
            </div>
            <div>
                {attraction.hasParking ? <b>Parking Available</b> : null}
            </div>
            <div>
                {attraction.hasHeadphones ? <b>Sensory Headphones Available</b> : null}
            </div>



            <p> <b>Address:</b> {attraction.address}</p>
            <div id="map">


                <MapContainer center={[attraction.latitude, attraction.longitude]} zoom={16} scrollWheelZoom={false}>

                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[attraction.latitude, attraction.longitude]}>
                        <Popup>{attraction.name}</Popup>
                    </Marker>
                </MapContainer>


            </div> 


       

   

            <CommentList comments={comments} user={user} attraction={attraction} addNewComment={addNewComment} />

            <Button primary onClick={goBackToList}>Back</Button>


            <Button onClick={handleDelete}>Delete</Button>

            <Link to="/edit">Edit</Link>




        </>
    )
}

export default SelectedAttraction