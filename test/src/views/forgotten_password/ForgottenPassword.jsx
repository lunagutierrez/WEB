import { useState } from 'react';
import './ForgottenPassword.css';
import logo from "../../assets/img/logo.png";
import splash from "../../assets/img/splash.png";
import { Container, Row, Col } from 'reactstrap';
import ForgottenPasswordForm from '../../components/forgotten_password_form/ForgottenPasswordForm';
import 'bootstrap/dist/css/bootstrap.min.css';

function ForgottenPassword() {
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
        <Col className="d-none d-lg-block">
          <div class="splashImg">
            <img src={splash}/>
          </div>
        </Col>
        <Col>
          <div class= "caja-formulario">
            <ForgottenPasswordForm></ForgottenPasswordForm>
          </div>
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default ForgottenPassword