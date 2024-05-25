import React from 'react';
import { Link } from 'react-router-dom';
import "./Book.css";

const Book = ({ book, onBack, onNext }) => {
  return (
    <div className="book-card" key={book.id}>
            <div className="book-header">
              <img src={book.volumeInfo.imageLinks.smallThumbnail} alt={book.volumeInfo.title} />
              <div className="book-info">
                <h3 className="book-title">{book.volumeInfo.title}</h3>
                <p className="book-author">{book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Unknown Author'}</p>
                <div className="book-rating">
                  <span>⭐ {book.volumeInfo.averageRating ? book.volumeInfo.averageRating : 'N/A'}</span>
                </div>
                <div className="book-genres">
                  {book.volumeInfo.categories && book.volumeInfo.categories.map((genre, index) => (
                    <span key={index} className="genre">{genre}</span>
                  ))}
                  <span className="pages">{book.volumeInfo.pageCount} pages</span>
                </div>
              </div>
            </div>
            <div className="book-description">
              <p>Book description goes here. This is a brief summary of the book's plot and key points...</p>
            </div>
            <div className="book-actions">
              <button className="btn" onClick={() => onBack}>Back</button>
              <button className="btn" onClick={() => onNext}>Next</button>
            </div>
          </div>
  )
}

export default Book