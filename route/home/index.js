var route = require('express').Router()
var imageList = require('./image-list')

route.get(/^\/(docker\/(.+)?)?/, function (req, res) {
    res.render('index', {imageList: imageList})
})

//启动容器
route.get(/\/create\/(.+)?/, function (req, res) {
    if (!imageList[req.params[0]]) {
        res.end('没有相关的镜像')
        return
    }
    var container = imageList[req.params[0]]
    //将
    res.json(container)
})


module.exports = route