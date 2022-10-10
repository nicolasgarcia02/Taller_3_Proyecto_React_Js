import location from "./ubicacion.jpg";
import "./Location.css";
function Location(){
    return(
        <div id="container-location">
        <div class="ubi"><h1>Ubícanos</h1>
        </div>        
        <div>
            <iframe class="map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2603.668779715141!2d-74.07073232748797!3d4.605737218435465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sco!4v1658870245530!5m2!1ses!2sco"></iframe>
            </div>
            <div class="location-zone">
            <div class="linea">
                <p>AVENIDA CARRERA 8, #12-42, BOGOTA DC, COLOMBIA</p>
                </div>
            </div>
            
            <div class="dir1">
                <p>+57 601 4567899</p>
            </div>
        </div>
    );
}

export default Location;