import './Product.css'

import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';

// Define the Product component
const Product = ({ image, name, price, onViewMoreClick }) => {
  return (
    <Card>
      <CardImg top width="100%" src={image} alt={name} />
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardSubtitle>Price: ${price}</CardSubtitle>
        <CardText>Additional product information can go here.</CardText>
        <Button>View More</Button>
      </CardBody>
    </Card>
  );
};

export default Product;
