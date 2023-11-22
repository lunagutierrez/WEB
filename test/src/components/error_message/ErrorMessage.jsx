import './ErrorMessage.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

const ErrorMessage = () => {
    return (
        <Container>
            <div>
                <Row>
                <h1>Error 404</h1>
                </Row>
                <Row>
                <p>Ups! Parece que esta página no existe o ha sido eliminada. Revisa de nuevo más tarde o usa nuestra caja de búsqueda en la pagina principal.</p>
                </Row>
                <Row>
                <div class="caja-btn">
                    <Link to="printlab/landing">
                        <button class = "btn-pink">
                            <span class="texto">IR AL INICIO</span>
                        </button>
                    </Link>
                </div>
                </Row>
            </div>
        </Container>
    );
    
  };
  
  export default ErrorMessage