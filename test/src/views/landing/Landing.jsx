import Products from '../../components/products/Products'
import Banner from '../../components/banner/Banner'
import Services from '../../components/services/Services'
import Crumbs from '../../components/crumbs/Crumbs'
import Prod_desc from '../../components/prod_desc/Prod_desc';
import ProdTabs from '../../components/prodTabs/ProdTabs';
import Summ from '../../components/cart/summ/Summ';
import Promo from '../../components/inputs/promo/Promo';
import Contact from '../../components/cart/contact/Contact';
import Delivery from '../../components/cart/delivery/Delivery';
import Payment from '../../components/cart/payment/Payment';

const paths = [
    { name: 'Inicio', link: '../../inicio.html' },
    { name: 'Tienda', link: 'tienda.html' },];
  
  const prods = [
    { prod: 'Product 1', imgUrl: 'https://staticecp.uprinting.com/6802/700x700/UP_CTS_PDP_Image_C.jpg', price: 10 },
    { prod: 'Product 2', imgUrl: 'https://staticecp.uprinting.com/6802/700x700/UP_CTS_PDP_Image_C.jpg', price: 20 },
    { prod: 'Product 3', imgUrl: 'https://staticecp.uprinting.com/6802/700x700/UP_CTS_PDP_Image_C.jpg', price: 30 },
  ];

const Landing = () => {
    return (
        <>
            <Banner />
            <Crumbs paths={paths} />
            <Products />
            <Prod_desc />
            <ProdTabs />
            <Contact />
            <Delivery />
            <Payment />
            <Summ products={prods} />
            <Services />
        </>
    )
}

export default Landing