const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const { buildSchema } = require('graphql')

const config = require('./config')
const db = require('./db')

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const model = require('./model')

var app = express()
db( config.DB_URL )


let schema = buildSchema(`
    type Cliente {
        id: String
        nombre: String
        telefono: String
    }
    type Query {
        clientes: [Cliente]
        cliente(id: Int): Cliente
    }
    type Mutation {
        addCliente(nombre: String, telefono: String): Cliente
    }
`)

let clientes = []
let counter = 1

/*
let root = {
    clientes: () => { return clientes },
    cliente: (data) => {
        for (let i=0; i<clientes.length; i++) {
            if (clientes[i].id == data.id) {
                return clientes[i]
            }
        }
    },
    addCliente: (data) => {
        const objeto = {'id':counter, 'nombre':data.nombre, 'telefono': data.telefono}
        //clientes.push( objeto )
        objeto.save()
        counter++
        return objeto
    }
}
*/

let root = {
    clientes: () => {
        return model.find();
    },
    cliente: ({ id }) => {
        return model.findById(id);
    },
    addCliente: ({ nombre, telefono }) => {
        const nuevoCliente = new model({ nombre, telefono });
        nuevoCliente.save();
        return nuevoCliente;
    },
};

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}))


app.listen(config.PORT, () => {
    console.log(`Server started at http://localhost:${config.PORT}`)
})