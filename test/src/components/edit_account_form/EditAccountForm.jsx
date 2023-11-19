import './EditAccountForm.css'
import React from 'react';
import InputBox from'../input_box/InputBox'

import { Container, Row, Col } from 'reactstrap';

const EditAccountForm = () => {
    return (
        <div class="formulario">
            <Container>
                <section>
                    <form name="datosPersonales" action="inicio_login.html" method="">
                        <h1>Tu Cuenta</h1>
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
                                <div class="caja-btn">
                                <button class = "btn-pink">
                                    <span class="texto">EDITAR INFORMACIÓN</span>
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
  
  export default EditAccountForm;