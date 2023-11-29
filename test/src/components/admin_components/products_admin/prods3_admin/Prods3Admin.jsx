import React from 'react';
import { Row } from 'reactstrap';

import card from '../../../assets/img/card_b.jpg'
import ProductAdmin from '../product_admin/ProductAdmin';
const products = [
  {
    image: 'https://staticecp.uprinting.com/6802/700x700/UP_CTS_PDP_Image_C.jpg',
    name: 'Sticker 1',
    price: 1000,
    redirect: '/printlab/store/prod/1'
  },
  {
    image: 'https://staticecp.uprinting.com/9876/700x700/sticker-clear.webp',
    name: 'Sticker 2',
    price: 2000,
    redirect: '/printlab/store/prod/2'
  },
  {
    image: 'https://staticecp.uprinting.com/6808/700x700/UP_Sheet_Sticker_PDP_Image_D.jpg',
    name: 'Sticker 3',
    price: 3000,
    redirect: '/printlab/store/prod/3'
  },
];	


const Prods3Admin = () => {
  return (
    <Row className='justify-content-evenly'>
      {products.map((product) => (
        <ProductAdmin
          image={product.image}
          name={product.name}
          price={product.price}
          redirect={product.redirect}
        />
      ))
      }
    </Row>
  );
};

export default Prods3Admin;
