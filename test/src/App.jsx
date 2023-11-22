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

const prods = [
  { prod: 'Product 1', imgUrl: 'https://staticecp.uprinting.com/6802/700x700/UP_CTS_PDP_Image_C.jpg', price: 10 },
  { prod: 'Product 2', imgUrl: 'https://staticecp.uprinting.com/6802/700x700/UP_CTS_PDP_Image_C.jpg', price: 20 },
  { prod: 'Product 3', imgUrl: 'https://staticecp.uprinting.com/6802/700x700/UP_CTS_PDP_Image_C.jpg', price: 30 },
];
  
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Banner />
    <Crumbs paths={paths} />;
    <Promo />
    <Products />
    <Prod_desc />
    <ProdTabs />
    <Contact />
    <Delivery />
    <Payment />
    <Summ products={prods} />
    <Services />
    <Footer />
    
    
    </>
  )
}

export default App