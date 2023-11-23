import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const ProdBuy = () => {
  return (
    <div className="align-items-center text-center mt-3 mb-2">
      <h2>¿Listo para comprar?</h2>
      <p>Agrega este producto a tu carrito</p>
      <Button tag={Link} to={'/printlab/cart'} className="btn-blue py-1 px-2 border-0">Agregar al carrito</Button>
    </div>
  );
};

export default ProdBuy;
