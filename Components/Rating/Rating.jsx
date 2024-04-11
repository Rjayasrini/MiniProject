import React, { useState } from 'react';
import './Rating.css';

import mail_icon from '../../assets/mail-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import location_icon from '../../assets/location-icon.png';


const Hero = () => {
  // State for managing reviews
  const [reviews, setReviews] = useState([]);
  const [bookName, setBookName] = useState('');
  const [rating, setRating] = useState(0);

  // Function to handle review submission
  const handleSubmitReview = (e) => {
    e.preventDefault();
    if (!bookName.trim()) {
      alert('Please enter the book name.');
      return;
    }
    if (rating === 0) {
      alert('Please select a rating.');
      return;
    }
    // Add the new review to the reviews array
    setReviews([...reviews, { bookName, rating }]);
    // Reset form fields
    setBookName('');
    setRating(0);
  };

  // Function to handle rating change
  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  return (
    <div className='rating'>
      <div className="rating-col">
        <h3>"Enchanted Escapes: Dive into Fictional Worlds"🚀</h3>
        <p>Discover Snazzy Scroll, your digital escape into the world of fictional wonders. Dive into a curated collection of sustainable reads, where every page turn sparks imagination. Explore new releases and timeless classics without leaving your cozy corner. Join us and let the magic of storytelling transport you to new realms. NovelNook - where every book is an adventure.</p>
        
        <ul>
          <li><img src={mail_icon} alt="" />Contact</li>
          <li><img src={phone_icon} alt="" />12334567890</li>
          <li><img src={location_icon} alt="" />Address</li>
        </ul>
      </div>
      {/* User Reviews Section */}
      <div className="user-reviews-container">
        <h3>User Reviews</h3>
        {reviews.length === 0 ? (
          <p>No reviews yet.</p>
        ) : (
          reviews.map((review, index) => (
            <div key={index} className="review">
              <p><strong>Book Name:</strong> {review.bookName}</p>
              <p className="review-rating"><strong>Rating:</strong> {review.rating}/5</p>
            </div>
          ))
        )}
        <form onSubmit={handleSubmitReview}>
          <label>
            Book Name:
            <input type="text" value={bookName} onChange={(e) => setBookName(e.target.value)} />
          </label>
          <label>
            Rating:
            <div className="star-rating">
              {[...Array(5)].map((_, index) => (
                <span
                  key={index}
                  className={index < rating ? 'star filled' : 'star'}
                  onClick={() => handleRatingChange(index + 1)}
                >
                  ★
                </span>
              ))}
            </div>
          </label>
          <button type="submit">Submit Review</button>
        </form>
      </div>
      {/* End User Reviews Section */}
    </div>
  );
};

export default Hero;
