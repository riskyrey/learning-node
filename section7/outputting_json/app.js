var http = require('http')
var fs = require('fs')

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type' : 'application/json'})

    var data = {
        firstname : 'Huwaida',
        lastname : 'Azzahra'
    }
    res.end(JSON.stringify(data))
}).listen(1337, '127.0.0.1')