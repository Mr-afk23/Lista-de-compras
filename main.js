import { header } from "./componentes/header/headerComponent.js";

function seccion(){

    let seccion = document.createElement('section');


    //Header 
    seccion.appendChild(header());

    return seccion;
}

document.body.appendChild(seccion());