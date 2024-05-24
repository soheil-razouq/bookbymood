import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';
import Book from './Book';
import "./BookList.css";


function BookList() {
  const [Books, setBooks] = useState([]);
  const [displayedBooks, setDisplayedBooks] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  const { label } = useParams();
  const Query = label;
  const ApiKey = "AIzaSyDIUO77JD9iF08_KLEfA-X1ekxm6YDZPiM"

  const BackToHome = (path) => {
    navigate(path);
  }

  const GetAllBooks = async () => {
    try {
      const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${Query}&key=${ApiKey}&maxResults=12`);
      const data = response.data;
      setBooks(data.items);
      console.log(Books)
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  // const loadMoreBooks = () => {
  //   setDisplayedBooks(prevDisplayedBooks => prevDisplayedBooks + 4);
  // };



  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setDisplayedBooks(displayedBooks - 1);
    }
  };

  const handleHide = (index) => {
    const updatedBooks = Books.filter((_, bookIndex) => bookIndex !== index);
    setBooks(updatedBooks);
    console.log('hide here')
  };

  const handleNext = () => {
    if (currentIndex + 4 < Books.length) {
      setCurrentIndex(currentIndex + 1);
      setDisplayedBooks(displayedBooks + 1);
      console.log('next here')
    }
  };

  useEffect(() => {
    GetAllBooks();
  }, [Query, ApiKey]);

  useEffect(() => {
    if (Books.length > 0) {
      console.log(Books);
      console.log("img-url : ", Books[0].volumeInfo.imageLinks.smallThumbnail);
    }
  }, [Books]);

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

      <div className="product-container">
        {Books.slice(currentIndex, currentIndex + displayedBooks).map((bookiteme, index) => (
          <div className="book-card" key={index}>
            <div className="book-header">
              <img src={bookiteme.volumeInfo.imageLinks.smallThumbnail} alt={bookiteme.volumeInfo.title} />
              <div className="book-info">
                <h3 className="book-title">{bookiteme.volumeInfo.title}</h3>
                <p className="book-author">{bookiteme.volumeInfo.authors ? bookiteme.volumeInfo.authors.join(', ') : 'Unknown Author'}</p>
                <div className="book-rating">
                  <span>⭐ {bookiteme.volumeInfo.averageRating ? bookiteme.volumeInfo.averageRating : 'N/A'}</span>
                </div>
                <div className="book-genres">
                  {bookiteme.volumeInfo.categories && bookiteme.volumeInfo.categories.map((genre, index) => (
                    <span key={index} className="genre">{genre}</span>
                  ))}
                  <span className="pages">{bookiteme.volumeInfo.pageCount} pages</span>
                </div>
              </div>
            </div>
            <div className="book-description">
              <p>Book description goes here. This is a brief summary of the book's plot and key points...</p>
            </div>
            <div className="book-actions">
              <button className="btn" onClick={() => handleBack()}>Back</button>
              <button className="btn" onClick={() => handleHide()}>Hide</button>
              <button className="btn" onClick={() => handleNext()}>Next</button>
            </div>
          </div>
        ))
        }
        {/* {displayedBooks < Books.length && (
          <div className="load-more-container">
            <button onClick={loadMoreBooks}>Load More</button>
          </div>
        )} */}
      </div>
    </>
  )
}
export default BookList;