import Products from '../../../components/products/Products';
import Banner from '../../../components/banner/Banner';
import Services from '../../../components/services/Services';
  
const prods = [
    { prod: 'Product 1', imgUrl: 'https://staticecp.uprinting.com/6802/700x700/UP_CTS_PDP_Image_C.jpg', price: 10 },
    { prod: 'Product 2', imgUrl: 'https://staticecp.uprinting.com/6802/700x700/UP_CTS_PDP_Image_C.jpg', price: 20 },
    { prod: 'Product 3', imgUrl: 'https://staticecp.uprinting.com/6802/700x700/UP_CTS_PDP_Image_C.jpg', price: 30 },
  ];

const AdminLanding = () => {
    return (
        <>
            <Banner />
            <Products />
            <Services />
        </>
    )
}

export default AdminLanding