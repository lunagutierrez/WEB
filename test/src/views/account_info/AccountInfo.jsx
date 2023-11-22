import { useState } from 'react'
import './AccountInfo.css'
import logo from "../../assets/img/logo.png"
import splash from "../../assets/img/splash.png"
import { Container, Row, Col } from 'reactstrap';
import EditAccountForm from '../../components/edit_account_form/EditAccountForm';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function AccountInfo() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div class="bloque-cuenta">
      <Container>
        <Row xs ="1" md ="2">
          <Col className="d-none d-lg-block">
            <div class="splashImg">
              <img src={splash}/>
            </div>
          </Col>
          <Col>
            <div class= "caja-formulario">
              <EditAccountForm></EditAccountForm>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    </>
  );
};

export default AccountInfo