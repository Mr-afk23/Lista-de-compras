const CARRITO_KEY = "carrito";

function obtenerProductos() {
    return JSON.parse(localStorage.getItem(CARRITO_KEY)) || [];
}

function guardarProductos(lista) {
    localStorage.setItem(CARRITO_KEY, JSON.stringify(lista));
}

function agregarProducto(nombre, precio) {
    const productos = obtenerProductos();
    productos.push({ nombre, precio });
    guardarProductos(productos);
}

export { obtenerProductos, guardarProductos, agregarProducto };
