import React from 'react'
import styled, { css } from 'styled-components';
import { deleteAttraction, editAttraction } from '../services/services';
import EditForm from './EditForm';

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

const SelectedAttraction = ({ removeAttraction, selectedAttraction, goBackToList, locations, updateAttraction }) => {

    const handleDelete = () => {
        deleteAttraction(selectedAttraction.id).then(() => {
            removeAttraction(selectedAttraction.id);
        }).then(() => {
            goBackToList();
        })
    }




    return (


        <>

        <div className='attraction-info'>
            <h1> {attraction.name}</h1>
            <img src={'https://i.ibb.co/MPPJbKX/dundee.jpg'}/>
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
            {/* logic needed to produce a symbol based on whether or not the attraction has these accesibility features. */}
        </div>
        <div> 
            {attraction.wheelchairAccessible ? <img src ={''} /> :  null} 
        </div>
        <div>
            {attraction.epilepsyFriendly ? <img src={''}/>: null}
        </div>
        <div>
            {attraction.hasQuietRoom ? <img src={''}/> : null}
        </div>
        <div>
        {attraction.hasParking ? <img src={''}/> : null}
        </div>
        <div>
        {attraction.hasHeadphones ? <img src={''}/> : null}
        </div>


        <Button primary onClick={goBackToList}>Back</Button>


            <Button onClick={handleDelete}>Delete</Button>

            <EditForm selectedAttraction={selectedAttraction} locations={locations} updateAttraction={updateAttraction} />


        </>
    )
}

export default SelectedAttraction