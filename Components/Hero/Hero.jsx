import React, { useState, useEffect } from 'react';
import './Hero.css';


const Hero = () => {
  // Define an array of background image URLs
  const backgroundImageUrls = [
    '../../assets/hero1.png',
    '../../assets/hero2.png',
    '../../assets/hero3.png',
    '../../assets/hero4.png',
    '../../assets/hero5.png'
  ];

  // State to hold the current background image URL
  const [backgroundImage, setBackgroundImage] = useState(backgroundImageUrls[0]);

  // Effect to change the background image every 4 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      // Get the index of the next background image
      const nextIndex = (backgroundImageUrls.indexOf(backgroundImage) + 1) % backgroundImageUrls.length;
      // Update the background image
      setBackgroundImage(backgroundImageUrls[nextIndex]);
    }, 4000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [backgroundImage, backgroundImageUrls]);

  return (
    <div className='hero container' style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="hero-text">
        <h1>Unreal Explorations Where Fiction Comes Alive</h1>
        <p>
          <b>"Where Fiction Comes Alive" is a captivating heading for a fictional books website. It suggests a sense of adventure and discovery, inviting readers to embark on imaginative journeys through the pages of books. The essence of the website as a gateway to worlds where fiction springs to life.</b>
        </p>
        
      </div>
    </div>
  );
};

export default Hero;
