const storage = require('./storage')

function agregarRepresentanteLegal( dato ) {
    return new Promise((resolve, reject) => {
        resolve( storage.agregar( dato ) )
    })
}

function obtenerRepresentanteLegal( filtro ) {
    return new Promise((resolve, reject) => {
        resolve( storage.obtener( filtro ) )
    })
}

function actualizarRepresentanteLegal( dato ) {
    return new Promise((resolve, reject) => {
        let pais={
            codigo:dato.codigo,
            nombre:dato.nombre
        }
        resolve( storage.actualizar( pais ) )
    })
}

function eliminarRepresentanteLegal( dato ) {
    return new Promise((resolve, reject) => {
        resolve( storage.eliminar( dato ) )
    })    
}

module.exports = {
    agregarRepresentanteLegal,
    obtenerRepresentanteLegal,
    actualizarRepresentanteLegal,
    eliminarRepresentanteLegal
}