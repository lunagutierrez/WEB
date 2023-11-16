import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import './ProdDisc.css'

import React from 'react';
import { Col, Card, CardBody, Button } from 'reactstrap';

const ProdDisc = () => {
  return (
    <Col md="3" className='p-4'>
      <h2 className="mb-4 section-title">Los más vistos</h2>
      <p className="mb-4">Échale un vistazo a nuestros productos más populares</p>
      <Card className='border-0'>
        <CardBody>  
            <Button block color='link' className="text-blue p-0 text-end">Ver más <FontAwesomeIcon icon={faCirclePlus} /></Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ProdDisc;
