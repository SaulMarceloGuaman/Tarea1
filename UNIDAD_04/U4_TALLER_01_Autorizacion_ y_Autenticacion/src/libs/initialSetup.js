import Role from '../models/role'

export const create_roles = async () => {
    try {
        console.log('create_roles')
        const count = await Role.estimatedDocumentCount()
        if (count > 0) 
            return
        
        const values = await Promise.all([
            new Role({name: 'admin'}).save(),
            new Role({name: 'user'}).save()
        ])
        
        console.log( values )    
    } catch(error) {
        console.error( error )
    }
}