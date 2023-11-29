import { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function ShapeSelector() {
    const [count, setCount] = useState(0)
  
    return (
      <>
    <h5>Formas disponibles para este producto</h5>
     <Container>
        <Row>
            <Col>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label" for="flexCheckDefault">
                        Circulo
                    </label>
                </div>
            </Col>
            <Col>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label" for="flexCheckDefault">
                        Cuadrado
                    </label>
                </div>
            </Col>
            <Col>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label" for="flexCheckDefault">
                        Rectángulo
                    </label>
                </div>
            </Col>
            <Col>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label" for="flexCheckDefault">
                        Óvalo
                    </label>
                </div>
            </Col>
      </Row>
      </Container>
      </>
    );
  };
  
  export default ShapeSelector;