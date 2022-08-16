import React from 'react'

const Comment = ({ comment, index }) => {
    return (
        <div className="comment">
            <h3>{comment.name}</h3>
            <p>Rating: {comment.rating}</p>
            <p>{comment.review}</p>
            <hr />
        </div>
    )
}

export default Comment