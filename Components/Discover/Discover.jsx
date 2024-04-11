import React from 'react'
import './Discover.css'
import book_img from '../../assets/book.png'
import play_icon from '../../assets/play-icon.png'

const Discover = ({setPlayState}) => {
  return (
    <div className='discover'>
<div className='discover-left'>
<img src={book_img} alt="" className='discover-img' />
<img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
    
</div>
<div className='discover-right'>
    <h3>FICTIONAL WORLD</h3>
    <h2>Mysterious Events Unfold in Small Town of Willow Creek</h2>
    <p>In one such Mirror World, Earth thrives as a utopian society where advanced technology has eradicated poverty and disease. Here, towering skyscrapers gleam under the sunlight, powered by clean energy harnessed from the depths of the oceans. People live in harmony with nature, and the pursuit of knowledge and creativity knows no bounds.</p>
    <p>Once upon a time, in the heart of a dense forest, there stood a majestic tree known as the Tree of Whispers. Legend had it that this ancient tree possessed the power to communicate with all living beings and had served as a silent witness to the tales of the forest for centuries</p>
</div>
    </div>
  )
}

export default Discover