import mongoose, { Schema } from "mongoose";

const req_string = {
    type: String,
    required: true
}

const empresa_detalle_schema = new Schema({
    empresa: {
        type: Schema.ObjectId,
        ref:'empresa'
    }
},{
    timestamps: true,
})

const representante_schema = new Schema({
    ruc: req_string,
    cedula: req_string,
    nombre: req_string,
    apellido: req_string,
    email: String, 
    domicilio: String,
    telefono: String,
    empresa_detalle:[empresa_detalle_schema]
},{
    timestamps: true,
})

export default mongoose.model('representante', representante_schema)
