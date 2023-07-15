import React from 'react'
import { Link } from 'react-router-dom';

function Error() {
  return (
    <div className='error-page'>
    <div className='error-text'>
      <h1>404</h1>
      <p>Opps, the page has been abducted by aliens.</p>
      <button><Link to="/"> Back to Home</Link></button>
    </div>
    </div>
  )
}

export default Error