import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import SearchBar from './components/inputs/searchbar/SearchBar'
import Banner from './components/banner/Banner'
import Services from './components/services/Services'
import Product from './components/products/product/Product'

import paint from "./assets/img/card_b.jpg"

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Banner />
    <Product
  image={paint}
  name="Tarjetas de presentación"
  price="Desde 3,000 COP c/u"
  link="cart.html"
/>

    <Services />
    <Footer />
    </>
  )
}

export default App
