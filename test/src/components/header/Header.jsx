import './Header.css'
import logo from "../../assets/img/logo.png"

function Header() {

    return (
        
  <nav id="navbar-logged-out" class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <a href="inicio.html" class="navbar-brand ms-2">
      <img width="50%" height="auto" src={logo}/>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="custom-navbar-nav navbar-nav ms-0 mb-2 mb-md-0">
        <li class="nav-item active"><a href="inicio.html" class="nav-link">INICIO</a></li>
        <li class="nav-item"><a href="views/tienda.html" class="nav-link">TIENDA</a></li>
        <li class="nav-item"><a href="#" class="nav-link">NOSOTROS</a></li>
      </ul>

      <ul class="icons d-flex justify-content-end mb-2 mb-md-0 ms-3">
        <li>
          <a href="#">
            <img class="img-fluid" src="assets/img/cart.png" alt="Carrito"/>
          </a>
        </li>
        <li>
          <a href="views/ingresar.html">
            <img class="img-fluid" src="assets/img/user.png" alt="Usuario"/>
          </a>
        </li>
        <li>
          <a href="#">
            <img class="img-fluid" src="assets/img/vertical_line.png" alt="Linea"/>
          </a>
        </li>
        <li>
          <a href="#">
            <img class="img-fluid" src="assets/img/menu.png" alt="Menú"/>
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}

export default Header