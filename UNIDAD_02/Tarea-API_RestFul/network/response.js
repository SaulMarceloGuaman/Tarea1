exports.success = function (req, res, data, estado) {
    res.status(estado).send({ success: '', body: data })
}

exports.error = function (req, res, data, estado) {
    res.status(estado).send({ error: data, body: '' })
}