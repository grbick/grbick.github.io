import React from 'react'
import './welcomeModal.scss'

const WelcomeModal = ({setWelcome}) => {
  return (
    <div className='welcomeModal'>
        <div>
        <h1>Welcome!</h1>
        <button onClick={()=>setWelcome(false)}>Continue to page</button>
        </div>
    </div>
  )
}

export default WelcomeModal