


// To make Node.js act as an HTTP server
let http = require('http');
let url = require('url');
let dt = require('./1.1_myfirstmodule');


http.createServer(function (req, res) {

    // 200 means that all is OK, the second argument is an object containing the response headers
    res.writeHead(200, {'Content-Type': 'text/html'});
    
    // Write a response to the client
    res.write('Guten Tag Wowa es ist gerade ' + dt.myDateTime()); 
    
    // Represents the request from the client, as an object
    res.write(req.url + "     ");

    // Example in URL: http://localhost:8080//?year=1987&month=September
    let q = url.parse(req.url, true).query;
    let txt = q.year + " " + q.month;

    // End the response
    res.end(txt);

// The server object listens on port 8080
}).listen(8080); 






console.log("Letzte Zeile im Programm!")