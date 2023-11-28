import { useState } from 'react';
import React from 'react';
import './AboutUs.css'
import nosotros from '../../assets/img/nosotros.png'
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import folleto from '../../assets/img/folleto.jpg';
import volante from '../../assets/img/volante.jpeg';
import oficina from '../../assets/img/oficina.jpeg';
import postal from '../../assets/img/postal.jpg';


function AboutUs() {
    const [count, setCount] = useState(0)
  
    return (
      <>
      <Container>
          <div class="description_about">
            <div class="titulo_nosotros">
              <h2>PrintLab: Impresión a domicilio de alta calidad</h2>
              <img src={nosotros}/>
            </div>
            <div class="description_text_about">
              <Row>
              <p>En PrintLab, creemos que la impresión de alta calidad no debería ser exclusiva de las grandes empresas. Por eso, ofrecemos un servicio de impresión a domicilio rápido, sencillo y asequible para todos.</p>
              <p>Nuestro equipo de expertos está formado por profesionales con años de experiencia en la impresión. Nos esforzamos por ofrecer a nuestros clientes los mejores productos y servicios posibles, y nos comprometemos a superar sus expectativas.</p>
              <p>Ofrecemos una amplia gama de productos de impresión, incluyendo:</p>
              </Row>
              <Row>
                <Col>
                  <ul>
                    <li>Folletos </li>
                    <li>Volantes</li>
                    <li>Material de Oficina</li>
                    <li>Postales</li>
                  </ul>
                </Col>
              </Row>
              <Row>
              <div class="descrip_about_2">
                <p>¡Y muchos más!</p>
                <p>Nuestros productos se imprimen en equipos de última generación con tintas de alta calidad. Esto garantiza que sus impresiones sean nítidas, vibrantes y duraderas.</p>
                <p>Además, ofrecemos un servicio de entrega rápida a domicilio. Esto significa que puede tener sus impresiones en tan solo unos días.</p>
                <p>Si está buscando una empresa de impresión a domicilio que ofrezca productos de alta calidad, un servicio rápido y un precio asequible, entonces PrintLab es la opción perfecta para usted.</p>
              </div>
              </Row>
            </div>
          </div>
      </Container>
      </>
    );
  };
  
  export default AboutUs