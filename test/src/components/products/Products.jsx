import './Products.css'

import React from 'react';
import { Row } from 'reactstrap';
import Product from './product/Product';
import ProdDisc from './prod_disc/ProdDisc';
import card from '../../assets/img/card_b.jpg'

const Products = () => {
  return (
    <div className="service-list-container">
        <Row>
        <ProdDisc/>
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
    </div>
  );
};

export default Products;
