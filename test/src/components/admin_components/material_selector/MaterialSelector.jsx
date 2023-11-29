import { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function MaterialSelector() {
    const [count, setCount] = useState(0)
  
    return (
      <>
    <h5>Materiales disponibles para este producto</h5>
    <Container>
        <Row>
            <Col>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label" for="flexCheckDefault">
                        Papel Offset
                    </label>
                </div>
            </Col>
            <Col>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label" for="flexCheckDefault">
                        Papel Estucado
                    </label>
                </div>
            </Col>
            <Col>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label" for="flexCheckDefault">
                        Papel Bond
                    </label>
                </div>
            </Col>
      </Row>
      <Row>
            <Col>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label" for="flexCheckDefault">
                        Papel fotográfico
                    </label>
                </div>
            </Col>
            <Col>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label" for="flexCheckDefault">
                        Papel de embalaje
                    </label>
                </div>
            </Col>
            <Col>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label" for="flexCheckDefault">
                        Papel regalo
                    </label>
                </div>
            </Col>
      </Row>
      <Row>
            <Col>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label" for="flexCheckDefault">
                        Cartulina Opalina
                    </label>
                </div>
            </Col>
            <Col>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label" for="flexCheckDefault">
                        Papel pergamino
                    </label>
                </div>
            </Col>
            <Col>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label className="form-check-label" for="flexCheckDefault">
                    Cartulina satinada
                </label>
            </div>
            </Col>
      </Row>
      <Row>
            <Col>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label" for="flexCheckDefault">
                        Cartulina texturizada
                    </label>
                </div>
            </Col>
            <Col>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label" for="flexCheckDefault">
                        Papel Kraft
                    </label>
                </div>
            </Col>
            <Col>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label" for="flexCheckDefault">
                    Otro ¿Cuál? 
                    </label>
                    <input className="text"></input>
                </div>
            </Col>
      </Row>
      </Container>
      </>
    );
  };
  
  export default MaterialSelector;