import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Product.css'

import React from 'react';
import { Col, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';

const Product = ({ image, name, price, redirect ,onViewMoreClick }) => {
  return (
    <Col md="3" className='p-3'>
        <Card className='border-0'>
        <CardImg top className='rounded w-80' src={image} alt={name} />
        <CardBody>
            <CardTitle>{name}</CardTitle>
            <CardSubtitle>Precio: Desde ${price} COP c/u</CardSubtitle>
            <CardText></CardText>
            <Button tag={Link} to={redirect}  block color='link' className="text-blue p-0 text-end">Ver más <FontAwesomeIcon icon={faCirclePlus} /></Button>
        </CardBody>
        </Card>
    </Col>
  );
};

export default Product;
