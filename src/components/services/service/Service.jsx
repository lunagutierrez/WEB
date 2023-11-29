import './Service.css'

import React from 'react';
import { Col, Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

const Service = ({ imageUrl, title, description }) => {
  return (
    <Col md="4">
      <Card className="service-item align-items-center border-0">
        <CardImg src={imageUrl} className="img-fluid rounded-circle" alt={title} />
        <CardBody>
          <CardTitle tag="h5" className="mt-3 text-center">
            <strong>{title}</strong>
          </CardTitle>
          <CardText>{description}</CardText>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Service;
