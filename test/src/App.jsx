import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Router, Link} from "react-router-dom";
import CreateAccount from './views/create_account/CreateAccount';
import LogIn from  './views/log_in/LogIn';
import AccountInfo from './views/account_info/AccountInfo';
import ErrorPage from './views/error_page/ErrorPage';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ErrorPage/>
    </>
  );
};

export default App
