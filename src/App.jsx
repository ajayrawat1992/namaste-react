import './App.css'
import Header from './components/Header';
import Body from './components/Body';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import UserContext from './utils/UserContext';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';



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
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
    <div className='app'>
      <UserContext.Provider value={{loggedInUser:userName}}>    
   <Header/>   
   </UserContext.Provider>
   <Outlet/>   
    </div>    
    </UserContext.Provider>
    </Provider>
  )
}

export default App


