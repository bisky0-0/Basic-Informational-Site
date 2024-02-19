const http = require('http');
const fs = require('fs');
const url = require('url')

http.createServer((req, res) => {
    let fileName = "./" + req.url
    fs.readFile(fileName, (err, data) => {
        if (err) res.write('not found');

        else {
            res.write(data)
            res.end()
        }
    })
}).listen(8080)