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
    <ProdImgs />
    <Services />
    <Footer />
    
    
    </>
  )
}

export default App