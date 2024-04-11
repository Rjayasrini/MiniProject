import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero'; // Import Hero component
import Books from './Components/Books/Books';
import Title from './Components/Title/Title';
import Discover from './Components/Discover/Discover';
import Authors from './Components/Authors/Authors';
import Rating from './Components/Rating/Rating';
import Footer from './Components/Footer/Footer'; // Import Footer component
import VideoPlayer from './Components/VideoPlayer/VideoPlayer';
const App = () => {

  const [playState, setPlayState] = useState(false);
  // Define state for user reviews
  const [reviews, setReviews] = useState([]);

  // Function to handle submission of user review
  const handleSubmitReview = (review) => {
    setReviews([...reviews, review]);
  };

  return (
    <div>
    <div>
      <Navbar />
      <Hero reviews={reviews} onSubmitReview={handleSubmitReview} /> {/* Pass reviews state and onSubmitReview function to Hero component */}
      <div className='container'>
        <Title subTitle='Fictitious Books' title='Spend Your Time' />
        <Books />
        <Discover setPlayState={setPlayState}/>
        <Title subTitle='Gallery' title='Famous Authors' />
        <Authors />
        {/* Removed UserReviews component */}
        <Title subTitle='User Review' title='Get in touch' />
        </div>
        <Rating />
      <Footer />
    </div>
    <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  );
};

export default App;