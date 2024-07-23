import React from 'react'
import './Navigation.css'

function Navigation({nav, change, content}) {
  return (
    <header>
      <div>
        <h1>IYAN PALACE</h1>
      </div>
    <nav>
      <ul>
        <li>🏠Home</li>
        <li>✉About</li>
        <li>📞Contact Us</li>
        <li>Review</li>
      </ul>
    </nav>
    <div className='logo'>🛒</div>
    <button>Check Out</button>
    <button>Order Now</button>
    <button>BOOK AN EVENT</button>
    </header>
  )
}

export default Navigation