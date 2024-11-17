function descargarArchivo(url) {
    return new Promise((resolve, reject) => {
        console.log(`Iniciando la descarga del archivo desde: ${url}`);
        setTimeout(() => {
            const exito = true; // Simula si la descarga fue exitosa
            if (exito) {
                resolve("Archivo descargado correctamente");
            } else {
                reject("Error al descargar el archivo");
            }
        }, 2000); // Simula 2 segundos de espera
    });
}

function procesarArchivo() {
    console.log("Procesando el archivo...");
}

// Uso de la promesa
descargarArchivo("https://example.com/archivo")
    .then((mensaje) => {
        console.log(mensaje); // Éxito
        procesarArchivo();
    })
    .catch((error) => {
        console.error(error); // Error
    });
