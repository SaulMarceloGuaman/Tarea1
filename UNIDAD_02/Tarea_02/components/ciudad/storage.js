const {error} = require('../../network/response')
const model = require('./model')

async function agregarCiudad(dato) {
    const resultado = await new model(dato)
    return resultado.save()
}

function get_ciudad(filtrociudad) {
    console.log(filtrociudad)
    return new Promise((resolve, reject) => {
        let filtro = {}
        if (filtrociudad) {
            filtro = {nombre: filtrociudad}
        }
        console.log(filtro)

        model.find(filtro)
            .populate('pais')
            .exec((error, data) => {
                lista = []
                for (elemento of data) {
                    lista.push({id: elemento._id, ciudad: elemento.nombre, pais: elemento.pais.nombre})
                }
                if (error)
                    reject(error)
                else
                    resolve(lista)
            })
    })
}


async function actualizarCiudad(dato) {
    const nuevo_objeto = await model.findOne({codigo: dato.codigo})

    nuevo_objeto.codigo = dato.codigo
    nuevo_objeto.nombre = dato.nombre

    const resultado = await nuevo_objeto.save()
    return resultado
}

async function eliminarCiudad(dato) {
    const resultado = await model.deleteOne({codigo: dato.codigo})
    return resultado
}

module.exports = {
    agregar: agregarCiudad,
    obtener: get_ciudad,
    actualizar: actualizarCiudad,
    eliminar: eliminarCiudad
}