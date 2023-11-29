import { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function UserTable() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="table-responsive">
    <table className="table">
    <caption>Lista de pedidos</caption>
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">ID del producto</th>
            <th scope="col">Especificaciones del producto</th>
            <th scope="col">Archivo</th>
            <th scope="col">Fecha de pedido</th>
            <th scope="col">Dirección de entrega</th>
            <th scope="col">Usuario</th>
            <th scope="col">Correo del usuario</th>
            <th scope="col">Precio (COP)</th>
            <th scope="col">Estatus del pedido</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <th scope="row">1</th>
            <td>145A2</td>
            <td>Poster; Cartulina; 150m x 90m; Impresión a color; 1 unidad</td>
            <td>poster_capstone.pdf</td>
            <td>25/11/2023</td>
            <td>Cra 65 # 42b-3</td>
            <td>Luna Gutiérrez</td>    
            <td>lunaguja@gmail.com</td>
            <td>45.000</td>
            <td>En impresión</td>           
            </tr>
            <tr>
            <th scope="row">2</th>
            <td>13984D</td>
            <td>Postal; Cartulina; 15cm x 10cm; Impresión a color; 3 unidades</td>
            <td>postal_navidad.pdf</td>
            <td>20/11/2023</td>
            <td>Cra 65 # 42b-3</td>
            <td>Luna Gutiérrez</td>    
            <td>lunaguja@gmail.com</td>
            <td>35.000</td>
            <td>Entregado</td>  
            </tr>
            <tr>
            <th scope="row">3</th>
            <td>1SIDU</td>
            <td>Folleto; Papel de revista; 21cm x 42cm; Impresión a color; 2 unidades</td>
            <td>catalogo_ropa.pdf</td>
            <td>23/11/2023</td>
            <td>Cra 102 # 5a-45</td>
            <td>Felipe Muñoz</td>    
            <td>felipemunoz@outlook.com</td>
            <td>22.000</td>            
            <td>Recibido</td>  
            </tr>
            <tr>
            <th scope="row">4</th>
            <td>1983H3</td>
            <td>Folleto; Cartulina; 30cm x 30cm; Impresión a color; 30 unidades</td>
            <td>menu_arroz_chino.pdf</td>
            <td>20/11/2023</td>
            <td>Cra 45 # 35a-5</td>
            <td>Ana Garzon</td>    
            <td>garzonsanana@gmail.com</td>
            <td>437.000</td>
            <td>Entregado</td>  
            </tr>
            <tr>
            <th scope="row">5</th>
            <td>1SD98I</td>
            <td>Papel blanco; 42cm x 21cm; Impresión a blanco y negro; 1 unidad; 80 páginas</td>
            <td>Tesis.pdf</td>
            <td>25/11/2023</td>
            <td>Calle 92 # 11-45</td>
            <td>Tatiana Cabrera</td>    
            <td>tatianal.cabrera@urosario.edu.co</td>
            <td>52.000</td>
            <td>En camino</td>  
            </tr>
            <tr>
            <th scope="row">6</th>
            <td>S9D89U</td>
            <td>Poster; Cartulina; 150m x 90m; Impresión a color; 1 unidad</td>
            <td>poster_masd.pdf</td>
            <td>27/11/2023</td>
            <td>Calle 100 # 7-95</td>
            <td>Valeria Ferreira</td>    
            <td>valferr@gmail.com</td>
            <td>45.000</td>
            <td>En impresión</td>  
            </tr>
        </tbody>
    </table>
    </div>
    </>
  );
};

export default UserTable;