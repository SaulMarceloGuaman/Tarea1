import Representante from "../models/representante"
import Empresa from "../models/empresa"

export const createRepresentante = async (req, res) =>{
    try{
        const{ruc, cedula, nombre, apellido, email, domicilio, telefono, empresa_detalle} = req.body
        //const empresaRucs = empresa_detalle.map(empresa => empresa.ruc)
        //const empresa_found = await Empresa.find({ ruc: {$in: empresaRucs} })
        //const new_representante = new Representante({ruc, cedula, nombre, apellido, email, domicilio, telefono, empresa_detalle: empresa_found.map(((empresa) => empresa._id)) })
        const new_representante = new Representante({ruc, cedula, nombre, apellido, email, domicilio, telefono, empresa_detalle})
        const representante_saved = await new_representante.save()
        res.status(201).json(representante_saved)
    }catch(error){
        console.error(error)
    }
}

export const getRepresentante = async(req, res) =>{
    console.log(req.query.ruc)
    let filtro = { };
    if(req.query.ruc){
        filtro = {ruc: req.query.ruc };
    }
    
    const representante = await Representante.find(filtro)
    res.status(200).json(representante)
}

