import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import CreateAccount from './views/create_account/CreateAccount';
import LogIn from  './views/log_in/LogIn';
import AccountInfo from './views/account_info/AccountInfo';
import ErrorPage from './views/error_page/ErrorPage';
import ProdTabs from './components/prodTabs/ProdTabs';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CreateAccount/>
    </>
  );
};

export default App
