import React from 'react'

const Comment = ({ comment, index }) => {
    return (
        <div>
            <h3>Name: {comment.name}</h3>
            <p>Rating: {comment.rating}</p>
            <p>{comment.review}</p>

        </div>
    )
}

export default Comment