var route = require('express').Router()
var imageList = require('./image-list')
var exec = require('child_process').exec
var Manager = require('port-manager')


route.get(/^\/(docker\/(.+)?)?/, function (req, res) {
    res.render('index', {imageList: imageList, csrfToken: req.csrfToken()})
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


route.post('/run', function (req, res) {
    var name = req.body.name
    if (!imageList[name]) {
        res.json({code: -1, msg: '无该镜像'})
        return
    }

    var diskspace = require('diskspace');
    diskspace.check('/', function (err, total, free, status) {
        if (free / total > 0.7) {
            res.json({code: -2, msg: '磁盘配额不足'})
            return
        }

        //开始生成端口号
        var manager = new Manager()

        manager.include(3000, f.end(service)
        })

        return

        var child = exec('',
            function (error, stdout, stderr) {
                console.log('stdout: ' + stdout);
                console.log('stderr: ' + stderr);
                if (error !== null) {
                    console.log('exec error: ' + error);
                }
            })
    })

})

module.exports = route