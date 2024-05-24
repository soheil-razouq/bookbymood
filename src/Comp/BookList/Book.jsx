import React from 'react';
import { Link } from 'react-router-dom';
import "./Book.css";

const Book = ({ book, onBack, onHide, onNext }) => {
  return (

    // <div class="product-item">
    //   <div class="product-img">
    //     <img src={book.volumeInfo.imageLinks.smallThumbnail} alt={book.volumeInfo.title} />
    //     <div>
    //       <button type="button" class="add-btn">More Information</button>
    //     </div>
    //   </div>
    //   <div class="product-content">
    //     <a href="#" class="book-title">{book.volumeInfo.title}</a>
    //     <p class="author">by <span>{book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Unknown Author'}</span></p>
    //     <div>
    //       {/* <ul class="rating">
    //         <li><i class="fas fa-star"></i></li>
    //         <li><i class="fas fa-star"></i></li>
    //         <li><i class="fas fa-star"></i></li>
    //         <li><i class="fas fa-star"></i></li>
    //         <li><i class="fas fa-star-half-alt"></i></li>
    //         <li>(120 review)</li>
    //       </ul> */}
    //       <span class="price">{book.volumeInfo.pageCount} pages</span>
    //     </div>
    //   </div>
    // </div>

    <div className="book-card">
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
        <button className="btn" onClick={()=>onBack }>Back</button>
        <button className="btn" onClick={()=>onHide }>Hide</button>
        <button className="btn" onClick={()=>onNext }>Next</button>
      </div>
    </div>

  )
}

export default Book