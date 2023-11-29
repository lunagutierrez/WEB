import './CreateAccountForm.css'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import InputBox from'../input_box/InputBox';
import { Link } from 'react-router-dom';

import { Container, Row, Col } from 'reactstrap';

const CreateAccountForm = () => {
    return (
        <div className="formulario">
            <Container>
                <section>
                    <form name="datosPersonales" method="">
                        <h1>Crea una cuenta</h1>
                        <p>¿Ya tienes una cuenta? <Link to="/forms/login">Ingresa</Link></p>
                        <Col>
                            <Row>
                                <InputBox input_id={"nombre"} input_type={"text"} label_text={'Nombre: '}></InputBox>
                            </Row>
                            <Row>
                                <InputBox input_id={"apellidos"} input_type={"text"} label_text={'Apellidos: '}></InputBox>
                            </Row>
                            <Row>
                                <InputBox input_id={"correo"} input_type={"email"} label_text={'Correo Electrónico: '}></InputBox>
                            </Row>
                            <Row>
                                <InputBox input_id={"contrasena"} input_type={"password"} label_text={'Contraseña: '}></InputBox>
                            </Row>
                            <Row>
                                <InputBox input_id={"conf_contrasena"} input_type={"password"} label_text={'Confirmar Contraseña: '}></InputBox>
                            </Row>
                            <Row>
                                <div className="caja-btn-rosa">
                                <Link to="/printlab/landing">
                                    <button className = "btn-rosa">
                                        <span className="texto">REGISTRARSE</span>
                                    </button>
                                </Link>
                                </div>
                            </Row>
                            <Row>
                                <div className="caja-btn">
                                    <button className = "btn-social">
                                        <span className="texto">Ingresa con Google <FontAwesomeIcon icon={faGoogle} /></span>
                                    </button>
                                </div>
                            </Row>
                            <Row>
                                <div className="caja-btn">
                                    <button className = "btn-social">
                                        <span className="texto">Ingresa con Facebook <FontAwesomeIcon icon={faFacebook}/></span>
                                    </button>
                                </div>
                            </Row>
                        </Col>
                    </form>
                </section>
            </Container>
        </div>
    );
    
  };
  
  export default CreateAccountForm;