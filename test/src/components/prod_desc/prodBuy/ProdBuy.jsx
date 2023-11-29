import React, { useState } from 'react';
import { Container, Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const ProdBuy = () => {
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();

  const toggle = () => setModal(!modal);

  const addToCart = () => {
    navigate('/printlab/cart');
  };

  const continueShopping = () => {
    navigate('/printlab/store');
  };

  return (
    <div className="align-items-center text-center mt-3 mb-2">
      <h2>¿Listo para comprar?</h2>
      <p>Agrega este producto a tu carrito</p>
      <Button onClick={toggle} className="btn-blue py-1 px-2 border-0">Agregar al carrito</Button>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Confirmar acción</ModalHeader>
        <ModalBody>
          ¿Qué te gustaría hacer?
        </ModalBody>
        <ModalFooter>
          <Button className="btn-pink py-1 px-2 border-0" onClick={addToCart}>Ir al carrito</Button>{' '}
          <Button className="btn-pink py-1 px-2 border-0" onClick={continueShopping}>Seguir comprando</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ProdBuy;