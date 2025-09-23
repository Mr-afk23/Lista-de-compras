// control/descargar.js
export function descargarSeccion(selector = 'body') {
    const contenido = document.querySelector(selector);
    if (!contenido) {
        console.error(`No se encontró el elemento '${selector}'`);
        return;
    }

    html2canvas(contenido, {
        ignoreElements: (element) => element.classList.contains("no-captura") // 👈 ignora todo lo que tenga esta clase
    }).then(canvas => {
        const link = document.createElement('a');
        link.download = 'contenido.png';
        link.href = canvas.toDataURL();
        link.click();
    }).catch(err => {
        console.error("Error al generar la captura:", err);
    });
}
