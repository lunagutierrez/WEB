import './LogInForm.css'
import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import InputBox from'../input_box/InputBox'

import { Container, Row, Col } from 'reactstrap';
import { AuthContext } from '../../context/auth';

const LogInForm = () => {
    const { set_auth } = useContext(AuthContext)
    return (
        <div className="formulario">
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
                                <div className="caja-btn-rosa">
                                    <Link to="/printlab/landing">
                                        <button className = "btn-rosa" onClick={() => set_auth(true)}>
                                            <span className="texto">LOGIN</span>
                                        </button>
                                    </Link>
                                </div>
                            </Row>
                            <Row>
                                <p><Link to="/forms/forgotten_password">¿Olvidaste tu contraseña?</Link></p>
                            </Row>
                            <Row>
                                <p><Link to="/forms/admin_form">Ingresa como administrador</Link></p>
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
  
  export default LogInForm