import React from 'react'

const Comment = ({ comment, index }) => {
    return (
        <>

        <h3 id='comment-name'>Name: {comment.name}</h3>
        <div className='comments-section'>
            
            <p>Rating: {comment.rating}</p>
            <p>{comment.review}</p>

        </div>
        </>
    )
}

export default Comment