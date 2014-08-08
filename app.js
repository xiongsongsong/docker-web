var express = require('express')
var app = express()
var path = require('path')

app.set('views', require('path').join(__dirname, 'view'))
app.set('view engine', 'jade')
app.use(express.static(path.join(__dirname, 'assets')))
app.use(express.static(path.join(__dirname, 'ng-html')))

require('./route')(app)

app.listen(3000)