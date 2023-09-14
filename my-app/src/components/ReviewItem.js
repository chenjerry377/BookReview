import React from 'react'
import { FaTrash, FaEdit } from "react-icons/fa"

const ReviewItem = ({handleEdit, handleDelete, review}) => {
    return(
        <div className = "reviewItem">
            <h2>{review.book}</h2>
            <p>{review.review}</p>
            <div className = "buttons">
                <button onClick={() => handleDelete(review.id)}>
                    <FaTrash />
                </button>
                <button onClick ={() => handleEdit(review.id)}>
                    <FaEdit />
                </button >
            </div>
        </div>
    )
}

export default ReviewItem