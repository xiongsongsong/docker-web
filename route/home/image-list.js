module.exports = {
    "ubuntu1404": {
        title: "Ubuntu 14.04",
        desc: "Ubuntu官方镜像，apt-get update截至2014年8月3日",
        run: "docker run -d -p ${auto}:22 ubuntu:14.04.sshd /usr/sbin/sshd -D"
    },
    "centos7": {
        title: "CentOS 7",
        desc: "CentOS官方镜像",
        run: "docker run -d -p ${auto}:22 centos:sshd /usr/sbin/sshd -D"
    },
    "mysql5.6.7": {
        title: "MySQL 5.6.17",
        desc: "MySQL 5.6.17，默认密码为123",
        run: "docker run -d -p ${auto}:3306 -e MYSQL_ROOT_PASSWORD=${passwd|设置MySQL密码，英文或数字} mysql:5.6.17"
    },
    "mongodb2.6.1": {
        title: "MongoDB 2.6.1",
        desc: "MongoDB 2.6.1",
        run: "docker run -d -p ${auto}:27017 mongo:2.6.1"
    },
    "redis2.8.9": {
        title: "Redis 2.8.9",
        desc: "Redis 2.8.9",
        run: "docker run -d -p ${auto}:6379 redis:2.8.9"
    }
}
