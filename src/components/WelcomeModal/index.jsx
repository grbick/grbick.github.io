import React from 'react'
import './welcomeModal.scss'

const WelcomeModal = ({setWelcome}) => {
  return (
    <div className='welcomeModal'>
        <div>
        <h2>Welcome!</h2>
        <p>This is a simple Website built with React.</p>
        <p>It contains some basic functionalities, fetching API data, displaying that data, pagination, filtering, routing etc.</p>
        <h4>Hope you enjoy it!</h4>
        <button onClick={()=>setWelcome(false)}>Continue to page</button>
        </div>
    </div>
  )
}

export default WelcomeModal