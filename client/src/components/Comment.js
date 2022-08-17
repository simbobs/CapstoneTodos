import React from 'react'

const Comment = ({ comment, index }) => {
    return (
        <>
        
        <div id='user-comment-wrapper'>
            <img id='avatar' src='https://i.ibb.co/Tb6w6ms/avatar.png' alt='anon-avatar-pic'></img>
            <h4 id='comment-name'>Name: {comment.name}</h4>
            <div className='comments-section'>
            
            <p id='rating-score'>Rating: {comment.rating}</p>
            <p id='user-comment'>{comment.review}</p>
        </div>

        </div>

        </>
    )
}

export default Comment