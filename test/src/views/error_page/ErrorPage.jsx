import { useState } from 'react';
import './ErrorPage.css';
import logo from "../../assets/img/logo.png";
import splash from "../../assets/img/splash.png";
import { Container, Row, Col } from 'reactstrap';
import ErrorMessage from "../../components/error_message/ErrorMessage";
import 'bootstrap/dist/css/bootstrap.min.css';

function ErrorPage() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Container>
      <Row>
        <div class="caja-logo">
          <img width="50%" height="auto" src={logo} alt="Logo" />
        </div>
      </Row>
      <Row xs ="1" md ="2">
        <Col>
          <div class="splashImg">
            <img src={splash}/>
          </div>
        </Col>
        <Col>
          <div class= "caja-formulario">
            <ErrorMessage></ErrorMessage>
          </div>
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default ErrorPage