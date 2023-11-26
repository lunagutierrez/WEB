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
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label class="form-check-label" for="flexCheckDefault">
                        Circulo
                    </label>
                </div>
            </Col>
            <Col>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label class="form-check-label" for="flexCheckDefault">
                        Cuadrado
                    </label>
                </div>
            </Col>
            <Col>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label class="form-check-label" for="flexCheckDefault">
                        Rectángulo
                    </label>
                </div>
            </Col>
            <Col>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label class="form-check-label" for="flexCheckDefault">
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