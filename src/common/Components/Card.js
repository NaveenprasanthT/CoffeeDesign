import React from 'react'
import './styles/Card.css'

const Card = () => {
  return (
    <div className='card-container'>
        <div className='card-title'>
          <h1>Talk to our <span>design</span> expert <span>!</span></h1>
          <p>Find out how best design services can empower your business.</p>
        </div>
        <div className='card-btn'>
            <button className='btn'>
              <p>Get In Touch</p>
            </button>
        </div>
    </div>
  )
}

export default Card