function seccion1 () {
    let section = document.createElement('section');
    section.className = "seccion1";


    // título
    let subtitulo = document.createElement('h3');
    subtitulo.innerText = "Lista de Compras";
    section.appendChild(subtitulo);

    // lista
    let lista = document.createElement('ul');
    lista.id = "lista-compras";
    section.appendChild(lista);

    let hr2 = document.createElement('hr');
    section.appendChild(hr2);

    return section;
}

export { seccion1 };
