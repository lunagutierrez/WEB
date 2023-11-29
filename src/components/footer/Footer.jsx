import './Footer.css'
import React from 'react';
import logo_b from "../../assets/img/logo_black.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faHome, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

import { Container, Row, Col } from 'reactstrap';

const Footer = () => {
  return (
    <footer className="text-center text-lg-start text-white mt-5" style={{ backgroundColor: '#1e120e' }}>
      <Container className="p-2 pb-0">
        <section>
          <Row>
            <Col md="5" lg="4" xl="4" className="mx-auto">
              <h6 className="text-uppercase mb-4 font-weight-bold">
                <a href="inicio.html" className="navbar-brand">
                  <img width="60%" height="auto" src={logo_b} />
                </a>
              </h6>
              <p>
                Print Lab ofrece una rápida impresión. Ofrecemos tarjetas de visita, postales, volantes,
                folletos, material de oficina y otros productos de impresión de alta calidad.
              </p>
            </Col>

            <hr className="w-100 clearfix d-md-none" />

            <Col md="2" lg="2" xl="2" className="mx-auto mt-5">
              <h6 className="text-uppercase mb-4 font-weight-bold">Links de interés</h6>
              <p>
                <a className="text-white">Términos de uso</a>
              </p>
              <p>
                <a className="text-white">Políticas de privacidad</a>
              </p>
            </Col>

            <hr className="w-100 clearfix d-md-none" />

            <Col md="3" lg="2" xl="2" className="mx-auto mt-5">
              <h6 className="text-uppercase mb-4 font-weight-bold">Soporte</h6>
              <p>
                <a className="text-white">FAQ</a>
              </p>
              <p>
                <a className="text-white">Servicios de diseño</a>
              </p>
            </Col>

            <hr className="w-100 clearfix d-md-none" />

            <Col md="4" lg="2" xl="2" className="mx-auto mt-5">
              <h6 className="text-uppercase mb-4 font-weight-bold">Contacto</h6>
              <p>
                <FontAwesomeIcon icon={faHome} />Bogotá, COL
              </p>
              <p>
                <FontAwesomeIcon icon={faEnvelope} /> printlab@gmail.com
              </p>
              <p>
                <FontAwesomeIcon icon={faPhone} /> +601 2145128
              </p>
            </Col>
          </Row>
        </section>

        <hr className="my-3" />

        <section className="p-3 pt-0">
          <Row className="d-flex align-items-center">
            <Col md="7" lg="8" className="text-center text-md-start">
              <div className="p-3">
                © 2023 Copyright:
                <a className="text-white" href="https://printlabcsolombia.com/">
                  Printlab
                </a>
              </div>
            </Col>

            <Col md="5" lg="4" className="ml-lg-0 text-center text-md-end">
              <a className="btn btn-outline-light btn-floating m-1" role="button">
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>

              <a className="btn btn-outline-light btn-floating m-1" role="button" href="https://www.instagram.com/printlab_col/">
                <FontAwesomeIcon icon={faInstagram} />
              </a>

              <a className="btn btn-outline-light btn-floating m-1" role="button">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </Col>
          </Row>
        </section>
      </Container>
    </footer>
  );
  
};

export default Footer;
