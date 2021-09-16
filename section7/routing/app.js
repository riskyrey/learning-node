var http = require('http')
var fs = require('fs')

http.createServer(function(req, res){
    if (req.url=="/"){
        res.writeHead(200, {'Content-Type' : 'text/plain'})
        res.end("Ooops, sorryy")
    }

    if (req.url=="/show"){
        res.writeHead(200, {'Content-Type' : 'application/json'})
        var data = {
            firstname : 'Huwaida',
            lastname : 'Azzahra'
        }
        res.end(JSON.stringify(data))
    }
    res.writeHead()
    res.end()
}).listen(1337, '127.0.0.1')