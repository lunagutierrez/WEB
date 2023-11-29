import { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './DescriptionBox.css'

function DescriptionBox() {
    const [count, setCount] = useState(0)
  
    return (
      <>
        <input class="caja-1" type="text" placeholder='Descripción del Producto'></input>
      </>
    );
  };
  
  export default DescriptionBox;