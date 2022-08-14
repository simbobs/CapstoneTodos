import React from 'react'
import styled, { css } from 'styled-components';
import AttractionList from '../containers/AttractionList';
import { deleteAttraction, editAttraction } from '../services/services';
import EditForm from './EditForm';
import { Link } from 'react-router-dom'
import CommentList from '../containers/CommentList';

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

            <Button onClick={findCommentsForThisAttraction}>Try me</Button>


            <Button primary onClick={goBackToList}>Back</Button>


            <Button onClick={handleDelete}>Delete</Button>

            <Link to="/edit">Edit</Link>
            <CommentList comments={comments} user={user} attraction={attraction} addNewComment={addNewComment} />




        </>
    )
}

export default SelectedAttraction