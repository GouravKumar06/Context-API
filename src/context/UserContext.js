import React, { useState} from 'react'

export const myContext = React.createContext(null);
export const UserContext = (props) => {
    const [user,setUser] = useState("")
  return (
    <myContext.Provider value={{user,setUser}}>
        {props.children}
    </myContext.Provider>
  )
}

