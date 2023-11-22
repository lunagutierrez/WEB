import React from 'react';
import { Container, Row, Col} from 'reactstrap';
import Plusminus from '../../inputs/plusminus/Plusminus';
import ProdImg from '../../prod_desc/prodImg/ProdImg';

const ProdBought = ({prod, imgUrl, price}) => {
  return (
    <Row className="prod-container mb-4">
      <Col md={6}>
        <Row>
            <Col md={4}>
            <ProdImg imgUrl={imgUrl} />
  
            </Col>
            <Col md={6} className='py-2'>
                <h6>{prod}</h6>
                <Plusminus />
            </Col>
        </Row>
      </Col>
      <Col md={6} className='py-3'>
        ${price}
      </Col>
    </Row>
  );
};

export default ProdBought;
