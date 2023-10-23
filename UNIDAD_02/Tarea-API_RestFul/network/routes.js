const empresa = require('../components/empresa/interface')
const representanteLegal = require('../components/representanteLegal/interface')

const routes = function(server) {
    server.use('/empresa', empresa)
    server.use('/representanteLegal', representanteLegal)
}

module.exports = routes