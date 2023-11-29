import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const WhyUs = () => {
  return (
    <>
    <h2 className="mb- section-title text-center">¿Por qué elegirnos?</h2>
    <p className="mb-4 text-center" style={{ color: 'grey' }}>Somos tu mejor opción</p>
        <Container fluid style={{ backgroundColor: '#7DC9EA', padding: '0' }}>
        <Row style={{ padding: '20px', margin: '20px' }}>
            <Col className="text-center">
            <img src="https://staticecp.uprinting.com/3849/510x510/Standard_Business_Cards_Marketing_Material_A.jpg" alt="Image 1" style={{ width: '100%', marginBottom: '10px' }} />
            <p>Diseños personalizados</p>
            </Col>
            <Col className="text-center">
            <img src="https://staticecp.uprinting.com/215/530x530/Notepads_Personal_A.jpg" alt="Image 2" style={{ width: '100%', marginBottom: '10px' }} />
            <p>Impresión de calidad</p>
            <Button tag={Link} to={'/printlab/about_us'} className="btn-pink py-1 px-2 border-0"> Explora <FontAwesomeIcon icon={faPlus} /></Button>
            </Col>
            <Col className="text-center">
            <img src="https://staticecp.uprinting.com/3447/700x700/Candle_Boxes_Spas_Marketing_Materials_Category_Page_B.jpg" alt="Image 3" style={{ width: '100%', marginBottom: '10px' }} />
            <p>Envíos rápidos</p>
            
            </Col>
        </Row>
    </Container>
    </>
  );
};

export default WhyUs;
