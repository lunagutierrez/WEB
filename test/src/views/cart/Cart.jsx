import Payment from '../../components/cart/payment/Payment'
import Summ from '../../components/cart/summ/Summ'
import Crumbs from '../../components/crumbs/Crumbs'

const paths = [
    { name: 'Inicio', link: '../../inicio.html' },
    { name: 'Tienda', link: 'tienda.html' },
    { name: 'Product', link: 'product.html' }];


const prods = [
    { prod: 'Product 1', imgUrl: 'https://staticecp.uprinting.com/6802/700x700/UP_CTS_PDP_Image_C.jpg', price: 10 },
    { prod: 'Product 2', imgUrl: 'https://staticecp.uprinting.com/6802/700x700/UP_CTS_PDP_Image_C.jpg', price: 20 },
    { prod: 'Product 3', imgUrl: 'https://staticecp.uprinting.com/6802/700x700/UP_CTS_PDP_Image_C.jpg', price: 30 },
    ];

const Cart = () => {
    return (
        <>
            <Crumbs paths={paths} />
            
            <Payment />
            <Summ products={prods} />
        </>   
    )
}

export default Cart