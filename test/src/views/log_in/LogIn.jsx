import { useState } from 'react';
import './LogIn.css';
import logo from "../../assets/img/logo.png";
import splash from "../../assets/img/splash.png";
import { Container, Row, Col } from 'reactstrap';
import LogInForm from '../../components/log_in_form/LogInForm';
import 'bootstrap/dist/css/bootstrap.min.css';

function LogIn() {
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
            <LogInForm></LogInForm>
          </div>
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default LogIn