import { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function UserTable() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div class="table-responsive">
    <table class="table">
    <caption>Lista de usuarios</caption>
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellidos</th>
            <th scope="col">Correo</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <th scope="row">1</th>
            <td>Ana María</td>
            <td>Garzón Sánchez</td>
            <td>garzonsanana@gmail.com</td>
            </tr>
            <tr>
            <th scope="row">2</th>
            <td>Luna María</td>
            <td>Gutiérrez Jaramillo</td>
            <td>lunaguja@gmail.com</td>
            </tr>
            <tr>
            <th scope="row">3</th>
            <td>Felipe</td>
            <td>Muñoz Vélez</td>
            <td>felipemunoz@outlook.com</td>
            </tr>
            <tr>
            <th scope="row">4</th>
            <td>Tatiana</td>
            <td>Cabrera</td>
            <td>@twitter</td>
            </tr>
            <tr>
            <th scope="row">5</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
            </tr>
            <tr>
            <th scope="row">6</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
            </tr>
            <tr>
            <th scope="row">7</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
            </tr>
            <tr>
            <th scope="row">8</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
            </tr>
            <tr>
            <th scope="row">9</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
            </tr>
            <tr>
            <th scope="row">10</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
            </tr>
        </tbody>
    </table>
    </div>
    </>
  );
};

export default UserTable;