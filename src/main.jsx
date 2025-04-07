import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Error from './components/Error.jsx'
import Body from './components/Body.jsx'
import RestaurantMenu from './components/RestaurantMenu.jsx'
import { lazy, Suspense } from 'react'
//import Grocery from './components/Grocery.jsx'


const Grocery=lazy(()=>import('./components/Grocery.jsx'))

const appRouter= createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',

        element:<Body/>
      },
      {
        path:'/about',
        element:<About/>
      },
      {
        path:'/contact',
        element:<Contact/>
      },
      {
        path:'/grocery',
        element:(<Suspense fallback={<h2>Loading.....</h2>}>
          <Grocery/>
          </Suspense>
        ),
      },
      {
        path:'/restaurants/:resId',
        element:<RestaurantMenu/>
      }
    ],
    errorElement:<Error/>
  },
  
])

createRoot(document.getElementById('root')).render(
  
   <RouterProvider router={appRouter}/>

  )




//Children is made here to make Header intact while all the pages inside the children changes acc. to the Route



