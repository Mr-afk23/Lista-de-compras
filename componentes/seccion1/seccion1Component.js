function seccion1 () {
    let section = document.createElement('section');
    section.className = "seccion1";

    // total
    let total = document.createElement('h2');
    total.id = "total";
    total.innerText = "Q 0.00";
    section.appendChild(total);

    let hr1 = document.createElement('hr');
    section.appendChild(hr1);

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
