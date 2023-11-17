import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const ProdImg = ({imgUrl}) => {
  return (
    <Container>
          <img
            id="main-product-image"
            src={imgUrl}
            alt="Product Main Image"
            className="img-fluid"
          />
    </Container>
  );
};

export default ProdImg;
