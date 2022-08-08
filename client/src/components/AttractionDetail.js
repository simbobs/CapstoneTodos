import React from 'react'

const SelectedAttraction = ({ attraction, goBackToList }) => {
    return (


        <>
            <h1>{attraction.name}</h1>
            <button onClick={goBackToList}>Back</button>
        </>
    )
}

export default SelectedAttraction