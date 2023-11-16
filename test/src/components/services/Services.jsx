import './Services.css'

import Service from './service/Service'
import paint from "../../assets/img/bx-paint.svg"
import print from "../../assets/img/bx-printer.svg"
import box from "../../assets/img/bx-package.svg"

import React from 'react';
import { Row } from 'reactstrap';

const Services = () => {
  return (
    <div className="service-list-container">
        <Row>
        <Service
            imageUrl={paint}
            title="Diseña y crea"
            description="Contamos con una amplia selección de plantillas diseñadas por profesionales, temas y estilos."
        />
        <Service
            imageUrl={print}
            title="Diseño profesional"
            description="Contamos con profesionales para ayudarte a hacer tus ideas realidad. Escribe a design@printlab.com.co para solicitar este servicio."
        />
        <Service
            imageUrl={box}
            title="Carga tus archivos"
            description="Sube archivos con tus diseños originales. Para obtener el mejor resultado posible, ten en cuenta nuestras recomendaciones de carga"
        />
        </Row>
    </div>
  );
};

export default Services;
