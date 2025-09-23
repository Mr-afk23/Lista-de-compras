import { obtenerProductos, guardarProductos } from "../../control/miLocalStorange.js";

function formularioCompras() {
    const contenedor = document.createElement("section");
    contenedor.className = "contenedor-formulario";

    // Total
    const total = document.createElement("h3");
    total.className = "total-monto";
    total.innerText = "Q. 0.00";
    contenedor.appendChild(total);

    let totalActual = 0; // variable para llevar la suma

    // Inputs de producto (con clase especial para excluir de la captura)
    const contInputs = document.createElement("div");
    contInputs.className = "contenedor-inputs no-captura"; // 👈 clase para ignorar
    contenedor.appendChild(contInputs);

    const inputNombre = document.createElement("div");
    inputNombre.setAttribute("contentEditable", true);
    inputNombre.className = "input-nombre";
    inputNombre.setAttribute("placeholder", "Nombre del producto");
    contInputs.appendChild(inputNombre);

    const inputPrecio = document.createElement("div");
    inputPrecio.setAttribute("contentEditable", true);
    inputPrecio.className = "input-precio";
    inputPrecio.setAttribute("placeholder", "Precio");
    contInputs.appendChild(inputPrecio);

    const btnAgregar = document.createElement("button");
    btnAgregar.className = "btn-agregar";
    btnAgregar.innerText = "Agregar";
    contInputs.appendChild(btnAgregar);

    // Lista de productos
    const listaProductosCont = document.createElement("div");
    listaProductosCont.className = "lista-productos";
    contenedor.appendChild(listaProductosCont);

    // Función para actualizar el total
    function actualizarTotal() {
        const productos = obtenerProductos();
        totalActual = productos.reduce((acc, p) => acc + p.precio, 0);
        total.innerText = `Q. ${totalActual.toFixed(2)}`;
    }

    // Función agregar producto
    btnAgregar.addEventListener("click", () => {
        const nombre = inputNombre.innerText.trim();
        const precio = parseFloat(inputPrecio.innerText.trim());

        if (!nombre || isNaN(precio)) {
            alert("Por favor ingresa un nombre y un precio válido");
            return;
        }

        // Crear div del producto
        const item = document.createElement("div");
        item.className = "item-producto";
        item.innerText = `${nombre} - Q. ${precio.toFixed(2)}`;

        // Botón eliminar
        const btnEliminar = document.createElement("button");
        btnEliminar.className = "btn-eliminar";
        btnEliminar.innerText = "❌";
        btnEliminar.style.marginLeft = "10px";
        item.appendChild(btnEliminar);

        listaProductosCont.appendChild(item);

        // Guardar en localStorage
        const productos = obtenerProductos();
        productos.push({ nombre, precio });
        guardarProductos(productos);

        // Actualizar total
        actualizarTotal();

        // Limpiar inputs
        inputNombre.innerText = "";
        inputPrecio.innerText = "";

        // Evento eliminar
        btnEliminar.addEventListener("click", () => {
            listaProductosCont.removeChild(item);

            const productosActualizados = obtenerProductos().filter(
                p => !(p.nombre === nombre && p.precio === precio)
            );
            guardarProductos(productosActualizados);

            actualizarTotal();
        });
    });

    return contenedor;
}

export { formularioCompras };
