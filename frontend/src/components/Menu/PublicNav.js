import React from 'react'
import {Link} from 'react-router-dom';

export default function PublicNav() {
  return (
    <>
        <Link className="btn btn-outline-dark me-md-2 font-weight-bold text-uppercase" to="/signin">sign in</Link>
    </>
  )
}
