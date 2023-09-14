import React, {useState} from "react";
import './App.css';
import Header from './components/Header';
import Form from './components/Form'
import ReviewList from './components/ReviewList'
import { v4 as uuidv4 } from "uuid";

function App() {
  const [reviews, setReviews] = useState([])
  const [form, setForm] = useState({book: "", review: "", id: 
  uuidv4()})
  const [editing, setEditing] = useState(false);
  return (
    <div className = "app">
      <Header />
      <Form 
        editing = {editing}
        form = {form} 
        reviews = {reviews} 
        setEditing = {setEditing}
        setForm = {setForm} 
        setReviews = {setReviews}/>
      <ReviewList reviews = {reviews} setForm = {setForm} setEditing = {setEditing} setReviews = {setReviews}/>
    </div>
  );
}

export default App;

