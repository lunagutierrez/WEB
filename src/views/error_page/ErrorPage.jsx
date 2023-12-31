import { useState } from 'react';
import './ErrorPage.css';
import logo from "../../assets/img/logo.png";
import splash from "../../assets/img/splash.png";
import { Container, Row, Col } from 'reactstrap';
import ErrorMessage from "../../components/error_message/ErrorMessage";
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom'; 

function ErrorPage() {
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
        <Col>
          <div className="splashImg">
            <img src={splash}/>
          </div>
        </Col>
        <Col>
          <div className= "caja-formulario">
            <ErrorMessage></ErrorMessage>
          </div>
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default ErrorPage