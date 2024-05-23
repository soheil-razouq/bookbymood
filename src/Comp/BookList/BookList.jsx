import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';
import "./BookList.css";


function BookList() {
  const [Books, setBooks] = useState([]);
  const navigate = useNavigate();
  const { label } = useParams();
  const Query = label;
  const ApiKey = "AIzaSyDIUO77JD9iF08_KLEfA-X1ekxm6YDZPiM"

  const BackToHome = (path) => {
    navigate(path);
  }

  const GetAllBooks = async () => {
    try {
      const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${Query}&key=${ApiKey}&maxResults=4`);
      const data = response.data;
      setBooks(data.items);
      console.log(Books)
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  useEffect(() => {
    GetAllBooks();
  }, [])

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          Logo
        </div>
        <div className="current-feeling">
          <h4>Feeling now: {label}</h4>
        </div>
        <div className="change-mood">
          <button onClick={() => BackToHome('/')}>
            Change Mood
          </button>
        </div>
      </nav>


      <div class="book read">
        <div class="cover">
          <img src="https://s-media-cache-ak0.pinimg.com/564x/f9/8e/2d/f98e2d661445620266c0855d418aab71.jpg" />
        </div>
        <div class="description">
          <p class="title">Frankenstein<br />
            <span class="author">Mary Shelley</span>
          </p>
        </div>
      </div>

    </>
  )
}
export default BookList;
