import React, { useContext } from 'react'
import { UserContext, UserProvider } from '../context/UserContext'

const Profile = () => {

  const {user} = useContext(UserContext)
  console.log("Profile",user);
  
  return (
    <div>
    </div>
  )
}

export default Profile
