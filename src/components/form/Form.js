import imalogin from "./Hotelia horizontal negro.svg";
import { Link } from "react-router-dom";
import "./Form.css";
function Form(){
    return(
        
        
<body class="fondo-login">

<div class="login-box">
    <form action="" method="" class="container-form">
      
      <img src={imalogin} />
      
      <label for="username">Usuario</label>
      <input type="text" placeholder="Ingresar Usuario"></input>
      <label for="password">Contraseña</label>
      <input type="password" placeholder="Ingresar Contraseña"></input>
      <div class="ingresar">
        <Link to='/dashboard' className="item"><button class="navbar-button">
        <i class="fa-solid fa-user"></i> Iniciar</button> </Link>
      </div>

<Link to='/registrar' className="item"><p> ¿No tienes cuenta?
            <i class="fa-solid fa-user"></i> Regístrate aquí</p> </Link>
  </form></div>
</body>
    );
}

export default Form;