import './CreateAccount.css'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import InputBox from'../input_box/InputBox'

import { Container, Row, Col } from 'reactstrap';

const CreateAccountForm = () => {
    return (
        <div class="formulario">
            <Container>
                <section>
                    <form name="datosPersonales" action="inicio_login.html" method="">
                        <h1>Crea una cuenta</h1>
                        <p>¿Ya tienes una cuenta? <a href="ingresar.html">Ingresa</a></p>
                        <InputBox input_id={"nombre"} input_type={"text"} label_text={'Nombre: '}></InputBox>
                        <InputBox input_id={"apellidos"} input_type={"text"} label_text={'Apellidos: '}></InputBox>
                        <InputBox input_id={"correo"} input_type={"email"} label_text={'Correo Electrónico: '}></InputBox>
                        <InputBox input_id={"contrasena"} input_type={"password"} label_text={'Contraseña: '}></InputBox>
                        <InputBox input_id={"conf_contrasena"} input_type={"password"} label_text={'Confirmar Contraseña: '}></InputBox>
                        <button class="botonForm">
                        <span class="texto">REGISTRARSE</span>
                        </button>
                    </form>
                </section>
            </Container>
        </div>
    );
    
  };
  
  export default CreateAccountForm;