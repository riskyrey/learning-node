var fs = require('fs')
var zlib = require('zlib')

var readable = fs.createReadStream(__dirname+'/lorem.txt')

var writable = fs.createWriteStream(__dirname+'/loremcopy.txt')

var compressed = fs.createWriteStream(__dirname+'/lorem.txt.gz')

var gzip = zlib.createGzip()

readable.pipe(writable)
readable.pipe(gzip).pipe(compressed)
