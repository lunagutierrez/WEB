import { useState } from 'react';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import CreateAccount from './views/create_account/CreateAccount';
import LogIn from  './views/log_in/LogIn';
import AboutUs from './views/about_us/AboutUs';
import AccountInfo from './views/account_info/AccountInfo';
import ErrorPage from './views/error_page/ErrorPage';
import Landing from './views/landing/Landing';
import Layout from './components/layout/Layout';
import AdminLayout from './components/admin_components/admin_layout/AdminLayout';
import ForgottenPassword from './views/forgotten_password/ForgottenPassword';
import Users from './views/admin_views/users/Users'

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
      },
      {
        path: 'forgotten_password',
        element: <ForgottenPassword/>
      }
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout/>,
    children: [{
      path: 'users',
      element: <Users/>
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
