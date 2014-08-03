var app = require('express')()

app.set('views', require('path').join(__dirname, 'view'))
app.set('view engine', 'jade')

require('./route')(app)

app.listen(3000)

var map = {
    "ubuntu14.04": {
        title: "Ubuntu官方镜像",
        desc: "Ubuntu官方镜像，apt-get update截至2014年8月3日"

    }
}