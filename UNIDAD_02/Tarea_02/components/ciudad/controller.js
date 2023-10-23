const storage = require('./storage')

function agregarCiudad( dato ) {
    return new Promise((resolve, reject) => {
        resolve( storage.agregar( dato ) )
    })
}

function obtenerCiudad( filtro ) {
    return new Promise((resolve, reject) => {
        resolve( storage.obtener( filtro ) )
    })
}

function actualizarCiudad( dato ) {
    return new Promise((resolve, reject) => {
        let ciudad={
            codigo:dato.codigo,
            nombre:dato.nombre
        }
        resolve( storage.actualizar( ciudad ) )
    })
}

function eliminarCiudad( dato ) {
    return new Promise((resolve, reject) => {
        resolve( storage.eliminar( dato ) )
    })    
}

module.exports = {
    agregarCiudad,
    obtenerCiudad,
    actualizarCiudad,
    eliminarCiudad
}