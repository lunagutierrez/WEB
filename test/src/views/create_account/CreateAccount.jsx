import { useState } from 'react';
import './CreateAccount.css';
import logo from "../../assets/img/logo.png";
import splash from "../../assets/img/splash.png";
import { Container, Row, Col } from 'reactstrap';
import CreateAccountForm from '../../components/create_account_form/CreateAccountForm';
import 'bootstrap/dist/css/bootstrap.min.css';

function CreateAccount() {
  
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
            <CreateAccountForm></CreateAccountForm>
          </div>
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default CreateAccount