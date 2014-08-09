var express = require('express')
var app = express()
var path = require('path')
var bodyParser = require('body-parser')
var csrf = require('csurf')
var session = require('express-session')
var cookieParser = require('cookie-parser')

app.set('views', require('path').join(__dirname, 'view'))
app.set('view engine', 'jade')
app.use(express.static(path.join(__dirname, 'assets')))
app.use(express.static(path.join(__dirname, 'ng-html')))
app.use(session({secret: 'dockerWillBeHero'}))
app.use(cookieParser('dockerWillBeHero'))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(csrf())
require('./route')(app)

app.listen(3000)