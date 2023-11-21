import React, { useState } from 'react';
import { Container, Row, Col, Form } from 'reactstrap';
import ProdBought from '../prodBought/ProdBought';
import './Summ.css';

const Summ = ({ products }) => {
  return (
    <div className="prod-list">
      {products.map((product) => (
        <ProdBought key={product.id} prod={product.prod} imgUrl={product.imgUrl} price={product.price} />
      ))}
    </div>
  );
};

export default Summ;
