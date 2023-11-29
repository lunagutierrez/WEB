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
            <td>tatianal.cabrera@urosario.edu.co</td>
            </tr>
            <tr>
            <th scope="row">5</th>
            <td>Camilo</td>
            <td>Fernández</td>
            <td>camfer@hotmail.com</td>
            </tr>
            <tr>
            <th scope="row">6</th>
            <td>Pablo</td>
            <td>Picasso</td>
            <td>pablopintor@museo.com</td>
            </tr>
            <tr>
            <th scope="row">7</th>
            <td>Fernando</td>
            <td>Montaño</td>
            <td>monta.fer@gmail.com</td>
            </tr>
            <tr>
            <th scope="row">8</th>
            <td>Andrés</td>
            <td>Aguirre</td>
            <td>aa_aguila@terra.com</td>
            </tr>
            <tr>
            <th scope="row">9</th>
            <td>Francesca</td>
            <td>Benavides</td>
            <td>fran_ben_89@outlook.com</td>
            </tr>
            <tr>
            <th scope="row">10</th>
            <td>Carlota</td>
            <td>Jiménez</td>
            <td>calra_495037@gmail.com</td>
            </tr>
        </tbody>
    </table>
    </div>
    </>
  );
};

export default UserTable;