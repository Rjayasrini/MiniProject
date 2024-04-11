import React from 'react';
import './Authors.css'; // Import the external CSS file

const Authors = () => {
  return (
    <div className='authors'>
      <div className='gallery'>
        
           
            <div className="w3-row-padding w3-padding-32">
              {/* First set of images */}
              <div className="w3-third w3-margin-bottom gallery">
                <img src="https://i.pinimg.com/564x/7f/d0/19/7fd019deab14d43fb47b17c9a49ed707.jpg" alt="New York" className="w3-hover-opacity"/>
                <div className="w3-container w3-white">
                  <p><b>Leo Tolstoy</b></p>
                  
                  <a href='Book1.html'>Books</a>
                </div>
              </div>
              <div className="w3-third w3-margin-bottom gallery">
                <img src="https://i.pinimg.com/564x/79/cc/29/79cc29418e37fc63a4b1bcbaa1cf80b3.jpg" alt="Paris" className="w3-hover-opacity"/>
                <div className="w3-container w3-white">
                  <p><b>Agatha Christie</b></p>
                  
                  <a href='Book2.html'>Books</a>
                </div>
              </div>
              <div className="w3-third w3-margin-bottom gallery">
                <img src="https://i.pinimg.com/originals/07/a0/0b/07a00bced55c0eeef67db36b978f2b5e.jpg" alt="San Francisco" className="w3-hover-opacity"/>
                <div className="w3-container w3-white">
                  <p><b>Debbie Macomber</b></p>
                  
                  <a href='Book3.html'>Books</a>
                </div>
              </div>
              
              {/* Second set of images */}
              <div className="w3-third w3-margin-bottom gallery">
                <img src="https://i.pinimg.com/564x/d5/cf/be/d5cfbe3e5b29e8046df977c51dc8d2e3.jpg" alt="Debbie Macomber" className="w3-hover-opacity"/>
                <div className="w3-container w3-white">
                  <p><b>J. K. Rowling</b></p>
                  
                  <a href='Book4.html'>Books</a>
                </div>
              </div>
              <div className="w3-third w3-margin-bottom gallery">
                <img src="https://i.pinimg.com/564x/28/58/0f/28580f345fce625c6236f8341627bb15.jpg" alt="David Baldacci" className="w3-hover-opacity"/>
                <div className="w3-container w3-white">
                  <p><b>David Baldacci</b></p>
                  
                  <a href='Book5.html'>Books</a>
                </div>
              </div>
              <div className="w3-third w3-margin-bottom gallery">
                <img src="https://i.pinimg.com/564x/eb/b7/9c/ebb79c345c2b86862778879f125fd288.jpg" alt="Sidney Sheldon" className="w3-hover-opacity"/>
                <div className="w3-container w3-white">
                  <p><b>Dan Brown</b></p>
                  
                  <a href='Book6.html'>Books</a>
                </div>
              </div>
            </div>
          
      </div>
    </div>
  );
}

export default Authors;