import './Descrip.css';
import React from 'react';


const Descrip = () => {
  return (
    <div id="description" className="section">
      <h2>Descripción</h2>
      <br />
      <h5>Nuestras opciones de stickers personalizados vienen en estilos y tamaños que se ajustan a todo tipo de personalidades y usos:</h5>

      <ul className="charcs">
        <li>
          Los stickers individuales (anteriormente conocidos como stickers troquelados) son diseños únicos y separados que los clientes pueden agregar de forma individual
        </li>
        <li>
          Los stickers en rollo se ajustan a la mayoría de los dispensadores de etiquetas para una aplicación rápida y sencilla en artículos a granel. Es una elección práctica para propietarios de restaurantes o negocios de comercio electrónico que necesitan identificar sus productos.
        </li>
        <li>
          Las hojas de stickers son ideales para crear diferentes diseños en un mismo pedido. Imprime varios diseños iguales o diferentes para que cualquiera pueda pegar en sus laptops, teléfonos celulares, cuadernos u otras superficies personales.
        </li>
        <li>
          Los stickers con corte fácil (Kiss-cut) son fáciles de despegar y vienen con un respaldo cuadrado para proteger los bordes.
        </li>
      </ul>
    </div>
  );
};

export default Descrip;
