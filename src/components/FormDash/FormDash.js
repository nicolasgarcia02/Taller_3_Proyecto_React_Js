import axios from 'axios';
import { useEffect, useState } from 'react';
import foto from "./señora.jpg";
import "./FormDash.css";

function DashForm() {

    return (

        <body className="fondo-dashboard">
            

            <section class="formulario-dashboard">

                <div class="form-dashboard">


                    <h2 class="titulo-dashboard">Bienvenido, Angie Vargas</h2>


                    <div class="foto-dashboard">
                <div class="img"><img src={foto} /></div>
                <div class="icon2-dashboard">
                    <i class="fa-solid fa-file-export"></i>
                </div>
                <div class="icon-dashboard">
                    <i class="fa-solid fa-file-export"></i>
                    <i class="fa-solid fa-file-image"></i>
                </div>
                <a href="#"><h4>Cambiar contraseña</h4></a>
            </div>

                    <div class="column-2-dashboard">
                        <div class="form-group">
                            <label className="label-dashboard" for="TipoDoc">Tipo de documento<span class="text-danger"><b>*</b></span></label>
                            <input type="text" class="form-control input-dashboard" readonly onmousedown="" value="Cédula de ciudadania" />
                        </div>

                        <div class="form-group">
                            <label className="label-dashboard" for="Nombre">Nombres<span class="text-danger"><b>*</b></span></label>
                            <input type="text" class="form-control input-dashboard" readonly onmousedown="" value="Angie Camila" />
                        </div>

                        <div class="form-group">
                            <label className="label-dashboard" for="fecha">Fecha nacimiento<span class="text-danger"><b>*</b></span></label>
                            <input type="date" class="form-control input-dashboard" readonly onmousedown="" value="1976-08-10" />
                        </div>

                        <div class="form-check-dashboard">
                        <label className="label-dashboard" for="fecha">Género<span class="text-danger"><b>*</b></span></label><br></br>
                            <div class="genero">
                                <form class="checks-dashboard">
                                    <label className="label-dashboard" class="radio-inline-dashboard">
                                        <input type="radio" value="" name="genero" checked />Mujer
                                    </label>
                                    <label className="label-dashboard" class="radio-inline-dashboard">
                                        <input type="radio" value="" name="genero" />Hombre
                                    </label>
                                    <label className="label-dashboard" class="radio-inline-dashboard">
                                        <input type="radio" value="" name="genero" />Otro
                                    </label>
                                </form>
                            </div>
                        </div>
                            <br></br>
                        <div class="form-group">
                            <label className="label-dashboard" for="email">Email<span class="text-danger"><b>*</b></span></label>
                            <input type="email" class="form-control input-dashboard" readonly onmousedown="" value="angievargas2@gmail.com" />
                        </div>

                    </div>

                    <div class="column-3-dashboard">
                        <div class="form-group">
                            <label className="label-dashboard" for="NoDoc">Numero de documento<span class="text-danger"><b>*</b></span></label>
                            <input type="text" class="form-control input-dashboard"  readonly onmousedown="" value="1025417456" />
                        </div>

                        <div class="form-group">
                            <label className="label-dashboard" for="Apellido">Apellidos<span class="text-danger"><b>*</b></span></label>
                            <input type="text" class="form-control input-dashboard"  readonly onmousedown="" value="Vargas Pinzón" />
                        </div>

                        <div class="form-group">
                            <label className="label-dashboard" for="Pais">País de origen<span class="text-danger"><b>*</b></span></label>
                            <input type="text" class="form-control input-dashboard"  readonly onmousedown=""value="Colombia" />
                        </div>

                        <div class="form-group">
                            <label className="label-dashboard" for="telefono">Teléfono de contacto<span class="text-danger"><b>*</b></span></label>
                            <input type="text" class="form-control input-dashboard"  readonly onmousedown="" value="3135207460" />
                        </div>
                    </div>

                    <div class="footer-dashboard">
                        <button class="button-dashboard">Actualizar</button>

                        <br /><br />

                        <div class="contraseñas-dashboard">
                            <div class="contraseña-dashboard">
                                <label className="label-dashboard" for="">Contraseña<span class="text-danger"><b>*</b></span></label>
                                <input type="password" class="form-control input-dashboard" />
                            </div>

                            <div class="confirmar-dashboard">
                                <label className="label-dashboard" for="">Confirmar contraseña<span class="text-danger"><b>*</b></span></label>
                                <input type="password" class="form-control input-dashboard" />
                            </div>
                        </div>
                        <button class="button-dashboard">Cambiar</button>

                    </div>
                </div>


            </section>

        </body>

    );


}


export default DashForm;