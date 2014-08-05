var app = require('express')()

app.set('views', require('path').join(__dirname, 'view'))
app.set('view engine', 'jade')

require('./route')(app)

app.listen(3000)

var Manager = require('port-manager');
var manager = new Manager();

manager.include(2999, 9000)
    .claim('http1')
    .claim('http2')
    .claim('http2')
    .claim('http2')
    .claim('http2')
    .claim('http2')
    .claim('http2')
;

manager.on('claim', function (service) {
    console.log(service.name, service.port);
    // in your terminal you see two rows:
    // http1  2000
    // http2  2101
});


var map = {
    paas: {
        "ubuntu14.04": {
            title: "Ubuntu 14.04",
            desc: "Ubuntu官方镜像，apt-get update截至2014年8月3日",
            run: "docker run -d -p $port:22 ubuntu:14.04.sshd /usr/sbin/sshd -D"
        },
        "centos 7": {
            title: "CentOS 7",
            desc: "CentOS官方镜像",
            run: "docker run -d -p $port:22 centos:sshd /usr/sbin/sshd -D"
        }
    },
    laas: {
        "mysql": {
            title: "MySQL 5.6.17",
            desc: "默认密码为123",
            run: "docker run -d -p $port:3306 -e MYSQL_ROOT_PASSWORD=123 mysql:5.6.17"
        },
        "mongodb": {
            title: "MongoDB",
            desc: "MongoDB",
            run: "docker run -d -p $port:27017 mongo:2.6.1"
        },
        "redis": {
            run: "docker run -d -p 3333:6379 redis:2.8.9"
        }
    }
}