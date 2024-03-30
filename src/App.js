import './App.css';
import { useContext, useState } from 'react';
import { myContext } from './context/UserContext';
import Profile from './Profile';



function App() {
  const [name,setName] = useState("");

  const {user,setUser} = useContext(myContext);

  return (
    <>
      <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
      <button onClick={() => setUser(name)}>Submit</button>
      <h1>Hello {user}</h1>

      <Profile/>
    </>
  );
}

export default App;
