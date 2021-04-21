import React from 'react'
import logo from '../../assets/logos/baltimore-happy-hour-logo-black.png'

// To verify if user is logged in
import { useAuth } from '../../context/AuthContext'


export default function Nav() {

  const { currentUser, logOut } = useAuth()

  return (
    <div className='nav-header'>
      <img src={logo} className="nav-logo" alt="Baltimore Happy Hour logo" />
      <div className="nav-brand-header">Baltimore Happy Hours</div>

      {currentUser && (
        <button className="log-out" onClick={logOut}>Log Out</button>
      )}

    </div>
  )
}
