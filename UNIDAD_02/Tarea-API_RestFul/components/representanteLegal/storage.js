const model = require('./model')

async function agregarRepresentanteLegal(dato) {
    const resultado = await new model(dato)
    return resultado.save()
}

async function obtenerRepresentanteLegal(filtro_representante) {
    console.log(filtro_representante)
    return new Promise((resolve, reject) => {
        let filtro = {}
        if (filtro_representante) {
            filtro = {cedula: filtro_representante}
        }
        model.find(filtro)
            .populate({
                path:'listaempresas',
                populate:{
                    path: 'empresa',
                    model: 'empresa'
                }
            })
            .exec((error, data) =>{
                if (error)
                    reject(error)
                else
                    resolve(data)
            })
    })
}


async function actualizarRepresentanteLegal(dato) {
    const nuevo_objeto = await model.findOne({codigo: dato.codigo})

    nuevo_objeto.codigo = dato.codigo
    nuevo_objeto.nombre = dato.nombre

    const resultado = await nuevo_objeto.save()
    return resultado
}

async function eliminarRepresentanteLegal(dato) {
    const resultado = await model.deleteOne({codigo: dato.codigo})
    return resultado
}

module.exports = {
    agregar: agregarRepresentanteLegal,
    obtener: obtenerRepresentanteLegal,
    actualizar: actualizarRepresentanteLegal,
    eliminar: eliminarRepresentanteLegal
}