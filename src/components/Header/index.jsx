import React from 'react'
import './header.scss'
import SearchInput from '../SearchInput'
import { useLocation, Link, useNavigate } from 'react-router-dom'


const Header = () => {
  const navigate = useNavigate()
  const path = useLocation().pathname
  return (
    <div className='header'>
      <Link to='/'><h1 className='logo'>Rick & Morty</h1></Link>
      {path === '/'&&<SearchInput/>}
      {path.includes('character')&& <button onClick={()=>navigate(-1)}>Go back</button>}
    </div>
  )
}

export default Header