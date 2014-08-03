var route = require('express').Router()
var Docker = require('dockerode')
var docker = new Docker({host: 'http://localhost', port: 2375});

route.get('/', function (req, res) {
    res.render('index')
    docker.listContainers(function (err, containers) {
       //console.log(err, containers)
        containers.forEach(function (containerInfo) {
            //console.log(containerInfo)
        });
    });

    docker.listImages(function (err, containers) {
        console.log(err, containers)
    });
})

module.exports = route