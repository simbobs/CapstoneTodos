import React from 'react'
import styled, { css } from 'styled-components';
import { deleteAttraction } from '../services/services';

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

const SelectedAttraction = ({ removeAttraction, attraction, goBackToList }) => {

    const handleDelete = () => {
        deleteAttraction(attraction.id).then(() => {
            removeAttraction(attraction.id);
        }).then(() => {
            goBackToList();
        })
    }


    return (


        <>
            <h1>{attraction.name}</h1>
            <Button primary onClick={goBackToList}>Back</Button>
            <Button onClick={handleDelete}>Delete</Button>
        </>
    )
}

export default SelectedAttraction