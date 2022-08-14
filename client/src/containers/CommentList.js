import React from 'react'
import Comment from '../components/Comment'
import { useState } from 'react'
import { postComment } from '../services/services'


const CommentList = ({ comments, user, attraction, addNewComment }) => {



    const [addComment, setAddComment] = useState({
        name: user.name,
        attraction: attraction,
        rating: 0.0,
        review: ""
    })

    const handleChange = (event) => {

        let objectKey = event.target.name;
        let copiedComment = { ...addComment };
        copiedComment[objectKey] = event.target.value;
        setAddComment(copiedComment);

    }

    const handleSubmit = (event) => {
        console.log("we clicked submit");
        event.preventDefault();
        const tempFormData = addComment;
        tempFormData["rating"] = parseFloat(tempFormData["rating"]);
        console.log(tempFormData);
        postComment(tempFormData).then((data) => {
            addNewComment(data)
        })
        setAddComment({
            name: user.name,
            attraction: attraction,
            rating: 0.0,
            review: ""
        });

    }

    // create a list of comments

    const filteredComments = comments.filter(comment => comment.attraction.id == attraction.id);

    const commentNodes = filteredComments.map((comment, index) => {
        return <Comment key={index} index={index} comment={comment} />
    })
    return (
        <>
            <div>{commentNodes}</div>
            <form className="form" onSubmit={handleSubmit}>

                <input type="float" placeholder="rating" name="rating" onChange={handleChange} value={addComment.rating} />
                <textarea name="review" placeholder="What did you think of this place?" onChange={handleChange} value={addComment.review} />



                <button type="submit">Add review</button>
            </form>
        </>

    )
}

export default CommentList