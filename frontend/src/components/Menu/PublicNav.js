import React from 'react'
import {Link} from 'react-router-dom';

export default function PublicNav() {
  return (
    <>
        <Link className="btn btn-outline-primary me-md-2" to="/signin">sign in</Link>
    </>
  )
}
