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

const paths = [
  { name: 'Inicio', link: '../inicio.html' },
  { name: 'Tienda', link: 'tienda.html' },];


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Banner />
    <Crumbs paths={paths} />;
    <Products />
    <Prod_desc />
    <ProdTabs />
    <Services />
    <Footer />
    
    
    </>
  )
}

export default App