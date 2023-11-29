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
import AdminLayout from '../src/components/admin_components/admin_layout/AdminLayout';
import Users from '../src/views/admin_views/users/Users';
import Orders from '../src/views/admin_views/orders/Orders';
import Store from './views/store/Store';
import EditProduct1 from './views/admin_views/edit_product/edit_product_1/EditProduct1';
import EditProduct2 from './views/admin_views/edit_product/edit_product_2/EditProduct2';
import EditProduct3 from './views/admin_views/edit_product/edit_product_3/EditProduct3';
import NewProduct from './views/admin_views/new_product/NewProduct';
import ForgottenPassword from './views/forgotten_password/ForgottenPassword';
import Prod from './views/prod/Prod';
import Cart from './views/cart/Cart';
import AboutUsAdmin from './views/admin_views/about_us_admin/AboutUsAdmin';
import Admin_landing from './views/admin_views/admin_landing/AdminLanding';
import StoreAdmin from './views/admin_views/store_admin/StoreAdmin';

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
    children: [
    {
      path: 'admin_landing',
      element: <Admin_landing/>
    },
    {
      path: 'users',
      element: <Users/>
    },
    {
      path: 'orders',
      element: <Orders/>
    },
    {
      path: 'about_us_admin',
      element: <AboutUsAdmin/>
    },
    {
      path: 'store_admin',
      element: <StoreAdmin/>
    },
    {
      path: 'edit_product1',
      element: <EditProduct1/>
    },
    {
      path: 'edit_product2',
      element: <EditProduct2/>
    },
    {
      path: 'edit_product3',
      element: <EditProduct3/>
    },
    {
      path: 'add_product',
      element: <NewProduct/>
    },
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