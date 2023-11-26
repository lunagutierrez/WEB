import React from 'react';
import { Col } from 'reactstrap';
import './ProdCharsAdmin.css';

const ProdCharsAdmin = () => {
  return (
    <Col className="ms-5">
      <ul className="charcs">
        <li><input type="text" placeholder='Amplia tu descripción'/></li>
        <li><input type="text" placeholder='Amplia tu descripción'/></li>
        <li><input type="text" placeholder='Amplia tu descripción'/></li>
        <li><input type="text" placeholder='Amplia tu descripción'/></li>
      </ul>

      <div className="categ">
        <h3>Categorías:</h3>
        <input type="text" placeholder='Ingrese las categorías en mayúscula separadas por una coma'/>
      </div>
    </Col>
  );
};

export default ProdCharsAdmin;