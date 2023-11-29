import './ProductsAdmin.css'

import React from 'react';
import { Col, Row } from 'reactstrap';
import ProdDiscAdmin from './prod_disc_admin/ProdDiscAdmin';
import Prods3Admin from './prods3_admin/Prods3Admin';

const ProductsAdmin = () => {
  return (
    <div className="service-list-container">
        <Row>
          <Col md="3" className='p-3 ms-4'>
            <ProdDiscAdmin/>
          </Col>
          <Col className='p-0'>
            <Prods3Admin/>
          </Col>
        </Row>
    </div>
  );
};

export default ProductsAdmin;
