import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Products from './components/products/Products'
import Banner from './components/banner/Banner'
import Services from './components/services/Services'
import Filter from './components/inputs/filter/Filter'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Banner />
    <Products />
    <Services />
    <Footer />
    
    </>
  )
}

export default App