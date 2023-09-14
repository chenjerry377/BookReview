import React, { useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import './Form.css'

export const Form = ({editing, form, reviews, setEditing, setForm, setReviews}) => {

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm({...form, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setReviews([...reviews, form]);
        setForm({book: "", review: "", id: uuidv4()});
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        setEditing(false);
        const updatedReviews = reviews.map((review) => review.id === form.id ? form : review);
        setReviews(updatedReviews);
        setForm({book: "", review: "", id: uuidv4()});
    }

    return (
        <form className = "form" onSubmit={editing ? handleUpdate : handleSubmit}>
            <h2>Review a Book</h2>
            <label htmlFor = "book">Book</label>
            <input 
                type = "text" 
                placeholder = "Book Title" 
                id = "book" 
                name = "book" 
                autoComplete = "off"
                value = {form.book}
                onChange = {handleChange}
            />
            <label htmlFor = "review">Review</label>
            <textarea
                type = "text"
                placeholder = "Book Review"
                id = "review"
                name = "review"
                autoComplete = "off"
                value = {form.review}
                onChange = {handleChange}
            />
            <button type = "Submit">{editing ? "Update" : "Submit"}</button>
        </form>
    )
}

export default Form