import './LogInForm.css'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import InputBox from'../input_box/InputBox'

import { Container, Row, Col } from 'reactstrap';

const LogInForm = () => {
    return (
        <div class="formulario">
            <Container>
                <section>
                    <form name="datosPersonales" method="">
                        <h1>Login</h1>
                        <p>¿No tienes una cuenta? <Link to="/forms/create_account"> Crea una ahora</Link></p>
                        <Col>
                            <Row>
                                <InputBox input_id={"correo"} input_type={"email"} label_text={'Correo electrónico: '}></InputBox>
                            </Row>
                            <Row>
                                <InputBox input_id={"contrasena"} input_type={"password"} label_text={'Contraseña: '}></InputBox>
                            </Row>
                            <Row>
                                <div class="caja-btn">
                                    <Link to="/printlab/landing">
                                        <button class = "btn-rosa">
                                            <span class="texto">LOGIN</span>
                                        </button>
                                    </Link>
                                </div>
                            </Row>
                            <Row>
                                <p><Link to="forms/forgotten_password">¿Olvidaste tu contraseña?</Link></p>
                            </Row>
                            <Row>
                                <div class="caja/btn">
                                        <button class = "btn-social">
                                            <span class="texto">Ingresa con Google <FontAwesomeIcon icon={faGoogle} /></span>
                                        </button>
                                </div>
                            </Row>
                            <Row>
                                <div class="caja-btn">
                                    <button class = "btn-social">
                                        <span class="texto">Ingresa con Facebook <FontAwesomeIcon icon={faFacebook}/></span>
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
  
  export default LogInForm