import { useState } from 'react'
import './CreateAccount.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

import 'bootstrap/dist/css/bootstrap.min.css';

function CreateAccount() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header></Header>
    <Footer></Footer>
    </>
  )
}

export default CreateAccount