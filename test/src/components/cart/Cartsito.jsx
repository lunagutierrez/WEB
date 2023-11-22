import Summ from './summ/Summ';
import React, { useState } from 'react';
import { Accordion, Col, Row, AccordionBody, AccordionHeader, AccordionItem,} from 'reactstrap';
import Contact from './contact/Contact';
import Delivery from './delivery/Delivery';
import Payment from './payment/Payment';

const prods = [
    { prod: 'Product 1', imgUrl: 'https://staticecp.uprinting.com/6802/700x700/UP_CTS_PDP_Image_C.jpg', price: 10 },
    { prod: 'Product 2', imgUrl: 'https://staticecp.uprinting.com/6802/700x700/UP_CTS_PDP_Image_C.jpg', price: 20 },
    { prod: 'Product 3', imgUrl: 'https://staticecp.uprinting.com/6802/700x700/UP_CTS_PDP_Image_C.jpg', price: 30 },
    ];

const Cartsito = () => {
    const [open, setOpen] = useState('1');

    const toggle = (id) => {
        if (open === id) {
            setOpen('');
        } else {
            setOpen(id);
        }
    };
    
    return (

        <Row>
            <Col className='ms-5'>
            <Accordion open={open} toggle={toggle}>
                <AccordionItem>
                    <AccordionHeader targetId="1">
                        Detalles de contacto
                    </AccordionHeader>
                    <AccordionBody accordionId="1" className="accordion-body">
                        <Contact />
                    </AccordionBody>
                </AccordionItem>

                <AccordionItem>
                    <AccordionHeader targetId="2">
                        Detalles de Envío              
                    </AccordionHeader>
                    <AccordionBody accordionId="2" className="accordion-body">
                        <Delivery />
                    </AccordionBody>
                </AccordionItem>

                <AccordionItem>
                    <AccordionHeader targetId="3">
                        Detalles de Pago
                    </AccordionHeader>
                    <AccordionBody accordionId="3" className="accordion-body">
                        <Payment />
                    </AccordionBody>
                </AccordionItem>
            </Accordion>
            </Col>
            <Col>
                <Summ products={prods} />
            </Col>
        </Row>
     
  );
};

export default Cartsito;
