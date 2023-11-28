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
import AdminLayout from '../../../test/src/components/admin_components/admin_layout/AdminLayout';
import Users from '../../../test/src/views/admin_views/users/Users';
import Orders from '../../../test/src/views/admin_views/orders/Orders';
import EditProduct from '../../../test/src/views/admin_views/edit_product/EditProduct';
import Store from './views/store/Store'
import ForgottenPassword from './views/forgotten_password/ForgottenPassword';
import Prod from './views/prod/Prod';
import Cart from './views/cart/Cart';

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
        path: 'cart',
        element: <Cart />,
      }, 
      {
        path: 'about_us',
        element: <AboutUs/>
      },
      {
        path: 'store',
        element: <Store/>
      },
      {
        path: 'store/prod/:id',
        element: <Prod />,
      }, 
      {
        path: 'account_info',
        element: <AccountInfo/>
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
    },
    {
      path: 'orders',
      element: <Orders/>
    },
    {
      path: 'edit_product',
      element: <EditProduct/>
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