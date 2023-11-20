import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Button } from 'reactstrap';
import './Faq.css';

const Faq = () => {
  const [open, setOpen] = useState('1');

  const toggle = (id) => {
    if (open === id) {
      setOpen('');
    } else {
      setOpen(id);
    }
  };

  return (
    <div id="faq" className="section">
      <h2>FAQ</h2>

      <div className="row">
        <div className="col-md-3 ms-5">
            <Button className="btn-pink py-1 px-2 border-0"> Haz una pregunta <FontAwesomeIcon icon={faPlus} /> </Button>
        </div>

        <div className="col-md-8">
          <Accordion open={open} toggle={toggle}>
            <AccordionItem>
              <AccordionHeader targetId="1">
                Para los stickers Kiss-cut, ¿cuánto espacio debo dejar entre la pegatina y el borde del cuadrado?
              </AccordionHeader>
              <AccordionBody accordionId="1" className="accordion-body">
                El espacio entre la pegatina y el borde de cada cuadrado es de 1/4 de pulgada. Debes utilizar un trazo para indicar la línea de corte del Kiss-cut.
              </AccordionBody>
            </AccordionItem>

            <AccordionItem>
              <AccordionHeader targetId="2">
                En el paquete de 100 personalizados, ¿son 100 stickers con lo mismo en cada uno de ellos o son 100 stickers diferentes entre ellos?
              </AccordionHeader>
              <AccordionBody accordionId="2" className="accordion-body">
                En el paquete de 100 todos los stickers son iguales. Si deseas diferentes diseños, debes elegir la opción de hojas de stickers y comprar productos por separado.
              </AccordionBody>
            </AccordionItem>

            <AccordionItem>
              <AccordionHeader targetId="3">
                ¿Cuántos stickers vienen por rollo?
              </AccordionHeader>
              <AccordionBody accordionId="3" className="accordion-body">
                Depende de tus necesidades. Puedes escoger entre 10, 50, 100 o 500 stickers por rollo.
              </AccordionBody>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Faq;