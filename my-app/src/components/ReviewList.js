import React from 'react';
import ReviewItem from './ReviewItem';

const ReviewList = ({reviews, setReviews, setForm, setEditing}) => {

    const handleDelete = (id) => {
        const updatedReviews = reviews.filter(review => review.id !== id)
        setReviews(updatedReviews)
    }

    const handleEdit = (id) => {
        const editedPost = reviews.filter(review => review.id === id)
        setForm(editedPost[0])
        setEditing(true)
    }

    return (
        <div className = "reviewList">
            <h2>Reviews</h2>
            {reviews.map((review) => (
                <ReviewItem 
                    key={review.id} 
                    review = {review} 
                    handleDelete = {handleDelete}
                    handleEdit = {handleEdit}
                />
            ))}
        </div>
    )
}

export default ReviewList