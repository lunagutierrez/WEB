import { useState } from 'react';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import CreateAccount from './views/create_account/CreateAccount';
import LogIn from  './views/log_in/LogIn';
import AccountInfo from './views/account_info/AccountInfo';
import ErrorPage from './views/error_page/ErrorPage';
import Landing from './views/landing/Landing';
import Layout from './components/layout/Layout';

import 'bootstrap/dist/css/bootstrap.min.css';

const routes = [
  {
  errorElement: <ErrorPage/>
  },
  {
    path: '/printlab',
    element: <Layout/>,
    children: [
      {
        path: 'landing',
        element: <Landing />,
      },
      {
        path: 'account_info',
        element: <AccountInfo/>
      },
      {
        path: 'about_us',
        element: <AboutUs/>
      }
    ],
  },
  {
    path: '/forms',
    errorElement: <ErrorPage/>,
    children: [
      {
        path: 'login',
        element: <LogIn/>
      },
      {
        path: 'create_account',
        element: <CreateAccount/>
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
  );
};

export default App
