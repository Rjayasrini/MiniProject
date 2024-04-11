import React from 'react'
import './Books.css'
import book_1 from '../../assets/book_1.png'
import book_2 from '../../assets/book_2.png'
import book_3 from '../../assets/book_3.png'
import book_icon_1 from '../../assets/book_icon_1.png'
import book_icon_2 from '../../assets/book_icon_2.png'
import book_icon_3 from '../../assets/book_icon_3.png'
const Books = () => {
  return (
    <div className='books'>
      <div className="book">
           <img src={book_1} alt="" />
           <div className='caption'>
            <img src={book_icon_1} alt="" />
            <p>Summary of Journey to the End of the Earth depicts the gravity of climate change and its effects on our lives. Our comfortable lifestyles and easy accessibility of resources do not allow us to reflect upon the damage we are causing to our environment through our actions. The change in global climate is a cumulative effect, and we become blind to the changes owing to our commitment to rapid economic development. Because of the biodiversity around us in the habitable continents, the minute changes that lead to climate change are not easily noticeable as long as we are able to live comfortably. Antarctica, on the other hand, does not have a complex ecosystem.</p>
           </div>
        </div>

        <div className='book'>
            <img src={book_2} alt="" />
            <div className='caption'>
            <img src={book_icon_2} alt="" />
            <p>In "That Night," four college friends play an innocent Ouija prank on their hostel mate, Sania, which tragically ends in her death. Sworn to secrecy, they carry the burden of their dark secret for two decades. As the story unfolds, each friend reveals their own guilt-ridden secrets from that night.whether the events are orchestrated by a hacker or if Sania's vengeful spirit has returned. The book delivers a gripping blend of suspense, horror, and betrayal, well-developed characters, and a narrative that immerses readers until the very end. It's an engrossing and chilling tale that captivates from start to finish.</p>
           </div>
          </div>

    <div className='book'>
          <img src={book_3} alt="" />
          <div className='caption'>
            <img src={book_icon_3} alt="" />
            <p>"In 'You Live Only Once', Alara searches for her missing mother, Elisha, alongside Aarav, a bank intern, and Ricky, Elisha's childhood friend. Set in vibrant Goa, the story delves into their personal struggles and desires, ultimately revealing that life's true essence lies in living to the fullest. As they navigate their journeys, they realize the depth of their connections and the importance of embracing every moment. Stuti's evocative writing vividly captures the essence of Goa, making this novel a compelling exploration of love, loss, and self-discovery."</p>
           </div>
     </div>
</div>
  )
}

export default Books