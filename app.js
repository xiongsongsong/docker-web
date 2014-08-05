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

