import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';

const Delivery = () => {
  const [Delivery, setDelivery] = useState({
    address: '',
    details: '',
    city: '',
    department: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDelivery((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  return (
    <Container>
      <Form>
      <Row>
          <Col md={6}>
          <FormGroup>
              <Label for="department">Departamento</Label>
              <Input
                type="text"
                name="department"
                id="department"
                placeholder="Ingrese su departamento"
                value={Delivery.department}
                onChange={handleInputChange}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
          <FormGroup>
              <Label for="city">Ciudad</Label>
              <Input
                type="text"
                name="city"
                id="city"
                placeholder="Ingrese su ciudad"
                value={Delivery.city}
                onChange={handleInputChange}
              />
            </FormGroup>
            
          </Col>
      </Row>

      <Row>
        <Col md={6}>
          <FormGroup>
            <Label for="address">Dirección</Label>
            <Input
              type="text"
              name="address"
              id="address"
              placeholder="Ingrese su dirección"
              value={Delivery.address}
              onChange={handleInputChange}
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="details">Detalle</Label>
            <Input
              type="text"
              name="details"
              id="details"
              placeholder="Ingrese el detalle de su dirección"
              value={Delivery.details}
              onChange={handleInputChange}
            />
          </FormGroup>
        </Col>
      </Row>
        
      </Form>
    </Container>
  );
};

export default Delivery;
