import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import './ProdDisc.css'

import React from 'react';
import { Col, Card, CardBody, Button } from 'reactstrap';

const ProdDisc = () => {
  return (
    <Col md="3" className='p-4'>
      <h2 className="mb-4 section-title">Los más vistos</h2>
      <p className="mb-4">Échale un vistazo a nuestros productos más populares</p>
      <Card className='border-0'>
        <CardBody className="d-flex justify-content-end me-4">  
            <Button className="btn-pink p-1 border-0"> Explorar <FontAwesomeIcon icon={faPlus} /> </Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ProdDisc;
