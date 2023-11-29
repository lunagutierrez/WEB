import { useState } from 'react';
import "./Users.css"
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserTable from '../../../components/admin_components/user_table/UserTable';

function Users() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className ="tabla-editable">
        <UserTable/>
    </div>
    </>
  );
};

export default Users;