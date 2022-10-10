import "./Article.css";
function Article(){
    return(
        <body class="body-formulario">
        <div class="container-register">
        <p id="ti">Regístrate</p><br></br>
       <div class="container-columns">
           <form class="container-form">
               <div class="column">
                   <div class="columns">
                       <div>
                           <label>Tipo de documento<span class="text-danger"><b>*</b></span></label>
                           <input type="text"></input>
                       </div>
                       <div>
                           <label>Nombre<span class="text-danger"><b>*</b></span></label>
                           <input type="text"></input>
                       </div>
                       <div>
                           <label>Fecha de nacimiento<span class="text-danger"><b>*</b></span></label>
                           <input type="date"></input>
                       </div>

                       <div>
                           <label>Correo electronico<span class="text-danger"><b>*</b></span></label>
                           <input type="email"></input>
                       </div>
                       <div>
                           <label>País de origen<span class="text-danger"><b>*</b></span></label>
                           <input type="text"></input>
                       </div>
                       <div>
                           <label>contraseña<span class="text-danger"><b>*</b></span></label>
                           <input type="password"></input>
                       </div>
                   </div>
                   <div class="columns">
                       <div>
                           <label>Número de documento<span class="text-danger"><b>*</b></span></label>
                               <input type="number"></input>
                       </div>
                       <div>
                           <label>Apellido<span class="text-danger"><b>*</b></span></label>
                           <input type="text"></input>
                       </div>
                       <div>
                           <label for="gender">Género<span class="text-danger"><b>*</b></span></label>
                           <div class="gender">
                           <label><input type="radio">Mujer</input></label>
                           <label><input type="radio">Hombre</input></label>
                           <label><input type="radio">Otro</input></label>
                           </div>
                       </div>
                       <div>
                           <label>Telefono<span class="text-danger"><b>*</b></span></label>
                           <input type="number"></input>
                       </div>
                       <div>
                           <label>Foto<span class="text-danger"><b>*</b></span></label>
                           <input type="text" placeholder="Seleccionar Archivo"></input>
                       </div>
                       <div>
                           <label>Confirmar contraseña<span class="text-danger"><b>*</b></span></label>
                           <input type="password"></input>
                       </div>
                   </div>
               </div>
               <div class="ingresar">
                   <button class=""><a href="dashboard.html">Ingresar</a></button>

           </div>
           </form>
       </div>
   </div>
   </body>
    );
}

export default Article;