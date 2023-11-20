import React from 'react';
import './Prod_desc.css';
import { Container, Row, Col, Button } from 'reactstrap';
import OptSel from '../inputs/optSel/OptSel';
import ProdImgs from './prodImgs/ProdImgs';
import ProdChars from './prodChars/ProdChars';
import ProdQ from './prodQ/ProdQ';
import ProdBuy from './prodBuy/ProdBuy';

const smallImageUrls = [
    'https://staticecp.uprinting.com/6802/700x700/UP_CTS_PDP_Image_C.jpg',
    'https://staticecp.uprinting.com/5754/700x700/UP_Stickers_and_Labels_Cut_to_Size_Gallery_1_A.jpg',
    'https://staticecp.uprinting.com/1016/700x700/Custom_Sticker_Crack_and_Peel_B_1400x1400.jpg'
  ];

  const optionsForma = [
    { value: 'c', label: 'Círculo' },
    { value: 'r', label: 'Rectángulo' },
    { value: 'cu', label: 'Cuadrado' },
  ];
  
  const optionsTamaño = [
    { value: 'l', label: 'Grande' },
    { value: 'm', label: 'Mediano' },
    { value: 's', label: 'Pequeño' },
  ];
  
  const optionsMaterial = [
    { value: 'm1', label: 'Material1' },
    { value: 'm2', label: 'Material2' },
    { value: 'm3', label: 'Material3' },
  ];
  
  const optionsAcabado = [
    { value: 'mate', label: 'Mate' },
    { value: 'shiny', label: 'Brillante' },
  ];
  
const Prod_desc = () => {
  return (
    <Container>
      <Row className="mb-4">
        <Col>
          <div className="text-center p-3 text-white">
          <ProdImgs imageLinks={smallImageUrls} />
          </div>
        </Col>
        <Col>
          <div className="p-3">
            <h2>Nombre del producto</h2>
            <p>Descripción del producto</p>
            <OptSel label="Forma:" options={optionsForma} />
            <OptSel label="Tamaño:" options={optionsTamaño} />
            <OptSel label="Material:" options={optionsMaterial} />
            <OptSel label="Acabado:" options={optionsAcabado} />
          </div>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>          
          <div className="p-3">
            <ProdChars />
          </div>
        </Col>
        <Col>
          <div className="text-dark align-items-center">
            <ProdQ />
            <div className="text-center">
                <Button className="btn-pink py-1 px-2 border-0">Cargar o diseñar</Button>
            </div>
          </div>
        </Col>
      </Row>
      <ProdBuy />
    </Container>
  );
};

export default Prod_desc;
