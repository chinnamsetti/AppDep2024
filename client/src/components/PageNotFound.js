import React from 'react'
import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <div className='pageNotFoundDiv'>
        <h1> PageNotFound</h1>
        <Link to="/">Go to Sign In</Link>
    </div>
  )
}

export default PageNotFound