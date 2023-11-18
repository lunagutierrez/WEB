import './Banner.css';
import SearchBar from '../inputs/searchbar/SearchBar';
import React from 'react';
import hero from '../../assets/img/hero.png';
import { Container, Row, Col } from 'reactstrap';

const Banner = () => {
  return (
    <div className="hero">
      <Container>
        <Row className="justify-content-between align-items-center">
          <Col lg="5">
            <div className="intro-excerpt">
              <h1>
                ¿Estás <br /> buscando un <br /> diseño ideal?
              </h1>
              <p className="mb-4">
                Usa nuestra plataforma para personalizar, diseñar e imprimir tus productos, y nosotros nos encargamos de llevarlos directamente hasta tu puerta.
              </p>
              <SearchBar />
            </div>
          </Col>

          <Col lg="6" className="ms-3">
            <div className="hero-img-wrap">
              <img src={hero} width="90%" className="img-fluid" alt="Hero" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
