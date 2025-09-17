import { obtenerProductos , guardarProductos} from "./control/miLocalStorange.js";
import { header } from "./componentes/header/headerComponent.js";
import { formularioCompras } from "./componentes/formulario/formularioComponent.js";

function seccion() {
    // Obtener productos del localStorage
    let productosGuardados = obtenerProductos();

    if (!productosGuardados || productosGuardados.length === 0) {
        productosGuardados = [];
        guardarProductos(productosGuardados);
    }

    console.log("Productos cargados:", productosGuardados);

    // Renderizar componentes
    document.body.appendChild(header());
    document.body.appendChild(formularioCompras());
}


document.body.appendChild(seccion());