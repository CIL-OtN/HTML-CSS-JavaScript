
// Read-, Create-, Update-, Delete-, Rename files

let http = require('http');
let fs = require('fs');

http.createServer( (req, res) => {

    fs.readFile('../package.json', (err, data) => {

        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write(data);

        return res.end();
    })

}).listen(8080);

console.log("Hallo from ... ")
