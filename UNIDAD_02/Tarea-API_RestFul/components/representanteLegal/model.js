const mongoose = require('mongoose')
const Schema = mongoose.Schema

const req_string = {
    type: String,
    required: true
}

const empresa_schema = new Schema({
    empresa: {
        type: Schema.ObjectId,
        ref: 'empresa'
    },
    ruc: req_string,
    nombre: req_string
}, {
    timestamps: true
})

const representanteLegal_schema = new Schema({
    ruc: String,
    cedula: String,
    nombre: String,
    apellido: String,
    email: String,
    domicilio: String,
    telefono: String,
    empresa: [empresa_schema]
})

const model = mongoose.model('RepresentanteLegal', representanteLegal_schema)
module.exports = model