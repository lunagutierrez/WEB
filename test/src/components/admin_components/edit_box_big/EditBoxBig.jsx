import { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './EditBoxBig.css'

function EditBoxBig() {
    const [count, setCount] = useState(0)
  
    return (
      <>
        <input className="caja-2" type="text" placeholder='Nombre del Producto'></input>
      </>
    );
  };
  
  export default EditBoxBig;