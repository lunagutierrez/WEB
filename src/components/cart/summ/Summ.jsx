// Summ.js

import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import ProdBought from '../prodBought/ProdBought';
import Promo from '../../inputs/promo/Promo';
import Plusminus from '../../inputs/plusminus/Plusminus';
import './Sum.css';
import { Link, useNavigate } from 'react-router-dom';

const Summ = ({ products, setProducts }) => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const [discount, setDiscount] = useState(0); // State to store the discount percentage

  const handleCheckout = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    navigate('/printlab/landing');
  };

  const handleApplyDiscount = (discountPercentage) => {
    setDiscount(discountPercentage);
  };

  const handleRemoveProduct = (index) => {
    const updatedProducts = [...products];
    updatedProducts.splice(index, 1);
    setProducts(updatedProducts);
  };

  const subtotal = products.reduce((acc, product) => acc + product.price, 0);
  const shippingCharge = 5;
  const iva = subtotal * 0.19;
  const totalCost = (subtotal - subtotal * discount) + iva + shippingCharge; // Apply discount here

  return (
    <div className="shopping-cart-summary">
      <h4>Resumen de compra</h4>

      <div className="prod-list my-2">
        {products.map((product, index) => (
          <ProdBought
            key={index}
            prod={product.prod}
            imgUrl={product.imgUrl}
            price={product.price * (1 - discount)} // Apply discount to individual product price
            handleRemove={() => handleRemoveProduct(index)}
          />
        ))}
      </div>

      <Promo onApply={handleApplyDiscount} />

      <div className="summary-section me-5">
        <div className="summary-item">
          <span>Subtotal:</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="summary-item">
          <span>IVA:</span>
          <span>${iva.toFixed(2)}</span>
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

      <Button onClick={handleCheckout} className="btn-pink py-1 px-2 border-0">
        Finalizar compra
      </Button>

      {/* Modal */}
      <Modal isOpen={showModal} toggle={handleCloseModal}>
        <ModalHeader toggle={handleCloseModal}>
          Compra exitosa
        </ModalHeader>
        <ModalBody>
          ¡Gracias por tu compra! Tu pedido ha sido procesado con éxito.
        </ModalBody>
        <ModalFooter>
          <Button onClick={handleCloseModal} className="btn-pink py-1 px-2 border-0">
            Cerrar
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default Summ;
