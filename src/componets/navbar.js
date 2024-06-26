import { signOut } from 'firebase/auth'
import React, { useContext } from 'react'
import { auth } from '../firebase'
import { AuthContext } from '../context/Authcontext'

const Navbar = () => {
  const {currentUser} =useContext(AuthContext)
  return (
    <div className='navbar'>
      <span className='logo'>Lets chat</span>
    <div className='user'>
      <img src= {currentUser.photoURL}/>
      <span>{currentUser.displayName}</span>
<button onClick={()=>signOut(auth)}>logout</button>
    </div>
    </div>
  )
}

export default Navbar
