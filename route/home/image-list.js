module.exports = {
    "ubuntu1404": {
        title: "Ubuntu 14.04",
        desc: "Ubuntu官方镜像，apt-get update截至2014年8月3日",
        run: "docker run -d -p ${random}:22 ubuntu:14.04.sshd /usr/sbin/sshd -D"
    },
    "centos7": {
        title: "CentOS 7",
        desc: "CentOS官方镜像",
        run: "docker run -d -p ${random}:22 centos:sshd /usr/sbin/sshd -D"
    },
    "mysql": {
        title: "MySQL 5.6.17",
        desc: "MySQL 5.6.17，默认密码为123",
        run: "docker run -d -p ${random}:3306 -e MYSQL_ROOT_PASSWORD=${passwd|请设置MySQL密码} mysql:5.6.17"
    },
    "mongodb": {
        title: "MongoDB 2.6.1",
        desc: "MongoDB 2.6.1",
        run: "docker run -d -p ${random}:27017 mongo:2.6.1"
    },
    "redis": {
        title: "MongoDB 2.8.9",
        desc: "Redis 2.8.9",
        run: "docker run -d -p ${random}:6379 redis:2.8.9"
    }
}
