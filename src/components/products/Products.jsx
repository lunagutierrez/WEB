import './Products.css'

import React from 'react';
import { Col, Row } from 'reactstrap';
import ProdDisc from './prod_disc/ProdDisc';
import Prods3 from './prods3/Prods3';

const Products = () => {
  return (
    <div className="service-list-container">
        <Row>
          <Col md="3" className='p-3 ms-4'>
            <ProdDisc/>
          </Col>
          <Col className='p-0'>
            <Prods3/>
          </Col>
        </Row>
    </div>
  );
};

export default Products;
