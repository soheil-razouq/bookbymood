import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';
import "./BookList.css";


function BookList() {
  const [Books, setBooks] = useState([]);
  const [displayedBooks, setDisplayedBooks] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const MAX_LENGTH = 300;

  const navigate = useNavigate();
  const { label } = useParams();
  const Query = label;
  const ApiKey = "AIzaSyDIUO77JD9iF08_KLEfA-X1ekxm6YDZPiM"

  const BackToHome = (path) => {
    navigate(path);
  }

  const toggleExpand = () => setIsExpanded(!isExpanded);

  const GetAllBooks = async () => {
    try {
      const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${Query}&key=${ApiKey}&maxResults=20`);
      const data = response.data;
      setBooks(data.items);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setDisplayedBooks(displayedBooks - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex + 4 < Books.length) {
      setCurrentIndex(currentIndex + 1);
      setDisplayedBooks(displayedBooks + 1);
    }
  };

  useEffect(() => {
    GetAllBooks();
    console.log(Books)
  }, [Query, ApiKey]);

  return (
    <>
      <div className="navsection">
        <nav className="navbar">
          <div className="logo-section">
            <img id='logo' src="../logo.png" alt="book logo" />
          </div>
          <div className="current-feeling">
            <h5>Feeling now: {label}</h5>
          </div>
          <div className="change-mood">
            <button onClick={() => BackToHome('/')}>
              Change Mood
            </button>
          </div>
        </nav>
      </div>

      <div className="product-container">
        {Books.length > 0 ? Books.slice(currentIndex, displayedBooks).map((bookiteme, index) => (
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
                  <span className="pages">{bookiteme.volumeInfo.pageCount} Pages</span>
                </div>
              </div>
            </div>
            <div className="book-description">
              <p>
                {isExpanded ? bookiteme.volumeInfo.description : `${bookiteme.volumeInfo.description.substring(0, MAX_LENGTH)}...`}
                <button onClick={toggleExpand}>
                  {isExpanded ? 'Show Less' : 'Show More'}
                </button>
              </p>
            </div>
            <div className="book-actions">
              <button className="btn" onClick={() => handleBack()}>Back</button>
              <button className="btn" onClick={() => handleNext()}>Next</button>
            </div>
          </div>
        ))
          :
          <div className="nobook">
            <h1>No Book Found</h1>
          </div>
        }
      </div>
      < div className="footer">
        <p>Made by Soheil ❤️</p>
      </div>
    </>
  )
}
export default BookList;