import { descargarSeccion } from "../../control/descargar.js"; 

function Header() {
    let header = document.createElement('header');
    header.className = "header";

    let titulo = document.createElement('h2');
    titulo.innerText = "Lista de compras";
    titulo.className = "titulo1";
    header.appendChild(titulo);

    let descarga = document.createElement('a');
    descarga.innerText = "⬇️";
    descarga.className = "descarga";
    header.appendChild(descarga);

    descarga.addEventListener('click', () => {
        descargarSeccion('.todo'); // captura la sección principal
    });

    return header;
}

export { Header };
