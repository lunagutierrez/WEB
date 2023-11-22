import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';

const Contact = () => {
  const [Contact, setContact] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContact((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  return (
    <Container>
      <h2>Detalles de contacto</h2>
      <Form>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="firstName">Nombre</Label>
              <Input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="Ingrese su nombre"
                value={Contact.firstName}
                onChange={handleInputChange}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="lastName">Apellido</Label>
              <Input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Ingrese su apellido"
                value={Contact.lastName}
                onChange={handleInputChange}
              />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="email">Correo</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Ingrese su correo electrónico"
                value={Contact.email}
                onChange={handleInputChange}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="phone">Teléfono</Label>
              <Input
                type="tel"
                name="phone"
                id="phone"
                placeholder="Ingrese su número de teléfono"
                value={Contact.phone}
                onChange={handleInputChange}
              />
            </FormGroup>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default Contact;
