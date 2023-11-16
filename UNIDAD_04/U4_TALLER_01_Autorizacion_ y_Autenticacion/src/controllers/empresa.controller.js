import Empresa from "../models/empresa"

export const createEmpresa = async (req, res) =>{
    const{ruc, nombre, domicilio, telefono} = req.body
    const new_empresa = new Empresa({ruc, nombre, domicilio, telefono})
    const empresa_saved = await new_empresa.save()

    res.status(201).json(empresa_saved)
}

export const getEmpresas = async (req, res) => {
    const empresas = await Empresa.find({})
    res.status(200).json(empresas)
}

export const getEmpresaById = async(req, res) =>{
    const empresa = await Empresa.findById(req.params.empresaId)
    res.status(200).json(empresa)
}