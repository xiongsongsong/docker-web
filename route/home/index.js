var route = require('express').Router()
var Docker = require('dockerode')
var docker = new Docker({host: 'http://10.0.13.56', port: 2375});

route.get('/', function (req, res) {
    res.render('index')
    docker.listContainers(function (err, containers) {
        console.log(err, containers)
        return;
        containers.forEach(function (containerInfo) {
            //console.log(containerInfo)
        });
    });

    docker.listImages(function (err, containers) {
        console.log(err, containers)
    });
})

module.exports = route