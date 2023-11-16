import Role from '../models/role'

export const getRoles = async(req, res) =>{
    const roles = await Role.find({})
    res.status(200).json(roles)
}