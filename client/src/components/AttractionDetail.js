import React from 'react'
import styled, { css } from 'styled-components';
import AttractionList from '../containers/AttractionList';
import { deleteAttraction, editAttraction } from '../services/services';
import EditForm from './EditForm';
import { Link } from 'react-router-dom'
import '../static/AttractionDetail.css'


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

const SelectedAttraction = ({ removeAttraction, attraction, goBackToList, locations, updateAttraction }) => {

    const handleDelete = () => {
        deleteAttraction(attraction.id).then(() => {
            removeAttraction(attraction.id);
        }).then(() => {
            goBackToList();
        })
    }

    return (

        <>
            <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=PT+Sans" />
            <link href='https://fonts.googleapis.com/css?family=Baloo Thambi 2' rel='stylesheet'></link>

            <div className='attraction-info'>

                <div class="vl"></div>
                <img id="image" width="90%" height="auto" src={attraction.image}/>
                <h1 className='detail-header'> {attraction.name}</h1>
                <p className='attraction-type'>{attraction.attractionType}</p>
                <p id='desc'>{attraction.description}</p>
                <hr className='line' />
                <p id='opening-hours'><b>OPENING HOURS:</b>{attraction.openingHours}</p>
                <hr className='line' />
                <p>ENTRY PRICES:</p>
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
                <p> <b>Address:</b> {attraction.address}</p>
                
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

            


            <Button primary onClick={goBackToList}>Back</Button>


            <Button onClick={handleDelete}>Delete</Button>

            <Link to="/edit">Edit</Link>

            {/* <EditForm selectedAttraction={selectedAttraction} locations={locations} updateAttraction={updateAttraction} /> */}


        </>
    )
}

export default SelectedAttraction