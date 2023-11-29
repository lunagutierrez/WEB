// Promo.js
import React, { useState } from 'react';
import { Input, Button, Row, Col, Modal, ModalBody, ModalFooter } from 'reactstrap';

const Promo = ({ onApply }) => {
  const [promoCode, setPromoCode] = useState('');
  const [showInvalidPromoModal, setShowInvalidPromoModal] = useState(false);

  const handleInputChange = (e) => {
    setPromoCode(e.target.value);
  };

  const handleApplyClick = () => {
    // Check the entered promo code and apply the corresponding discount
    if (promoCode === '15OFFTODAY') {
      onApply(0.15); // Apply a 15% discount
    } else if (promoCode === '25OFFTODAY') {
      onApply(0.25); // Apply a 25% discount
    } else {
      // Handle invalid promo code by showing the modal
      setShowInvalidPromoModal(true);
    }
  };

  const handleCloseInvalidPromoModal = () => {
    setShowInvalidPromoModal(false);
  };

  return (
    <Row className="promotion-code-container">
      <Col md={6}>
        <Input
          className="promotion-code-input"
          type="text"
          placeholder="Enter your promo code"
          value={promoCode}
          onChange={handleInputChange}
        />
      </Col>
      <Col md={1}>
        <Button className="btn-pink px-2 border-0" onClick={handleApplyClick}>
          Apply
        </Button>
      </Col>

      {/* Invalid Promo Code Modal */}
      <Modal isOpen={showInvalidPromoModal} toggle={handleCloseInvalidPromoModal}>
        <ModalBody>
          <p>Código promocional inválido</p>
        </ModalBody>
        <ModalFooter>
          <Button className="btn-pink px-2 border-0" onClick={handleCloseInvalidPromoModal}>
            Cerrar
          </Button>
        </ModalFooter>
      </Modal>
    </Row>
  );
};

export default Promo;
