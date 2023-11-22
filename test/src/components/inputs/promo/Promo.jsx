import './Promo.css'
import React, { useState } from 'react';
import { Input, Button, Row, Col} from 'reactstrap';

const Promo = ({ onApply }) => {
  const [promoCode, setPromoCode] = useState('');

  const handleInputChange = (e) => {
    setPromoCode(e.target.value);
  };

  const handleApplyClick = () => {
    onApply(promoCode);
  };

  return (
    <Row className="promotion-code-container">
      <Col md={6}>
        <Input
          className="promotion-code-input"
          type="text"
          placeholder="Ingresa tu código de promoción"
          value={promoCode}
          onChange={handleInputChange}
        />
      </Col>
      <Col md={1}>
        <Button className="btn-pink px-2 border-0" onClick={handleApplyClick}>
          Aplicar
        </Button>
      </Col>
    </Row>
  );
};

export default Promo;
