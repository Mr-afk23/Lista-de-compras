function header () {

let header = document.createElement('header');
header.className = "header";

let titulo = document.createElement('h2');
header.appendChild(titulo);
titulo.innerText = "Lista de compras"
titulo.className = "titulo1"


let descarga = document.createElement('a');
header.appendChild(descarga);
descarga.innerText = "⬇️";
titulo.className = "descarga"


return header;

}

export{header}