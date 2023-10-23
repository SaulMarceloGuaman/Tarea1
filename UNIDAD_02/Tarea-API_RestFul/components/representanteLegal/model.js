const mongoose = require('mongoose')
const Schema = mongoose.Schema

const req_string = {
    type: String,
    required: true
}

const listaempresas_schema = new Schema({
    empresa: {
        type: Schema.ObjectId,
        ref: 'empresa'
    }
}, {
    timestamps: true
})

const representantelegal_schema = new Schema({
    ruc: String,
    cedula: String,
    nombre: String,
    apellido: String,
    email: String,
    domicilio: String,
    telefono: String,
    listaempresas: [listaempresas_schema]
})

const model = mongoose.model('representantelegal', representantelegal_schema)
module.exports = model