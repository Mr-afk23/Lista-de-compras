import { obtenerProductos , guardarProductos  } from "../../control/miLocalStorange.js";

function formularioCompras() {
    const contenedor = document.createElement("section");
    contenedor.className = "contenedor-formulario";


    // Total
    const total = document.createElement("h3");
    total.className = "total-monto";
    total.innerText = "Q. 0.00";
    contenedor.appendChild(total);

    // Inputs de producto
    const contInputs = document.createElement("div");
    contInputs.className = "contenedor-inputs";

    const inputNombre = document.createElement("div");
    inputNombre.setAttribute("contentEditable", true);
    inputNombre.className = "input-nombre";
    contInputs.appendChild(inputNombre);

    const inputPrecio = document.createElement("div");
    inputPrecio.setAttribute("contentEditable", true);
    inputPrecio.className = "input-precio";
    contInputs.appendChild(inputPrecio);

    const btnAgregar = document.createElement("button");
    btnAgregar.className = "btn-agregar";
    btnAgregar.innerText = "Agregar";
    contInputs.appendChild(btnAgregar);

    contenedor.appendChild(contInputs);

    // Lista de productos
    const listaProductosCont = document.createElement("div");
    listaProductosCont.className = "lista-productos";
    contenedor.appendChild(listaProductosCont);

    // Función agregar producto
    btnAgregar.addEventListener("click", () => {
        const nombre = inputNombre.innerText.trim();
        const precio = parseFloat(inputPrecio.innerText.trim());

        // Crear div del producto
        const item = document.createElement("div");
        item.className = "item-producto";
        item.innerText = `${nombre} - Q. ${precio.toFixed(2)}`;
        listaProductosCont.appendChild(item);

        // Guardar en localStorage
        const productos = obtenerProductos();
        productos.push({ nombre, precio });
        guardarProductos(productos);

        console.log("Producto agregado:", { nombre, precio });

    });

    return contenedor;
}

export { formularioCompras };
