import React, { useState } from 'react';
import { Container, FormGroup, Label, Input } from 'reactstrap';

const Payment = () => {
  // State for storing form values
  const [paymentMethod, setPaymentMethod] = useState('');

  // Handle payment method change
  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  return (
    <Container>
      <h2>Métodos de Pago</h2>
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

      {/* You can add additional fields based on the selected payment method */}
      {paymentMethod === 'creditCard' && (
        <FormGroup>
          <Label for="creditCardNumber">Número de tarjeta</Label>
          <Input
            type="text"
            id="creditCardNumber"
            name="creditCardNumber"
            placeholder="Ingrese el número de tarjeta"
          />
        </FormGroup>
      )}

      {/* Add more fields for other payment methods as needed */}
    </Container>
  );
};

export default Payment;
