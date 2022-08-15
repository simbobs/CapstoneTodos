import React from 'react'
import styled, { css } from 'styled-components';
import { deleteAttraction, editAttraction } from '../services/services';
import { Link } from 'react-router-dom'
import CommentList from '../containers/CommentList';
import { useState } from 'react';
// import StarRatings from './react-star-ratings';

import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'

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

    return (

        <>

            <div className='attraction-info'>

                <h1> {attraction.name}</h1>
                <img src={attraction.image} />

                <p>{stars} stars out of 5</p>

                {/* <StarRatings
                    rating={stars}
                    starRatedColor="blue"
                    numberOfStars={5}
                    name='rating'
                /> */}

                <p> <b>About:</b> {attraction.description}</p>
                <p> <b>Address:</b> {attraction.address}</p>
                <p> <b>Adult:</b> £{attraction.adultEntryPrice}</p>
                <p> <b>Child:</b> £{attraction.childEntryPrice}</p>
                <p> <b>Concession:</b> £{attraction.concessionEntryPrice}</p>
                <div>
                    {attraction.freeEntryForCarers ? <b>Free For Carers</b> : null}
                </div>
                <p> <b>Opening Hours:</b> {attraction.openingHours}</p>
                <div>
                    {attraction.indoors ? <b>Indoor Facilities</b> : null}
                </div>
                <p> <b>Attraction Type:</b>{attraction.attractionType}</p>

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