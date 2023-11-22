import React from 'react';
import { Row } from 'reactstrap';

import card from '../../../assets/img/card_b.jpg'
import Product from '../product/Product';

const Prods3 = () => {
  return (
    <Row className='justify-content-evenly'>
    <Product
        image={card}
        name="Tarjetas de presentación"
        price="Desde 3,000 COP c/u"
        link="cart.html"        />
    <Product
        image={card}
        name="Tarjetas de presentación"
        price="Desde 3,000 COP c/u"
        link="cart.html"        />
    <Product
        image={card}
        name="Tarjetas de presentación"
        price="Desde 3,000 COP c/u"
        link="cart.html"        />
    </Row>
  );
};

export default Prods3;
