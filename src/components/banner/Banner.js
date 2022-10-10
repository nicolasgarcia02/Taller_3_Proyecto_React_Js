import "./Banner.css";
function Banner({textobanner}){
    return(
        <div id="fondo">
            <h1 class="fondo-title">{textobanner}</h1>
        </div>
    );
}

export default Banner;