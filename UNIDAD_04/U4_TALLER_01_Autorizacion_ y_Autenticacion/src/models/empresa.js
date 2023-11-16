import {Schema, model} from "mongoose";

const req_string = {
    type: String,
    required: true
}

const empresa_schema = new Schema({
    ruc: req_string,
    nombre: req_string,
    domicilio: String,
    telefono: String,
})

export default model('empresa', empresa_schema)