import { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function SizeSelector() {
    const [count, setCount] = useState(0)
  
    return (
     <>
     <h5>Tamaños disponibles para este producto</h5> 
     <Container>
        <Row>
            <Col>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label class="form-check-label" for="flexCheckDefault">
                        Miniatura
                    </label>
                </div>
            </Col>
            <Col>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label class="form-check-label" for="flexCheckDefault">
                        Pequeño
                    </label>
                </div>
            </Col>
            <Col>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label class="form-check-label" for="flexCheckDefault">
                        Estándar (A4)
                    </label>
                </div>
            </Col>
            <Col>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label class="form-check-label" for="flexCheckDefault">
                        Grande
                    </label>
                </div>
            </Col>
      </Row>
      </Container>
      </>
    );
  };
  
  export default SizeSelector;