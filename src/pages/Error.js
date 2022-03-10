import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='error-page'>
      <h1>opps!!! it's a dead end</h1>
      <Link to="/" className='btn-error'>Go back</Link>
    </div>
  )
}

export default Error