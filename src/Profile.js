import React,{useContext} from 'react'
import { myContext } from './context/UserContext'

const Profile = () => {
   
    const {user} = useContext(myContext) ;
    console.log("profile user",user)
  return (
    <div>
        My profile name is {user}
    </div>
  )
}

export default Profile