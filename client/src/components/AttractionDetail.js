import React from 'react'
import styled, { css } from 'styled-components';
import { deleteAttraction, editAttraction } from '../services/services';
import { Link } from 'react-router-dom'
import CommentList from '../containers/CommentList';
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

    const findCommentsForThisAttraction = () => {
        const commentsForThisAttraction = comments.filter(comment => comment.attraction[0].id == attraction.id);
        console.log(commentsForThisAttraction);
        return commentsForThisAttraction;
    }

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

                <h1> {attraction.name}</h1>
                <img src={attraction.image} />

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
                    <p>{attraction.isIndoors ? <b>Indoor Facilities</b> : null}</p>
                </div>
                <div>    
                    <p>{attraction.isBusy ? <b> Currently is Busy</b> : <b> Currently is Quiet</b>} </p>
                </div>    
                
                <p> <b>Attraction Type:</b> {attraction.attractionType}</p>
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

            <MapContainer 
            zoom={1}
            style={{ height: '50vh', width: '50vh'}}
             > 
            <TileLayer
                 attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                 />
            <Marker position={[51.505, -0.09]}>
             <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
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