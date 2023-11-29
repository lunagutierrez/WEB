import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import './ProdDiscAdmin.css'
import React from 'react';
import { Col, Card, CardBody, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const ProdDiscAdmin = () => {
  return (
    <>
      <h2 className="mb-4 section-title">Los más vistos</h2>
      <p className="mb-4">Échale un vistazo a nuestros productos más populares</p>
      <Card className='border-0'>
        <CardBody className="d-flex justify-content-end me-4">  
            <Button tag={Link} to={'/printlab/store'} className="btn-pink py-1 px-2 border-0"> Explorar <FontAwesomeIcon icon={faPlus} /> </Button>
        </CardBody>
      </Card>
    </>
  );
};

export default ProdDiscAdmin;
