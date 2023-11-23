import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Products from './components/products/Products'
import Banner from './components/banner/Banner'
import Services from './components/services/Services'
import Filter from './components/inputs/filter/Filter'
import Crumbs from './components/crumbs/Crumbs'
import ProdImgs from './components/prod_desc/prodImgs/ProdImgs'
import OptSel from './components/inputs/optSel/OptSel';
import ProdQ from './components/prod_desc/prodQ/ProdQ';
import ProdChars from './components/prod_desc/prodChars/ProdChars';
import Prod_desc from './components/prod_desc/Prod_desc';
import ProdTabs from './components/prodTabs/ProdTabs';
import Summ from './components/cart/summ/Summ';
import Plusminus from './components/inputs/plusminus/Plusminus';
import Promo from './components/inputs/promo/Promo';
import Descrip from './components/prodTabs/descrip/Descrip';
import Recs from './components/prodTabs/recs/Recs';
import Reviews from './components/prodTabs/reviews/Reviews';
import Faq from './components/prodTabs/faq/Faq';
import ProdBuy from './components/prod_desc/prodBuy/ProdBuy';
import ProdImg from './components/prod_desc/prodImg/ProdImg';
import ProdBought from './components/cart/prodBought/ProdBought';
import Contact from './components/cart/contact/Contact';
import Delivery from './components/cart/delivery/Delivery';
import Payment from './components/cart/payment/Payment';
import Layout from './components/layout/Layout';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Landing from './views/landing/Landing';
import Prod from './views/prod/Prod';
import Cart from './views/cart/Cart';
import Store from './views/store/Store';

const paths = [
  { name: 'Inicio', link: '../inicio.html' },
  { name: 'Tienda', link: 'tienda.html' },];

const products = [
  {
    name: 'Product 1',
    amount: 2,
    price: 20.0,
    image: 'https://staticecp.uprinting.com/1016/700x700/Custom_Sticker_Crack_and_Peel_B_1400x1400.jpg',
  },
  {
    name: 'Product 2',
    amount: 1,
    price: 15.0,
    image: 'https://staticecp.uprinting.com/1016/700x700/Custom_Sticker_Crack_and_Peel_B_1400x1400.jpg',
  },
];


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