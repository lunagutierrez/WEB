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

const paths = [
  { name: 'Inicio', link: '../inicio.html' },
  { name: 'Tienda', link: 'tienda.html' },];

  const mainImageUrl = 'https://staticecp.uprinting.com/6981/700x700/UP_Custom_Stickers_PDP_Promotional_B.jpg';
const smallImageUrls = [
    'https://staticecp.uprinting.com/6802/700x700/UP_CTS_PDP_Image_C.jpg',
    'https://staticecp.uprinting.com/5754/700x700/UP_Stickers_and_Labels_Cut_to_Size_Gallery_1_A.jpg',
    'https://staticecp.uprinting.com/1016/700x700/Custom_Sticker_Crack_and_Peel_B_1400x1400.jpg'
  ];
  
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Banner />
    <Crumbs paths={paths} />;
    <Products />
    <ProdImgs imageLinks={smallImageUrls} />
    <OptSel label={'Forma'} options = {options}/>
    <ProdQ/>
    <ProdChars/>
    <Services />
    <Footer />
    
    
    </>
  )
}

export default App