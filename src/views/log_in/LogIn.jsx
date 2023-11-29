import { useState } from 'react';
import './LogIn.css';
import logo from "../../assets/img/logo.png";
import splash from "../../assets/img/splash.png";
import { Container, Row, Col } from 'reactstrap';
import LogInForm from '../../components/log_in_form/LogInForm';
import { NavLink } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';

function LogIn() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Container>
      <Row>
        <NavLink to={'/printlab/landing'} className="navbar-brand ms-2">
            <img width="17%" height="auto" src={logo} alt="Logo" />
        </NavLink>
      </Row>
      <Row xs ="1" md ="2">
        <Col className="d-none d-lg-block">
          <div className="splashImg">
            <img src={splash}/>
          </div>
        </Col>
        <Col>
          <div className= "caja-formulario">
            <LogInForm></LogInForm>
          </div>
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default LogIn