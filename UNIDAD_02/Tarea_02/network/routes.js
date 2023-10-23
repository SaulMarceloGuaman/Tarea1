const pais = require('../components/pais/interface')
const ciudad = require('../components/ciudad/interface')

const routes = function( server ) {    
    server.use('/pais', pais)
    server.use('/ciudad', ciudad)
}

module.exports = routes