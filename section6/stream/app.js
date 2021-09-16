var fs = require('fs')
var readable = fs.createReadStream(__dirname + '/lorem.txt', {encoding : 'utf8', highWaterMark: 32*1024})

var writable = fs.createWriteStream(__dirname + '/loremcopy.txt')

readable.on('data', function(chunk){
    console.log(chunk.length)
    writable.write(chunk)
})