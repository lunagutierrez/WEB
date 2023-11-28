import InputBox from'../input_box/InputBox';
import './ForgottenPasswordForm.css'
import { Link } from 'react-router-dom';

import { Container, Row, Col } from 'reactstrap';

const ForgottenPasswordForm = () => {
    return (
        <div class="formulario">
            <Container>
                <section>
                    <form name="datosPersonales" method="">
                        <h1>Recupera tu contraseña</h1>
                        <p> Ingresa el correo electrónico registrado en Printlab. En los siguientes minutos recibirás un correo con las intrucciones para recuperar tu contraseña</p>
                        <Col>
                            <Row>
                                <InputBox input_id={"correo"} input_type={"text"} label_text={'Correo electrónico registrado: '}></InputBox>
                            </Row>
                            <Row>
                                <div class="caja-btn-rosa">
                                <Link to="/printlab/landing">
                                    <button class = "btn-rosa">
                                        <span class="texto">RECUPERAR CONTRASEÑA</span>
                                    </button>
                                </Link>
                                </div>
                            </Row>
                        </Col>
                    </form>
                </section>
            </Container>
        </div>
    );
    
  };
  
  export default ForgottenPasswordForm;