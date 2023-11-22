import React, { useState } from 'react';
import { Container, Row, Col, Form } from 'reactstrap';
import ProdBought from '../prodBought/ProdBought';
import Promo from '../../inputs/promo/Promo';
import './Sum.css';


const Summ = ({ products }) => {
  const subtotal = products.reduce((acc, product) => acc + product.price, 0);

  const shippingCharge = 5;

  const totalCost = subtotal + shippingCharge;

  return (
    <div className="shopping-cart-summary">
      <h4>Resumen de compra</h4>

      <div className="prod-list my-2">
        {products.map((product, index) => (
          <ProdBought key={product.id || index} prod={product.prod} imgUrl={product.imgUrl} price={product.price} />
        ))}
      </div>

      <Promo />
      
      <div className="summary-section">
        <div className="summary-item">
          <span>Subtotal:</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="summary-item">
          <span>Costo de envío:</span>
          <span>${shippingCharge.toFixed(2)}</span>
        </div>
        <div className="summary-item total">
          <span>Costo total:</span>
          <span>${totalCost.toFixed(2)}</span>
        </div>
      </div>

      
    </div>
  );
};


export default Summ;

