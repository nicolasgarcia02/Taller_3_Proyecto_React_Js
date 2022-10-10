import logov from "./Hotelia horizontal blanco.svg";
import {Link} from "react-router-dom";
import "./Nav.css";
import { useState } from "react";

function Nav(){
    const [menu, setmenu] = useState(false)
    function ham () {
        if (menu === false){
            setmenu(true)
        }
        else if (menu === true){
            setmenu(false)
        }
    }
    return(
        <body className="body-index">
        <nav className="nav-index">
            <div className="logo">
            <img src={logov} />
                <i className="fa-solid fa-bars hamburguer" onClick={()=>{ham()}}></i>
            </div>
    
            <div className={menu ? "menu open" : menu === false ? "menu outside" : "menu"}>
                <Link className="item">Inicio</Link>
                <Link className="item">Ubícanos</Link>
                <Link className="item">Opiniones</Link>
                <hr className="menu-hr" noshade=""></hr>
                <Link to='/login' className="item"><button className="navbar-button">
                <i className="fa-solid fa-user"></i> Iniciar Sesión</button> </Link>
                <Link to='/listar' className="item"><button className="navbar-button">
                <i className="fa-solid fa-user"></i> Listar</button> </Link>
                <Link to='/actualizar' className="item"><button className="navbar-button">
                <i className="fa-solid fa-user"></i> Actualizar</button> </Link>
                <Link to='/registrarusuario' className="item"><button className="navbar-button">
                <i className="fa-solid fa-user"></i> Registrar</button> </Link>
            </div>
        </nav>
        </body>
    );
}
export default Nav;