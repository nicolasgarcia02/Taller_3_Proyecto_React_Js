import axios from "axios";
import { useState } from "react";
import { Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router";
import Swal from 'sweetalert2'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import "./formulario.css"

function Formulario(){
    const history=useNavigate();
    
    const [data,setData]=useState({_id:"",tipodoc:"",nombre:"",apellido:"",
    fnacimiento:"",genero:"",email:"",telefono:"",paisorigen:"",password:"",tipouser:"",img:""});
    
    const handleChange=({target})=>{
    
        setData({
            ...data,
            [target.name]:target.value
        })
    }

    const url="https://hoteliakuepa.herokuapp.com/users";  

        const handleSubmit=async(e)=>{
            e.preventDefault();
            const response=await axios.post(url,data);
            if (response.status === 201) {
                
                Swal.fire(
                    'Guardado!',
                    `El estudiante <strong> ${response.data.nombre} ${response.data.apellido}</strong> ha sido guardado exitosamente!`,
                    'success'
                )
                history.push("/");
                
            }else {
                Swal.fire(
                    'Error!',
                    'Hubo un problema al registrar el estudiante!',
                    'error'
                )
            }
        }
    
    return(
        
        <form className="formreg" onSubmit={handleSubmit}>            
        <div className="form-row mb-2">
            
            <div className="form-group col-md-6">
                <label className="font-weight-bold">Tipo de Documento </label><br/>
                <select className="form-control" name="tipodoc" onChange={handleChange}>
                    <option value="cc">CC</option>
                    <option value="ti">TI</option>
                    <option value="otro">Otro</option>
                  </select>
            </div>
            <div className="form-group col-md-6">
                <label className="font-weight-bold">Número de Documento</label>
                <input type="number" className="form-control" onChange={handleChange} name='_id' value={data._id}></input>
            </div>
            <div className="form-group col-md-6">
                <label className="font-weight-bold">Nombres </label>
                <input type="text" className="form-control" onChange={handleChange} name='nombre' value={data.nombre}></input>
            </div>
            <div className="form-group col-md-6">
                <label className="font-weight-bold">Apellidos</label>
                <input type="text" className="form-control" onChange={handleChange} name='apellido' value={data.apellido}></input>
            </div>
            <div className="form-group col-md-6">
                <label className="font-weight-bold">Fecha Nacimiento</label>
                <input type="date" className="form-control" onChange={handleChange} name='fnacimiento' value={data.fnacimiento}></input>
            </div>
            <div className="form-group col-md-6">
                <label className="font-weight-bold">Género</label><br/>
                <label className="font-weight-bold">Hombre</label>
                <input type="radio" name="genero" value="1"></input>
                <label className="font-weight-bold">Mujer</label>
                <input type="radio" name="genero" value="2"></input>
                <label className="font-weight-bold">Otro</label>
                <input type="radio" name="genero" value="3"></input>
            </div>
            <div className="form-group col-md-6">
            <label className="font-weight-bold">Email</label>
            <input type="email" class="form-control" onChange={handleChange} name='email' value={data.email}></input>
            </div>
            <div className="form-group col-md-6">
                <label className="font-weight-bold">Teléfono de Contacto</label>
                <input type="number" className="form-control" onChange={handleChange} name='telefono' value={data.telefono}/>
            </div>
            <div className="form-group col-md-6">
                <label className="font-weight-bold">País de origen </label><br/>
                <select className="form-control" name="pais" placeholder="Escoja una opción" onChange={handleChange}>
                    <option value="cc">Colombia</option>
                    <option value="ti">Venezuela</option>
                    <option value="otro">Chile</option>
                </select>
            </div>
            <div className="form-group col-md-6">
                <label className="font-weight-bold">Foto</label>
                <input type="file" className="form-control" onChange={handleChange} name='img' value={data.img}></input>
            </div>
            <div className="form-group col-md-6">
                <label className="font-weight-bold">Contraseña</label>
                <input type="password" className="form-control" onChange={handleChange} name='password' value={data.password}></input>
            </div>
            <div className="form-group col-md-6">
                <label className="font-weight-bold">Confirmar Contraseña</label>
                <input type="password" className="form-control" onChange={handleChange} name='password' value={data.password}></input>
            </div>
            </div>
                            
            <div className="form-group mb-5">
            <div className="check">
             <input className="checkbox" type="checkbox" data-toggle="modal" data-target="#Terminos"></input>                    
                <label className="acepto">Acepto Terminos y Condiciones</label>
            </div>
        </div>
        <div className="modal fade" id="Terminos" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">Terminos y Condiciones</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close" >
                <span aria-hidden="true">&times;</span>
          </button>
             </div>
            <div className="modal-body">
            <p>Estos Terminos de Servicio reflejan la forma<br/>
                de trabajar de Google como empresa, las<br/>
                leyes por las que nos regimos y determinados<br/>
                aspectos que siempre hemos creído que son<br/>
                ciertos. Por ello, estos Términos de Servicio<br/>
                ayudan a definir la relación que tiene Google<br/>
                contigo cuando interactúas con nuestros<br/>
                servicios. Por ejemplo, estos términos<br/>
                incluyen las siguientes secciones:<br/><br/>
                Qué pueden esperar de nosotros, donde se<br/>
                describe cómo proporcionamos y<br/>
                desarrollamos nuestros servicios.<br/>
                Lo que esperamos de ti, donde se establecen<br/>
                ciertas reglas para utilizar nuestros servicios.</p>            
            </div>
            <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Aceptar</button>
                </div>
            </div>
            </div>
        </div>
        <div className="botonreg">               
            <button className="butreg">Ingresar</button>
    </div>
    </form>
    );
}
export default Formulario;