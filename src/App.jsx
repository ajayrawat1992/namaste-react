import './App.css'
import Header from './components/Header';
import Body from './components/Body';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import UserContext from './utils/UserContext';




function App() {

  //const user=useContext(UserContext)
   const [userName,setUserName]=useState(null)
// useEffect(()=>
// {
//     const data={
//       name:"ahay rawar"
//     }
//    setUserName(data.name)

//},[])

  return (    
    <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
    <div className='app'>
      <UserContext.Provider value={{loggedInUser:userName}}>    
   <Header/>   
   </UserContext.Provider>
   <Outlet/>   
    </div>    
    </UserContext.Provider>
  )
}

export default App


