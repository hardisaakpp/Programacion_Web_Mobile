function descargarArchivo(url, callback) {
    console.log(`Iniciando la descarga del archivo desde: ${url}`);
    setTimeout(() => {
        console.log("Archivo descargado");
        callback(); // Ejecutamos la función pasada como callback
    }, 2000); // Simula 2 segundos de espera
}

function procesarArchivo() {
    console.log("Procesando el archivo...");
}

descargarArchivo("https://example.com/archivo", procesarArchivo);
