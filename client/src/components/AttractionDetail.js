import React from 'react'
import styled, { css } from 'styled-components';
import { deleteAttraction } from '../services/services';
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

const SelectedAttraction = ({ removeAttraction, selectedAttraction, goBackToList, locations }) => {

    const handleDelete = () => {
        deleteAttraction(selectedAttraction.id).then(() => {
            removeAttraction(selectedAttraction.id);
        }).then(() => {
            goBackToList();
        })
    }


    return (


        <>
            <h1>{selectedAttraction.name}</h1>
            <Button primary onClick={goBackToList}>Back</Button>

            <Button onClick={handleDelete}>Delete</Button>

            <EditForm selectedAttraction={selectedAttraction} locations={locations} />

        </>
    )
}

export default SelectedAttraction