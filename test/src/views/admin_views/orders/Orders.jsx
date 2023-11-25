import { useState } from 'react';
import "./Orders.css"
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import OrdersTable from '../../../components/admin_components/order_table/OrderTable'

function Orders() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div class ="tabla-editable-orders">
        <OrdersTable/>
    </div>
    </>
  );
};

export default Orders;