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
            <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=PT+Sans" />
            <link href='https://fonts.googleapis.com/css?family=Baloo Thambi 2' rel='stylesheet'></link>

            <div className='attraction-info'>


                <div class="vl"></div>
                <img id="image" width="90%" height="auto" src={attraction.image} />
                <h1 className='detail-header'> {attraction.name}</h1>
                <p>{stars} stars out of 5</p>
                <p className='attraction-type'>{attraction.attractionType}</p>
                <p id='desc'>{attraction.description}</p>
                <hr className='line' />
                <p id='opening-hours'><b>OPENING HOURS:</b>{attraction.openingHours}</p>
                <hr className='line' />
                <p>ENTRY PRICES:</p>

                {/* <StarRatings
                    rating={stars}
                    starRatedColor="blue"
                    numberOfStars={5}
                    name='rating'
                /> */}


                <p> <b>Adult:</b> £{attraction.adultEntryPrice}</p>
                <p> <b>Child:</b> £{attraction.childEntryPrice}</p>
                <p> <b>Concession:</b> £{attraction.concessionEntryPrice}</p>
                <div>
                    {attraction.freeEntryForCarers ? <b>Free For Carers</b> : null}
                </div>
                <p> <b>Opening Hours:</b> {attraction.openingHours}</p>
                <div>
                    <p>{attraction.isIndoors ? <b>Indoor Facilities</b> : null}</p>
                </div>

                <p> <b>Address:</b> {attraction.address}</p>

                <div>
                    <p>{attraction.isBusy ? <b> Currently is Busy</b> : <b> Currently is Quiet</b>} </p>
                </div>


                <p> <b>Bus Routes:</b>{busList}</p>



            </div>
            <div>
                {attraction.wheelchairAccessible ? <img src={''} /> : null}
            </div>
            <div>
                {attraction.epilepsyFriendly ? <img src={''} /> : null}
            </div>
            <div>
                {attraction.hasQuietRoom ? <img src={''} /> : null}
            </div>
            <div>
                {attraction.hasParking ? <img src={''} /> : null}
            </div>
            <div>
                {attraction.hasHeadphones ? <img src={''} /> : null}
            </div>




            <div id="map">


                <MapContainer center={[56.45739364245968, -2.966974304745474]} zoom={16} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[56.45739364245968, -2.966974304745474]}>
                        <Popup>{attraction.name}</Popup>
                    </Marker>
                </MapContainer>


       

            </div>



            <Button primary onClick={goBackToList}>Back</Button>


            <Button onClick={handleDelete}>Delete</Button>

            <Link to="/edit">Edit</Link>
            <CommentList comments={comments} user={user} attraction={attraction} addNewComment={addNewComment} />




        </>
    )
}

export default SelectedAttraction