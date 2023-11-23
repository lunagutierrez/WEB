import Products from '../../components/products/Products'
import Crumbs from '../../components/crumbs/Crumbs'
import Prod_desc from '../../components/prod_desc/Prod_desc';
import ProdTabs from '../../components/prodTabs/ProdTabs';


const paths = [
    { name: 'Inicio', link: '/printlab/landing' },
    { name: 'Tienda', link: '/printlab/store' },
    { name: 'Product', link: '/printlab/store/prod' }];
  
  const prods = [
    { prod: 'Product 1', imgUrl: 'https://staticecp.uprinting.com/6802/700x700/UP_CTS_PDP_Image_C.jpg', price: 10 },
    { prod: 'Product 2', imgUrl: 'https://staticecp.uprinting.com/6802/700x700/UP_CTS_PDP_Image_C.jpg', price: 20 },
    { prod: 'Product 3', imgUrl: 'https://staticecp.uprinting.com/6802/700x700/UP_CTS_PDP_Image_C.jpg', price: 30 },
  ];

const Prod = () => {
    return (
        <>
            <Crumbs paths={paths} />
            <Prod_desc name = {'Sticker1'} descrip={'Sticker 1 es un sticker'}/>
            <ProdTabs />
        </>
    )
}

export default Prod