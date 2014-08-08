var route = require('express').Router()
var map = require('./imageList')
var Manager = require('port-manager')
var manager = new Manager()

manager.include(2999, 4001)
    .claim('http1')
    .claim('http2')
    .claim('http3')
    .claim('http4')

manager.on('claim', function (service) {

})

route.get(/\/create\/(.+)?/, function (req, res) {
    if (!map[req.params[0]]) {
        res.end('没有相关的镜像')
        return
    }
    var container = map[req.params[0]]
    res.json(container)
})

module.exports = route