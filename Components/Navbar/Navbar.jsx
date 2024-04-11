import React, { useEffect, useState } from 'react'
import {Link} from 'react-scroll'
import './Navbar.css'
import logo from '../../assets/logo.png'


const Navbar = () => {

  const [sticky, setSticky] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 500 ? setSticky(true) :setSticky(false);
    })
  },[]);
  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
    <img src={logo} alt="" className='logo' />
    <ul>
      <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
      <li><Link to='books' smooth={true} offset={-210} duration={500}>Books</Link></li>
      <li><Link to='discover' smooth={true} offset={-150} duration={500}>Discover</Link></li>
      <li><Link to='authors' smooth={true} offset={-260} duration={500}>Authors</Link></li>
      <li><Link to='rating' smooth={true} offset={-260} duration={500}>Rating</Link></li>
    </ul>
    </nav>
  )
}

export default Navbar