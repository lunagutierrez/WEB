import { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function TextureSelector() {
    const [count, setCount] = useState(0)
  
    return (
    <>
    <h5>Acabados disponibles para este producto</h5>
    <Container>
        <Row>
            <Col>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label" for="flexCheckDefault">
                        Brillante
                    </label>
                </div>
            </Col>
            <Col>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label" for="flexCheckDefault">
                        Mate
                    </label>
                </div>
            </Col>
            <Col>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label" for="flexCheckDefault">
                        Opaco
                    </label>
                </div>
            </Col>
      </Row>
      </Container>
      </>
    );
  };
  
  export default TextureSelector;