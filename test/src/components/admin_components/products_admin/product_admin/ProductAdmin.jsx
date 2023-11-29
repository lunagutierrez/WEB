import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './ProductAdmin.css'

import React from 'react';
import { Col, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';

const ProductAdmin = ({ image, name, price, redirect ,onViewMoreClick }) => {
  return (
    <Col md="3" className='p-3'>
        <Card className='border-0'>
        <CardImg top className='rounded w-80' src={image} alt={name} />
        <CardBody>
            <CardTitle>{name}</CardTitle>
            <CardSubtitle>Precio: Desde ${price} COP c/u</CardSubtitle>
            <CardText></CardText>
            <Button tag={Link} to={redirect}  block color='link' className="text-blue p-0 text-end">Editar<FontAwesomeIcon icon={faPen} /></Button>
        </CardBody>
        </Card>
    </Col>
  );
};

export default ProductAdmin;
