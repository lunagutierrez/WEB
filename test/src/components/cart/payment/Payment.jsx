import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Payment.css';
import {
  Container,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
  Button,
} from 'reactstrap';

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [selectedCard, setSelectedCard] = useState('');

  const handlePaymentMethodChange = (e) => {
    const selectedMethod = e.target.value;
    setPaymentMethod(selectedMethod);
    setCardNumber('');
    setSelectedCard('');
  };

  const selectCard = (cardType) => {
    setSelectedCard(cardType);
  };

  const handleAddCard = () => {
    console.log('Card details:', {
      cardNumber,
      cardType: selectedCard,
    });
  };

  return (
    <Container>
      <FormGroup>
        <Label for="paymentMethod">Seleccione un método de pago</Label>
        <Input
          type="select"
          id="paymentMethod"
          name="paymentMethod"
          value={paymentMethod}
          onChange={handlePaymentMethodChange}
        >
          <option value="">Seleccione...</option>
          <option value="cashOnDelivery">Pago contraentrega</option>
          <option value="creditCard">Tarjeta</option>
          <option value="pse">PSE</option>
        </Input>
      </FormGroup>

      {paymentMethod === 'creditCard' && (
        <div className="container-fluid">
          <Row className="justify-content-center">
            <Col lg="12">
              <div className="card p-3">
                {/* Card Images */}
                <Row className="justify-content-center mb-4 radio-group">
                  <Col sm="2" xs="4">
                    <Button
                      className={`btn-card ${selectedCard === 'visa' ? 'active' : ''}`}
                      onClick={() => selectCard('visa')}
                    >
                      <img
                        className="img-fluid py-1"
                        src="https://d28wu8o6itv89t.cloudfront.net/images/Visadebitcardpng-1599584312349.png"
                        alt="Visa"
                      />
                    </Button>
                  </Col>
                  <Col sm="2" xs="4">
                    <Button
                      className={`btn-card ${selectedCard === 'master' ? 'active' : ''}`}
                      onClick={() => selectCard('master')}
                    >
                      <img
                        className="img-fluid"
                        src="https://i.pinimg.com/736x/ca/0c/70/ca0c7039ddcf224cb6b075cb59e4677e.jpg"
                        alt="Mastercard"
                      />
                    </Button>
                  </Col>
                </Row>

                {/* Name Input */}
                <Row className="justify-content-center py-3">
                  <Col>
                    <div className="input-group">
                      <Label className="pt-2">Nombre</Label>
                      <Input className="rounded" type="text" name="Name" placeholder="Ingresa tu nombre" />
                    </div>
                  </Col>
                </Row>

                {/* Card Number Input */}
                <Row className="justify-content-center py-3">
                  <Col>
                    <div className="input-group">
                      <Label className="pt-2">Número</Label>
                      <Input className="rounded" type="text" id="cr_no" name="card-no" placeholder="0000 0000 0000 0000" minLength="19" maxLength="19" />
                    </div>
                  </Col>
                </Row>

                {/* Expiry Date and CVV Input */}
                <Row className="justify-content-center py-3">
                  <Col>
                    <Row>
                      <Col>
                        <div className="input-group">
                          <Label className="pt-2 pe-3">Fecha</Label>
                          <Input className="rounded" type="text" id="exp" name="expdate" placeholder="MM/YY" minLength="5" maxLength="5" />
                        </div>
                      </Col>
                      <Col>
                        <div className="input-group">
                          <Label className="pt-2">CVV</Label>
                          <Input className="rounded" type="password" name="cvv" placeholder="&#9679;&#9679;&#9679;" minLength="3" maxLength="3" />
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>

                {/* Pay Button */}
                <Row className="justify-content-center">
                  <Col xs="auto">
                    <Button tag={Link} to={'/printlab/store'} className="btn-pink py-1 px-2 border-0 text-align-center" onClick={handleAddCard}>
                  Pagar
                    </Button>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      )}

      {/* PSE Button */}
      {paymentMethod === 'pse' && (
        <Row className="justify-content-center">
          <Col xs="auto">
            <Button
              tag={Link}
              to={'https://www.pse.com.co/persona'}
              className="btn-pink py-1 px-2 border-0 text-align-center"
              onClick={handleAddCard}
            >
              Pagar con PSE
            </Button>
          </Col>
        </Row>
      )}

    </Container>
  );
};

export default Payment;
