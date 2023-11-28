import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Landing from './views/landing/Landing';
import Prod from './views/prod/Prod';
import Cart from './views/cart/Cart';
import Store from './views/store/Store';


const routes = [
  {
    path: '/printlab',
    element: <Layout/>,
    errorElement: <h1>Not Found</h1>,
    children: [
      {
        path: 'landing',
        element: <Landing />,
      },
      {
        path: 'cart',
        element: <Cart />,
      }, 
      {
        path: 'store/prod/:id',
        element: <Prod />,
      }, 
      {
        path: 'store',
        element: <Store />,
      }
    ],
  }
]
  
function App() {
  const [count, setCount] = useState(0)

  const router = createBrowserRouter(
    routes
  )


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App