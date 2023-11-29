import React from 'react';
import { Col } from 'reactstrap';
import './ProdChars.css';

const ProdChars = () => {
  return (
    <Col className="ms-5">
      <ul className="charcs">
        <li>Sencillo, rollo, hoja y kiss-cut</li>
        <li>Formas tradicionales y personalizadas</li>
        <li>Doblar y pelar el respaldo en singles</li>
        <li>Materiales impermeables y de escritura disponibles</li>
      </ul>

      <div className="categ">
        <h3>Categorías:</h3>
        <p id="catg">MATERIAL DE MERCADEO, STICKERS, PEGATINA, PUBLICIDAD IMPRESA, MARKETING, MERCADEO, PUBLICIDAD, MARCADO PERSONALIZADOS, STICKERS BOGOTA, IMPRESION DIGITAL</p>
      </div>
    </Col>
  );
};

export default ProdChars;
