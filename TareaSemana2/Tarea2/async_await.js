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

async function manejarArchivo(url) {
    try {
        const mensaje = await descargarArchivo(url); // Esperamos a que se resuelva la promesa
        console.log(mensaje);
        console.log("Procesando el archivo...");
    } catch (error) {
        console.error("Error:", error); // Capturamos errores
    }
}

// Ejecutamos la función asincrónica
manejarArchivo("https://example.com/archivo");
