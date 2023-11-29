import './AdminForm.css'
import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import InputBox from'../input_box/InputBox'

import { Container, Row, Col } from 'reactstrap';

const AdminForm = () => {
    return (
        <div className="formulario">
            <Container>
                <section>
                    <form name="datosPersonales" method="">
                        <h1>Ingreso como Administrador</h1>
                        <Col>
                            <Row>
                                <InputBox input_id={"correo"} input_type={"email"} label_text={'Correo electrónico: '}></InputBox>
                            </Row>
                            <Row>
                                <InputBox input_id={"contrasena"} input_type={"password"} label_text={'Contraseña: '}></InputBox>
                            </Row>
                            <Row>
                                <div className="caja-btn-rosa">
                                    <Link to="/admin/store_admin">
                                        <button className = "btn-rosa">
                                            <span className="texto">LOGIN</span>
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
  
  export default AdminForm;