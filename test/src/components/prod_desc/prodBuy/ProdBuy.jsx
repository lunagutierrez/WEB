import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

const ProdBuy = () => {
  return (
    <div className="align-items-center text-center mt-3 mb-2">
      <h2>¿Listo para comprar?</h2>
      <p>Agrega este producto a tu carrito</p>
      <Button className="btn-blue py-1 px-2 border-0">Comprar</Button>
    </div>
  );
};

export default ProdBuy;
