import './LogInForm.css'
import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import {Link, Routes, Route, useNavigate} from 'react-router-dom';
import InputBox from'../input_box/InputBox';

import { Container, Row, Col } from 'reactstrap';

const LogInForm = () => {
    const navigate = useNavigate();
    const [correo, setCorreo] = useState('');
    const [contrasena, setContrasena] = useState('');

    const handleSubmitLogIn = (e) => {
        e.preventDefault();
        if( correo == "admin@printlab.com" && contrasena == "admin123"){
            navigate('/admin/admin_landing');
        }else if( correo == "luna@gmail.com" && contrasena == "luna"){
            navigate('/printlab/landing');
        }else if( correo == "ana@gmail.com" && contrasena == "ana"){
            navigate('/printlab/landing');
        }else{
            alert("Usuario o contraseña incorrectos");
        }
        
    }
    return (
        <div class="formulario">
            <Container>
                <section>
                <form onSubmit={handleSubmitLogIn}>
                        <h1>Login</h1>
                        <p>¿No tienes una cuenta? <Link to="/forms/create_account"> Crea una ahora</Link></p>
                       
                        <Col>
                        <Row>
                                <div className="form-input">
                                    <div className='label-input'>
                                        <label for ="correo">Correo Electrónico: </label>
                                    </div>
                                    <input 
                                    id="correo"
                                    type="email"
                                    name="correo"
                                    value={correo}
                                    onChange ={(e)=> setCorreo(e.target.value)}
                                    />
                                </div>
                        </Row>
                        <Row>
                                <div className="form-input">
                                    <div className='label-input'>
                                        <label for ="contrasena">Contraseña: </label>
                                    </div>
                                    <input 
                                    id="contrasena"
                                    type="password"
                                    name="contrasena"
                                    value={contrasena}
                                    onChange ={(e)=> setContrasena(e.target.value)}
                                    />
                                </div>
                        </Row>
                        <Row>
                                <div class="caja-btn-rosa">
                                        <button class = "btn-rosa" type="submit">
                                            <span class="texto">LOGIN</span>
                                        </button>
                                </div>
                        </Row>
                            <Row>
                                <p><Link to="/forms/forgotten_password">¿Olvidaste tu contraseña?</Link></p>
                            </Row>
                            <Row>
                                <div class="caja-btn">
                                        <button class = "btn-social">
                                            <span class="texto">Ingresa con Google <FontAwesomeIcon icon={faGoogle} /></span>
                                        </button>
                                </div>
                            </Row>
                            <Row>
                                <div class="caja-btn">
                                    <Link>
                                    <button class = "btn-social">
                                        <span class="texto">Ingresa con Facebook <FontAwesomeIcon icon={faFacebook}/></span>
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
  
  export default LogInForm