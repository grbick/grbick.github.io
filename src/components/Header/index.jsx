import React from 'react'
import './header.scss'
import SearchInput from '../SearchInput'
import { useLocation, Link } from 'react-router-dom'


const Header = () => {

  const path = useLocation().pathname
  return (
    <div className='header'>
      <Link to='/'><h1 className='logo'>Rick & Morty</h1></Link>
      {path === '/'&&<SearchInput/>}
    </div>
  )
}

export default Header