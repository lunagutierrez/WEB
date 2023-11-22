import { useState } from 'react';
import React from 'react';
import { Container, Row, Col } from 'reactstrap';

function AboutUs() {
    const [count, setCount] = useState(0)
  
    return (
      <>
      <Container>
        <Row>
          <div class="description_about">
            <h2>PrintLab: Impresión a domicilio de alta calidad</h2>
            <p>En PrintLab, creemos que la impresión de alta calidad no debería ser exclusiva de las grandes empresas. Por eso, ofrecemos un servicio de impresión a domicilio rápido, sencillo y asequible para todos.</p>
            <p>Nuestro equipo de expertos está formado por profesionales con años de experiencia en la impresión. Nos esforzamos por ofrecer a nuestros clientes los mejores productos y servicios posibles, y nos comprometemos a superar sus expectativas.</p>
            <p>Ofrecemos una amplia gama de productos de impresión, incluyendo:</p>
            <p>Nuestros productos se imprimen en equipos de última generación con tintas de alta calidad. Esto garantiza que sus impresiones sean nítidas, vibrantes y duraderas.</p>
            <p>Además, ofrecemos un servicio de entrega rápida a domicilio. Esto significa que puede tener sus impresiones en tan solo unos días.</p>
            <p>Si está buscando una empresa de impresión a domicilio que ofrezca productos de alta calidad, un servicio rápido y un precio asequible, entonces PrintLab es la opción perfecta para usted.</p>
          </div>
        </Row>
      </Container>
      </>
    );
  };
  
  export default AboutUs